import React, { useEffect, useState }  from "react";
import "../../../css/table.css";
import styled from 'styled-components'
import { devices } from "../../../data/devices"
import { request } from "../../../data/fetch";

export default function AccountSettings(props) {

  const params = props.params;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // 0 means english, 1 means chinese
  const [language, setLanguage] = useState();
  const [message, setMessage] = useState("");
  
  function displayParentFields()  {
    const labels = ["First Name", "Last Name", "Phone Number", "Email", "Address"]
    const states = [firstName, lastName, phoneNumber, email, address]
    const update = [setFirstName, setLastName, setPhoneNumber, setEmail, setAddress]
    var arr = []
    for (let i = 0; i < labels.length; i++){
      arr.push(
        <Box key = {i}>
          <Label> {labels[i]} </Label>
          <Input
            value={states[i]}
            onChange={(e) => {
              update[i](e.target.value);
            }}
            readOnly = {(i < 2)}
          />
        </Box>
      );
    }
    return arr;
  }

  const [curPassword, setCurPassword] = useState("")
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  function displayPasswordFields()  {
    const labels = ["New Pasword", "Confirm Password"]
    const states = [password1, password2]
    const update = [setPassword1, setPassword2]
    var arr = []
    for (let i = 0; i < labels.length; i++){
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
        parentid: params.parentid
      }).then((res) => {
        const parent = res;
        console.log(res)
        setFirstName(parent["first name"])
        setLastName(parent["last name"])
        setPhoneNumber(parent["phone number"])
        setEmail(parent["email"])
        setAddress(parent["address"])
        if (parent["language"]) setLanguage(JSON.parse(parent["language"]))
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

  function onChangeLanguage(lang) {
    const postLanguage = async() => {
      await request("/parents/changelanguage", "post", {
        authkey: sessionStorage.getItem("authkey"),
        language: lang
      }).then((res) => {
        console.log(res)
        if (res[0]["error"]){
          setMessage("Unable to perform action")
        }
        else{
          setMessage("Changes saved!")
        }
      })
    }
    postLanguage();

  }
  function onSubmit() {
    if (password1 !== password2){
      setMessage("The passwords do not match!")
    }
    else if (curPassword === ""){
      setMessage("Please enter your password to save changes")
    }
    else {
      const args = {
        pswd: curPassword,
        email: email,
        phonenumber: phoneNumber,
        address: address,
        authkey: sessionStorage.getItem("authkey"),
      }
      const post = async() => {
        await request("/parents/edit/protected", "post", args).then((res) => {
          console.log(res)
          if (res[0]["error"]){
            setMessage("Wrong Password")
          }
          else{
            setMessage("Changes saved!")
          }
        })
      }
      post();
      

    }
    
  }
  console.log(language)

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
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <MiniButton active = {language === 0}  onClick = {() => {
                setLanguage(0);
                onChangeLanguage(0);
                // u cannot use the state to change the language because 
                // the state only changes to 0 AFTER the component refreshes,
                // which is AFTER you run onChangeLanguage(), so 
                // onChangeLanguage is going to take the previous state of language
                // rather than what u just clicked on
              }}>                
                English
              </MiniButton>
              <MiniButton active = {language === 1}  onClick = {() => {
                setLanguage(1);
                onChangeLanguage(1);
              }}>
                中文
              </MiniButton>
            </div>
            </LanguageContainer>
        </Section>
        <Section>
          <Title>Change Password</Title>
          {displayPasswordFields()}
          <ToggleVisibility onClick = {() => toggleVisibility()} style={{fontSize: "20px"}}>
            Toggle Visibility
          </ToggleVisibility>
        </Section>
        <Section>
          <Title>
            Save Changes
          </Title>
          <Box key = {2}>
            <Label> Current Password </Label>
            <Input
              id={`password-2`}
              value={curPassword}
              type="password"
              onChange={(e) => {
                setCurPassword(e.target.value);
              }}
            />
          </Box>
        </Section>
        <Section>

          <Block>
            <Button
              onClick = {() => params.setDisplay(0)} 
            >Back</Button>
            <Button
              onClick = {() => onSubmit()}
            >Update</Button>
          </Block>
          <Message>{message}</Message>
        </Section>
      </Pad>
    </Container>
  );
}

const ToggleVisibility = styled.button`
  float: right;

  @media ${devices.mobile}{
    margin-top: 10px;
  }
  @media ${devices.tablet}{
    font-size: 20px;  
  }
`
const Block = styled.div`
  display: flex;
  justify-content: space-between;
`
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
const Button = styled.a`
  background-color: #AAC9D4;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;    
  align-items: center;
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:focus, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:hover{
      transition: 0.5s;
      background-color: #EDD662; 
  }
  @media ${devices.mobile}{
      width: 150px;
      font-size: 5vw;
      height: 50px;
  }

  @media ${devices.tablet}{
      width: 20vw;
      height: 6vw;
      font-size: 2.5vw;
      
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
  }
`
const Message = styled.div`
  color: white;
  text-align: center;
  @media ${devices.mobile} {
    font-size: 15px;
  }
  @media ${devices.tablet} {
    font-size: 20px;
    margin-top: 20px;
  }
`;

const Section = styled.div`
  align-items: center;
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
  background-color: ${(props) => (props.active) ? "#EDD662": "white"};
  border-radius: 25px;
  font-weight: 700;

  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
  &:hover { text-decoration: none; }
  &:active { text-decoration: none; }
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.mobile}{
    margin: auto;
    width: 30vw;
    height: 10vw;
    margin-right: 25px;
    margin-top: 2vh;

  }
  @media ${devices.tablet}{
    width: 12vw;
    height: 5vw;
    margin-left: 15px;
    margin-right: 0px;


  }
  @media ${devices.laptop}{
    width: 10vw;
    height: 4vw;
    margin-left: 20px;
    font-size: 1.25vw;


  }
  @media ${devices.laptopL}{
    width: 10vw;
    margin-left: 20px;
  }
`

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



