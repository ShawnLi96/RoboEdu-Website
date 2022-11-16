import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../data/devices';

// components
import Nav from './Nav'
import MenuButtons from './MenuButtons'
import EmailLogin from './EmailLogin'
import FormButtons from './FormButtons'
import NewUserForm from './NewUserForm'
import WeChatLogin from './WeChatLogin'


// imgs
import bg from '../../images/background.png'


export default function LoginPage(){

    const [selection, setSelection] = useState(0)
    const [loginOption, setLoginOption] = useState(0)

    function onSubmit(){

        // post
    }

    const elements = []
    const display = () => {
        
        if (selection === 0){
            elements.push(<FormButtons curLoginOption = {loginOption} updateLoginOption = {setLoginOption}/>)
            if (loginOption === 0)
                elements.push(<EmailLogin/>)
            else
                elements.push(<WeChatLogin/>)
            
        }
        else
            elements.push(<NewUserForm updateSelection = {setSelection}/>)

        return elements
    }
    return (
        <Container>
            <Nav/>
            <BodyContainer>
                <MenuButtons curSelection = {selection} updateSelection = {setSelection}></MenuButtons>
                {display()}
                
                

            </BodyContainer>


        </Container>
    );

}

const Container = styled.div`
    background-image: url(${bg});
`
const BodyContainer = styled.div`
    position: relative;
    margin: auto;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media ${devices.mobile}{
        width: 80vw;
    }

    @media ${devices.laptop}{
        width: 60vw;
    }
`


