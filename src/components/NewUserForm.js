import React, {useState} from 'react';
import styled from 'styled-components';




export default function NewUserForm(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');


    // for onSubmit, should check if there are any fields ALREADY stored
    // in the database to avoid duplicates
    function onSubmit() {
        const data = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
        }

        // post
    }

    
    return (
        <Container>
            <link rel="stylesheet" href = "../../public/styles.css"/>
            <Title>Parent Sign up Sheet</Title>
            <Box>
                <Label class = "border-solid shadow-md">First Name <span style={{color: "red"}}> &nbsp;* </span> </Label>
                <Input
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value); }} 
                    />
            </Box>
            <Box>
                <Label> Last Name <span style={{color: "red"}}> &nbsp;* </span> </Label>
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
            <Submit onClick = {onSubmit()}>Submit</Submit>
            <Link href = '/#/ExistingUserForm'>I have an account!</Link>
        </Container>
    );}

const Container = styled.div`
    position: relative;
    width: 50vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    


`
const Submit = styled.a`
    width: 250px;
    font-size: 30px;
    border-style: solid;
    text-align: center;
    margin: auto;
    margin-top: 5vh;
    align-items: center;
    &:hover{
        transition: 0.5s;
        background-color: #87ceeb; 
    }

`

const Box = styled.div`
    margin-left: auto;
    margin-right: auto;
`
const Label = styled.div`
    font-weight: bold;
    margin-top: 2vw;
    font-size: 20px;

`
const Title = styled.div`
    font-size: 50px;
    font-weight: 900;
    text-align: center;

`


const Input = styled.input`
    width: 20vw;
    min-width: 15vw;
    font-size: 20px;
    font-weight: bold;
    width: 50vw;
    height: 4.5vh;
    type: "text";
    required
    autofocus
`

const Link = styled.a`
    position: relative;
    font-weight: bold;
    font-size: 20px;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    color: blue;
    margin-top: 45px;
`
