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
                    <Input/>
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

    }

    @media ${devices.tablet}{
        width: 25vw;
        height: 8.33vw;
        font-size: 3vw;
    }
    @media ${devices.laptop}{
        width: 15vw;
        height: 3vw;
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
    align-items: center;
    padding: 50px 40px 10px;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
`


const Container = styled.div`
    background-color: #475F6F;
    display: flex;
    flex-direction: column;
    padding: 20px;
    
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

    @media ${devices.tablet}{
        width: 50vw;
        height: 3vh;
    }

    @media ${devices.laptop}{
        font-size: 1.25vw;
        font-weight: bold;
        width: 37.5vw;
        height: 4.5vh;
    }
    @media ${devices.laptopL}{
        height: 6vh;
        width: 40vw;
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

const Label = styled.div`
    font-weight: bold;
    color: white;

    @media ${devices.mobile}{
        font-size: 15px;
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
