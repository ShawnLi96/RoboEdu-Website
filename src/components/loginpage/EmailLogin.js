import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../data/devices';


export default function EmailLogin(){

    const [email, setEmail] = useState();
    const [selection, setSelection] = useState(0)

    function onSubmit(){

        // post
    }
    return (
        <Container>
            <div>
                <Box>
                    <Label>Email:</Label>
                    <Input/>
                </Box>
                <Box>
                    <Label>Password:</Label>
                    <Input type="password" style={{fontSize: "30px"}}/>
                </Box>
                <Submit>Submit</Submit>
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
        width: 10vw;
        height: 3.5vw;
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
    
`


const Input = styled.input`
    type: "text";
    required
    autofocus
    @media ${devices.mobile}{
        font-weight: bold;
        height: 4vh;
        font-size: 15px;
        
    }

    @media ${devices.tablet}{
        width: 40vw;
        height: 5vh;
        font-size: 17px;

    }

    @media ${devices.laptop}{
        width: 30vw;
        height: 5vh;
        font-size: 20px;
    }
    @media ${devices.laptopL}{
        height: 4.5vh;
        width: 30vw;
        font-size: 30px
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
