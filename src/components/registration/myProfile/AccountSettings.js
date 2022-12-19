import React, { useEffect, useState }  from "react";
import "../../../css/table.css";
import styled from 'styled-components'
import { devices } from "../../../data/devices"
import { request } from "../../../data/fetch";
import { parseWithOptions } from "date-fns/fp";

export default function AccountSettings(props) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // 0 means english, 1 means chinese
  const [language, setLanguage] = useState(0);
  const [message, setMessage] = useState("");
  
  function displayParentFields()  {
    const labels = ["First Name", "Last Name", "Phone Number", "Email", "Address"]
    const states = [firstName, lastName, phoneNumber, email, address]
    const update = [setFirstName, setLastName, setPhoneNumber, setEmail, setAddress]
    var arr = []
    for (let i = 0; i < labels.length; i++){
      console.log(i);
      arr.push(
        <Box key = {i}>
          <Label> {labels[i]} </Label>
          <Input
            value={states[i]}
            onChange={(e) => {
              update[i](e.target.value);
            }}
          />
        </Box>
      );
    }
    return arr;
  }

  const [curPassword, setCurPassword] = useState()
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
  function displayPasswordFields()  {
    const labels = ["Current Pasword", "New Pasword", "Confirm Password"]
    const states = [curPassword, password1, password2]
    const update = [setCurPassword, setPassword1, setPassword2]
    var arr = []
    for (let i = 0; i < labels.length; i++){
      console.log(i);
      arr.push(
        <Box key = {i}>
          <Label> {labels[i]} </Label>
          <Input
            id={`password-${i}`}
            value={states[i]}
            type="password"
            onChange={(e) => {
              update[i](e.target.value);
            }}
          />
        </Box>
      );
    }
    return arr;
  }
  useEffect(() => {
    async function data() {
      await request("/parents/getparent", "post", {
        parentid: props.parentid
      }).then((res) => {
        const parent = res;
        console.log(res)
        setFirstName(parent["first name"])
        setLastName(parent["last name"])
        setPhoneNumber(parent["phone number"])
        setEmail(parent["email"])
        setAddress(parent["address"])
        if (parent["language"]) setLanguage(parent["language"])
      }).catch(err => {
        console.log(err)
      });
    }
    data();
  }, [])
  
  function toggleVisibility() {
    console.log("toggled")
    for (let i = 0; i < 3; i++){
      const bar = document.getElementById(`password-${i}`);
      if (bar.type === "password") bar.type = "text";
      else bar.type = "password";
    }
  }
  const [success, setSuccess] = useState();
  const [mismatch, setMismatch] = useState();
  const [loading, setLoading] = useState();
  function onSubmit() {
    const args = {
      pswd: password1,
      email: email,
      phonenumber: phoneNumber,
      address: address
    }
    const post = async() => {
      await request("/edit/protected", "post", args);
      setLoading(false);
    }
    setLoading(true);
    post();
  }
  return (
    <Container>
      <Pad>
        <Section>
          <Title>Parents</Title>
          {displayParentFields()}
        </Section>

        <Section>
          <LanguageContainer>
            <Title>Language</Title>
            <div style={{display: "flex"}}>
              <MiniButton active = {language} lang = {0} onClick = {() => setLanguage(0)}>
                English
              </MiniButton>
              <MiniButton active = {language} lang = {1} onClick = {() => setLanguage(1)}>
                中文
              </MiniButton>
            </div>
            </LanguageContainer>
        </Section>
        <Section>
          <Title>Change Password</Title>
          {displayPasswordFields()}
          <div style={{display: "flex", justifyContent: "right"}}>
            <button onClick = {() => toggleVisibility()} style={{fontSize: "20px"}}>
              Toggle Visibility
            </button>
          </div>
            
          <Mismatch>{mismatch}</Mismatch>
        </Section>
        <Section>
          <div>
            <Submit>Update</Submit>
            <Success>{success}</Success>
          </div>
        </Section>
      </Pad>
    </Container>
  );
}
const LanguageContainer = styled.div`
   
  @media ${devices.mobile}{
    display: block;
    margin: auto;
  }
  @media ${devices.tablet}{
    display: flex;
    margin: auto;   
  }
`

const Mismatch = styled.div`
  color: red;
  text-align: center;
  @media ${devices.mobile} {
    font-size: 15px;
  }
  @media ${devices.tablet} {
    font-size: 20px;
  }
`;

const Section = styled.div`
  @media ${devices.mobile}{
    padding: 10px 0px 20px;

  }
  @media ${devices.tablet}{
    padding: 20px 0px 30px;

  }
  @media ${devices.laptop}{
    padding: 20px 0px 30px;

  }
  @media ${devices.laptopL}{
    padding: 20px 0px 30px;
  }
`
const MiniButton = styled.div`
  background-color: ${(props) => (props.active === props.lang) ? "#EDD662": "white"};
  border-radius: 25px;
  font-weight: 700;

  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
  &:hover { text-decoration: none; }
  &:active { text-decoration: none; }

  @media ${devices.mobile}{
    display: block;
    width: 80px;
    margin-right: 25px;

  }
  @media ${devices.tablet}{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12vw;
    margin-left: 15px;
    margin-right: 0px;


  }
  @media ${devices.laptop}{
    width: 10vw;
    margin-left: 20px;
    font-size: 1.25vw;


  }
  @media ${devices.laptopL}{
    width: 10vw;
    margin-left: 20px;
  }
`
const Success = styled.div`
  color: white;
  text-align: center;
  @media ${devices.mobile} {
    font-size: 15px;
  }
  @media ${devices.tablet} {
    font-size: 20px;
  }
`;
const Pad = styled.div`
  @media ${devices.mobile} {
    padding: 10px 10px 5px;
  }
  @media ${devices.tablet} {
    padding: 40px 60px 30px;
  }
`;
const Container = styled.div`
  position: relative;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: #68838f;
  @media ${devices.mobile} {
    width: 80vw;
  }

  @media ${devices.tablet} {
    width: 75vw;
  }

  @media ${devices.laptop} {
    width: 60vw;
  }

  @media ${devices.laptopL} {
    width: 50.5vw;
  }
`;
const Submit = styled.a`
    background-color: #AAC9D4;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;    
    align-items: center;
    margin-left: auto;
    margin-top: 3vh;
    cursor: pointer;

    &:link { text-decoration: none; }
    &:visited { text-decoration: none; }
    &:hover { text-decoration: none; }
    &:active { text-decoration: none; }
    &:hover{
        transition: 0.5s;
        background-color: #EDD662; 
    }
    @media ${devices.mobile}{
        width: 150px;
        font-size: 5vw;
        height: 50px;
        margin-left: auto;
        margin-right: auto;  


    }

    @media ${devices.tablet}{
        width: 20vw;
        height: 6vw;
        font-size: 2.5vw;
        margin-right: 0;
        
    }
    @media ${devices.laptop}{
        width: 15vw;
        height: 5vw;
        font-size: 2vw;
    }

    @media ${devices.laptopL}{
        width: 15vw;
        height: 3.5vw;
        font-size: 2vw;
        margin-bottom: 
    }
`

const Box = styled.div`
  display: flex;
  margin: auto;
  margin-top: 10px;
  @media ${devices.mobile} {
    flex-direction: column;
  }
  @media${devices.tablet} {
    flex-direction: row;
    margin-top: 5px;
    justify-content: right;
    align-items: center;
  }
`;
const Label = styled.div`
  font-weight: bold;
  margin-top: 2vw;
  color: white;
  position: relative;
  @media ${devices.mobile} {
    font-size: 15px;
  }

  @media ${devices.tablet} {
    font-size: 20px;
    bottom: 10px;
    margin-right: 2vw;
  }

  @media ${devices.laptop} {
    font-size: 20px;
    bottom: 15px;
  }

  @media ${devices.laptopL} {
    font-size: 25px;
    bottom: 15px;
  }
`;
const Title = styled.div`
  font-weight: 900;
  
  @media ${devices.mobile} {
    font-size: 30px;
  }

  @media ${devices.tablet} {
    font-size: 30px;
  }
  @media ${devices.laptop} {
    font-size: 40px;
  }

  @media ${devices.laptop} {
    font-size: 50px;
  }
`;

const Input = styled.input`
    type: "text";
    required
    autofocus
    font-size: 30px;
    @media ${devices.mobile}{
        font-weight: bold;
        height: 3vh;
        font-size: 20px;

    }

    @media ${devices.tablet}{
        width: 40vw;
        height: 3vh;
        font-size: 20px;


    }

    @media ${devices.laptop}{
        width: 30vw;
        height: 4vh;
        font-size: 23px;
    }
    @media ${devices.laptopL}{
        height: 4.5vh;
        width: 30vw;
        font-size: 30px;

    }
`;



