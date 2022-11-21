import React, {useState} from 'react';
import styled from 'styled-components';
import { devices } from '../../data/devices';
import { newUser } from '../../data/post';



export default function NewUserForm(props){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [matching, setMatching] = useState(false);


    // for onSubmit, should check if there are any fields ALREADY stored
    // in the database to avoid duplicates
    function onSubmit() {
        if (matching){
            console.log("match")
        }
        else {
            console.log("not matching")
        }
    }

    function checkPassword() {
       return ((password1 === password2) ? setMatching(true) : setMatching(false))
    }


    
    return (
        <Container>
            <Pad>
                <Title>Parent Sign up</Title>
                <Box>
                    <Label> First Name 名</Label>
                    <ShortInput
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value); }} 
                        />

                    <Label> Last Name 姓</Label>
                    <ShortInput
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value); }} 
                        />
                        
                </Box>
                <Box>

                </Box>
                <Box>
                    <Label> Email 邮件</Label> 
                    <Input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); }} 
                        />
                </Box>
                <Box>
                    <Label> Phone 联系电话</Label> 
                    <Input
                        value={phoneNumber}
                        onChange={(e) => { setPhoneNumber(e.target.value); }} 
                        />
                </Box>
                <Box>
                    <Label> Set up Password </Label> 
                    <Input
                        type = "password"
                        value={password1}
                        onChange={(e) => { setPassword1(e.target.value); }} 
                        />
                </Box>
                <Box>
                    <Label> Confirm Password </Label> 
                    <Input
                        type = "password"
                        value={password2}
                        onChange={(e) => { setPassword2(e.target.value); }} 
                        />
                </Box>

                <Submit onClick = {onSubmit()}>Submit</Submit>
                {
                    () => {
                        if (!matching){
                            return <Mismatch>The passwords do not match!</Mismatch>
                        }
                    }
                }
                <Link onClick = {() => {
                    props.setSelection(0)
                    props.setLoginOption(0)
                }}>I have an account!</Link>
            </Pad>
        </Container>
    );
}

const Mismatch = styled.div`
    color: red;
    @media ${devices.tablet}{
        width: 25vw;
        font-size: 3vw;
    }
`
const Pad = styled.div`
    @media ${devices.mobile}{
        padding: 10px;
    }
    @media ${devices.tablet}{
        padding: 60px;
    }
`
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

    @media ${devices.tablet}{
        width: 80vw;
    }

    @media ${devices.laptop}{
        width: 60vw;
    }

    @media ${devices.laptopL}{
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
    cursor: pointer;
    margin-top: 2vh;
    &:link { text-decoration: none; }
    &:visited { text-decoration: none; }
    &:hover { text-decoration: none; }
    &:active { text-decoration: none; }
    &:hover{
        transition: 0.5s;
        background-color: #87ceeb; 
    }
    @media ${devices.mobile}{
        width: 50vw;
        font-size: 7vw;

    }

    @media ${devices.tablet}{
        width: 20vw;
        height: 6vh;
        font-size: 30px;
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
    display: flex;
    margin: auto;
    margin-top: 10px;
    @media ${devices.mobile}{
        flex-direction: column;
    }
    @media${devices.tablet}{
        flex-direction: row;
        margin-top: 5px;
        justify-content: space-between;
        align-items: center;
    }

`
const Label = styled.div`
    font-weight: bold;
    margin-top: 2vw;
    color: white;
    position: relative;
    @media ${devices.mobile}{
        font-size: 20px;
    }

    @media ${devices.tablet}{
        font-size: 20px;
        bottom: 10px;


    }

    @media ${devices.laptop}{
        font-size: 20px;
        bottom: 15px;

    }
    
    @media ${devices.laptopL}{
        font-size: 25px;
        bottom: 15px;
    }

`
const Title = styled.div`
    font-weight: 900;
    text-align: center;

    @media ${devices.mobile}{
        font-size: 30px;
    }

    @media ${devices.tablet}{
        font-size: 30px;
    }
    @media ${devices.laptop}{
        font-size: 40px;
    }

    @media ${devices.laptop}{
        font-size: 50px;
    }
`

const Input = styled.input`
    type: "text";
    required
    autofocus
    font-size: 30px;
    @media ${devices.mobile}{
        font-weight: bold;
        height: 4vh;
        
    }

    @media ${devices.tablet}{
        width: 40vw;
        height: 3vh;

    }

    @media ${devices.laptop}{
        width: 30vw;
        height: 4vh;
        font-size: 23px;
    }
    @media ${devices.laptopL}{
        height: 4.5vh;
        width: 30vw;
    }
`

const ShortInput = styled.input`
    type: "text";
    required
    autofocus
    font-size: 30px;
    @media ${devices.mobile}{
        font-weight: bold;
        height: 4vh;

    }

    @media ${devices.tablet}{
        height: 3vh;
        width: 15vw;

    }

    @media ${devices.laptop}{
        font-weight: bold;
        height: 4vh;
        width: 10vw;


    }
    @media ${devices.laptopL}{
        height: 4.5vh;
        width: 10vw;

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
    margin-top: 10px;
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
        width: 45vw;
    }

    @media ${devices.tablet}{
        font-size: 20px;
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
