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
            <Title>Parent Sign up Sheet</Title>
            <Box>
                <Label>First Name <span style={{color: "red"}}> &nbsp;* </span> </Label>
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
    width: 15vw;
    height: 3vw;
    font-size: 2vw;
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
    font-size: 1.25vw;
`
const Title = styled.div`
    font-size: 3vw;
    font-weight: 900;
    text-align: center;
`
const LongInput = styled.input`
    font-size: 1.25vw;
    font-weight: bold;
    width: 50vw;
    height: 4.5vh;
    type: "text";
    required
    autofocus

`

const Input = styled(LongInput)`
    width: 20vw;
`

const Link = styled.a`
    position: relative;
    font-weight: bold;
    font-size: 1vw;
    bottom: 0;
    margin-left: auto;
    color: blue;
    
`
