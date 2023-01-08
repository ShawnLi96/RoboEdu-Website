import React, { useState } from "react";
import styled from "styled-components";
import { devices } from "../../data/devices";
import {request} from "../../data/fetch"

export default function NewUserForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);


  function onSubmit() {
    if (!firstName || !lastName || !email || !phoneNumber || !password1 || !password2){
      setMessage("Please fill in all the fields!")
    }
    else if (password1 === password2) {
      setMessage("");
      setSuccess(true);
      console.log("match");
      request("/parents/newuser", "post", {
        firstname: firstName,
        lastname: lastName,
        phonenum: phoneNumber,
        pswd: password1,
        email: email,
        address: "s",
        location: 3
      }).then((res) => console.log(res))


    } else {
      setMessage("The passwords do not match!");
    }
  }

  // if its in mobile view, the first name and last name text fields
  // must be in a column, not in a row
  const displayNameBoxes = () => {
    var width = Math.max(window.screen.width, window.innerWidth);
    if (width > 500) {
      return (
        <Box>
          <Label> First Name 名</Label>
          <ShortInput
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />

          <Label> Last Name 姓</Label>
          <ShortInput
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Box>
      );
    } else {
      return (
        <>
          <Box>
            <Label> First Name 名</Label>
            <Input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Box>
          <Box>
            <Label> Last Name 姓</Label>
            <Input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Box>
        </>
      );
    }
  };

  return (
    <Container>
      <Pad>
        <Title>Parent Sign up</Title>
        {displayNameBoxes()}
        <Box>
          <Label> Email 邮件</Label>
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Label> Phone 联系电话</Label>
          <Input
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Label> Set up Password </Label>
          <Input
            type="password"
            value={password1}
            onChange={(e) => {
              setPassword1(e.target.value);
            }}
          />
        </Box>
        <Box>
          <Label> Confirm Password </Label>
          <Input
            type="password"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
        </Box>
        <Mismatch>{message}</Mismatch>

        <Submit
          onClick={() => {
            onSubmit();
            return false;
          }}
          // eslint-disable-next-line no-script-url
          href = {(success) ? "/": "javascript:void(0);"}
        >
          Submit
        </Submit>
        <Link
          onClick={() => {
            props.setSelection(0);
            props.setLoginOption(0);
          }}
        >
          I have an account!
        </Link>
      </Pad>
    </Container>
  );
}

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
    width: 80vw;
  }

  @media ${devices.laptop} {
    width: 60vw;
  }

  @media ${devices.laptopL} {
    width: 50.5vw;
    right: 0.25vw;
  }
`;
const Submit = styled.a`
  background-color: #aac9d4;
  border-style: solid;
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
  align-items: center;
  cursor: pointer;
  margin-top: 2vh;
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:hover {
    transition: 0.5s;
    background-color: #87ceeb;
  }

  @media ${devices.mobile} {
    width: 50vw;
    font-size: 7vw;
    padding: 5px 0px;
  }

  @media ${devices.tablet} {
    width: 20vw;
    font-size: 30px;
    padding: 10px 0px;
  }
  @media ${devices.laptop} {
    width: 15vw;
    font-size: 2vw;
  }

  @media ${devices.laptopL} {
    width: 20vw;
    font-size: 2.5vw;
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
    justify-content: space-between;
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
  text-align: center;

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

const ShortInput = styled.input`
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
        height: 3vh;
        width: 15vw;
        font-size: 20px;


    }

    @media ${devices.laptop}{
        font-weight: bold;
        height: 4vh;
        font-size: 20px;
        width: 10vw;


    }
    @media ${devices.laptopL}{
        height: 4.5vh;
        width: 10vw;
        font-size: 30px;


    }
    `;

const Link = styled.a`
  font-weight: bold;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: blue;
  margin-top: 10px;
  border-style: 0;
  &:hover {
    color: white;
    transition: 0.5s;
  }
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  @media ${devices.mobile} {
    font-size: 4vw;
    width: 45vw;
  }

  @media ${devices.tablet} {
    font-size: 20px;
    width: 25vw;
  }
  @media ${devices.laptop} {
    font-size: 1.25vw;
    width: 25vw;
  }

  @media ${devices.laptopL} {
    font-size: 1.5vw;
    width: 15vw;
  }
`;
