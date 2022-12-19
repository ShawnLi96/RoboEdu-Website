import React, { useState, useNavigate } from 'react';
import styled from 'styled-components';
import { devices } from '../../data/devices';
import { request } from '../../data/fetch';


export default function EmailLogin(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [auth, setAuth] = useState(''); 

    const navigate = useNavigate();
    function onSubmit(){
        request("/logins/loginemailpswd", "post", {
            email: email,
            password: password,
            expiry: 1000
        }).then((res) => {
            console.log(res)
            console.log("Email: " + email + " " + "password: " + password);
            if (res["error"] === undefined ){
                setAuth(res["auth-key"])
                setSuccess(true);
            }
        })
    }

    console.log("Email: " + email + " " + "password: " + password);
    return (
        <Container>
            <div>
                <Box>
                    <Label>
                    Email:
                    </Label>
                    <Input
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}/>
                </Box>
                <Box>
                    <Label
>Password:
                    </Label>
                    <Input type="password"
                        value={password}
                        onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </Box>
                <Submit  
                    onClick={() => {
                    onSubmit();
                    return false;
                    }}
                    >
                    Submit
                </Submit>
            </div>
            
        </Container>
    );

}
const Submit = styled.a`
    background-color: #AAC9D4;
    border-radius: 25px;
    cursor: pointer;
    color: white;
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
        width: 25vw;
        height: 8.33vw;
        font-size: 3vw;
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
    }
`


const Box = styled.div`
    display: flex;
    margin: auto;
    position: relative;
    justify-content: space-between;
    @media ${devices.mobile}{
        padding: 40px 40px 10px;
        flex-direction: column;
    }
    @media ${devices.tablet}{
        padding: 50px 40px 10px;
        flex-direction: row;
        align-items: center;
        width: 60vw;

    }

    @media ${devices.laptop}{
        padding: 50px 40px 10px;
        flex-direction: row;
        align-items: center;
        width: 45vw;
    }
    
    @media ${devices.laptopL}{
        padding: 50px 40px 10px;
        flex-direction: row;
        align-items: center;
        width: 40vw;
    }
`


const Container = styled.div`
    background-color: #475F6F;
    display: flex; 
    flex-direction: column;
    padding: 20px;
    position: relative;
    bottom: 0px;
    
`


const Input = styled.input`
    type: "text";
    required
    autofocus
    font-size: 40px;

    @media ${devices.mobile}{
        font-weight: normal;
        height: 3vh;
        
    }

    @media ${devices.tablet}{
        width: 40vw;
        height: 5vh;
        font-size: 25px;

    }

    @media ${devices.laptop}{
        width: 30vw;
        height: 5vh;
        font-size: 30px;
    }
    @media ${devices.laptopL}{
        height: 4.5vh;
        width: 30vw;
        font-size: 25px;
    }
`


const Label = styled.div`
    font-weight: bold;
    color: white;

    @media ${devices.mobile}{
        font-size: 20px;
    }

    @media ${devices.tablet}{
        font-size: 25px;
    }

    @media ${devices.laptop}{
        font-size: 25px;

    }
    
    @media ${devices.laptopL}{
        font-size: 30px;
    }

`
