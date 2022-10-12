import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from './devices';



export default function ExistingUserForm(){

    const [email, setEmail] = useState();


    function onSubmit(){

        // post
    }
    return (
        <>
            <Container>
                <Title>Sign in</Title>

                <Box>
                    <Label>Email</Label>
                    <Input></Input>

                </Box>
                    

            </Container>


        </>
    );

}

const Container = styled.div`
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    justify-content: center;
    @media ${devices.mobile}{
        width: 80vw;
    }

    @media ${devices.laptop}{
        width: 50vw;
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
