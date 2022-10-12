import React, {useState} from 'react';
import styled from 'styled-components';
import { devices } from './devices';




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
            <Title>Parent Sign up </Title>
            <Box>
                <Label>名 First Name <span style={{color: "red"}}> &nbsp;* </span> </Label>
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
            <Submit onClick = {onSubmit()}>Submit</Submit>
            <Link href = '/#/ExistingUserForm'>I have an account!</Link>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    @media ${devices.mobile}{
        width: 80vw;
    }

    @media ${devices.laptop}{
        width: 50vw;
    }


    


`
const Submit = styled.a`
    border-style: solid;
    text-align: center;
    margin: auto;
    margin-top: 5vh;
    align-items: center;
    &:hover{
        transition: 0.5s;
        background-color: #87ceeb; 
    }
    @media ${devices.mobile}{
        width: 150px;
    }

    @media ${devices.laptop}{
        width: 15vw;
        height: 3vw;
        font-size: 2vw;
    }

    @media ${devices.laptopL}{
        width: 20vw;
        height: 4vw;
        font-size: 2.5vw;
    }
`

const Box = styled.div`
    margin-left: auto;
    margin-right: auto;
`
const Label = styled.div`
    font-weight: bold;
    margin-top: 2vw;

    @media ${devices.mobile}{
        font-size: 15px;
        margin-left: auto;
        margin-right: auto;
    }

    @media ${devices.laptop}{
        font-size: 20px;

    }
    
    @media ${devices.laptopL}{
        font-size: 40px;
    }

`
const Title = styled.div`
    font-weight: 900;
    text-align: center;

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
    position: relative;
    font-weight: bold;
    bottom: 0;
    color: blue;
    margin-top: 1vw;

    @media ${devices.mobile}{
        font-size: 15px;
        margin-left: auto;
        margin-right: auto;
    }
    @media ${devices.laptop}{
        font-size: 1.25vw;
    }

    @media ${devices.laptopL}{
        font-size: 2vw;

    }
`
