import React, {useState} from 'react';
import styled from 'styled-components';
import { devices } from '../../data/devices';
import axios from "axios"




export default function NewUserForm(props){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    function checkPassword(){
        return (password1 === password2) ? true: false;
    } 



    // for onSubmit, should check if there are any fields ALREADY stored
    // in the database to avoid duplicates
    const onSubmit= () => {
        const data = {
            firstname: firstName,
            lastname: lastName,
            phonenum: phoneNumber,
            email: email,
            
        }
        console.log("clicked");
        axios.post("http://localhost:160/parents/newuser", data).then((res) => {
            console.log(res);
            }
        )
    }

    
    return (
        <Container>
            <div style = {{padding: "60px"}}>
                <Title>Parent Sign up</Title>
                <Box>
                    <Label>名 First Name <span style={{color: "red"}}> &nbsp;* </span> </Label>
                    <Input
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value); }} 
                        />
                </Box>
                <Box>
                    <Label> 姓 Last Name <span style={{color: "red"}}> &nbsp;* </span> </Label>
                    <Input
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value); }} 
                        />
                </Box>
                <Box>
                <Label> 邮件 Email <span style={{color: "red"}}> &nbsp;* </span> </Label> 
                <Input
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); }} 
                    />
                </Box>
                <Box>
                    <Label> 联系电话 Phone <span style={{color: "red"}}> &nbsp;* </span> </Label> 
                    <Input
                        value={phoneNumber}
                        onChange={(e) => { setPhoneNumber(e.target.value); }} 
                        />
                </Box>
                <Box>
                    <Label> Set up Password <span style={{color: "red"}}> &nbsp;* </span> </Label> 
                    <Input
                        value={phoneNumber}
                        onChange={(e) => { setPassword1(e.target.value); }} 
                        />
                </Box>
                <Box>
                    <Label> Confirm Password <span style={{color: "red"}}> &nbsp;* </span> </Label> 
                    <Input
                        value={phoneNumber}
                        onChange={(e) => { setPassword2(e.target.value); }} 
                        />
                </Box>
                <Submit onClick = {onSubmit()} href = '/'>Submit</Submit>
                <Link onClick = {() => {
                    props.setSelection(0)
                    props.setLoginOption(0)
                }}>I have an account!</Link>
            </div>
        </Container>
    );
}


const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
    background-color: #68838F;
    @media ${devices.mobile}{
        width: 80vw;
    }

    @media ${devices.laptop}{
        width: 50vw;
    }
`
const Submit = styled.a`
    background-color: #AAC9D4;
    border-style: solid;
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
    align-items: center;
    margin-top: 50px;
    &:link { text-decoration: none; }
    &:visited { text-decoration: none; }
    &:hover { text-decoration: none; }
    &:active { text-decoration: none; }
    &:hover{
        transition: 0.5s;
        background-color: #87ceeb; 
    }
    @media ${devices.mobile}{
        width: 150px;
    }

    @media ${devices.tablet}{
        width: 15vw;
        height: 3vh;
        font-size: 2vw;
    }
    @media ${devices.laptop}{
        width: 15vw;
        height: 3vw;
        font-size: 2vw;
    }

    @media ${devices.laptopL}{
        width: 20vw;
        height: 3.5vw;
        font-size: 2.5vw;
    }
`

const Box = styled.div`

`
const Label = styled.div`
    font-weight: bold;
    margin-top: 2vw;
    color: white;
    @media ${devices.mobile}{
        font-size: 15px;
    }

    @media ${devices.tablet}{
        font-size: 20px;
    }

    @media ${devices.laptop}{
        font-size: 20px;

    }
    
    @media ${devices.laptopL}{
        font-size: 30px;
    }

`
const Title = styled.div`
    font-weight: 900;

    @media ${devices.mobile}{
        font-size: 30px;
    }

    @media ${devices.laptop}{
        font-size: 3vw;
    }
`

const Input = styled.input`
    type: "text";
    required
    autofocus

    @media ${devices.mobile}{
        font-size: 20px;
        font-weight: bold;
        width: 40vw;
        height: 6vh;
        
    }

    @media ${devices.tablet}{
        width: 60vw;
        height: 3vh;
    }

    @media ${devices.laptop}{
        font-size: 1.25vw;
        font-weight: bold;
        width: 40vw;
        height: 4.5vh;
    }
    @media ${devices.laptopL}{
        height: 6vh;
    }
`

const Link = styled.a`
    font-weight: bold;
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: blue;
    margin-top: 5px;
    border-style: 0;
    &:hover{
        color: white;
        transition: 0.5s;
    }
    &:link { text-decoration: none; }
    &:visited { text-decoration: none; }
    &:hover { text-decoration: none; }
    &:active { text-decoration: none; }
    @media ${devices.mobile}{
        font-size: 4vw;
        width: 20vw;
    }

    @media ${devices.tablet}{
        font-size: 2vw;
        width: 25vw;

    }
    @media ${devices.laptop}{
        font-size: 1.25vw;
        width: 25vw;
    }

    @media ${devices.laptopL}{
        font-size: 1.5vw;
        width: 15vw;
    }
`
