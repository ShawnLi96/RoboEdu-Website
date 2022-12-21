import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../data/devices';

// components
import Nav from '../Nav'
import MenuButtons from './MenuButtons'
import EmailLogin from './EmailLogin'
import FormButtons from './FormButtons'
import NewUserForm from './NewUserForm'
import WeChatLogin from './WeChatLogin'


// imgs
import bg from '../../images/background.png'


export default function LoginPage(props){

    const [selection, setSelection] = useState(0)
    const [loginOption, setLoginOption] = useState(0)
    const [auth, setAuth] = useState();


    function onSubmit(){

        // post
    }

    const elements = []
    const display = () => {
        
        if (selection === 0){
            elements.push(<FormButtons curLoginOption = {loginOption} setLoginOption = {setLoginOption}/>)
            if (loginOption === 0)
                elements.push(<EmailLogin setAuth = {props.setAuth}/>)
            else
                elements.push(<WeChatLogin/>)
            
        }
        else
            elements.push(<NewUserForm setSelection = {setSelection} setLoginOption = {setLoginOption}/>)

        return elements
    }
    return (
        <Container selection={selection}>
            <Nav focus = {props.focus} setFocus = {props.setFocus}/>
            <BodyContainer>
                <MenuButtons curSelection = {selection} setSelection = {setSelection}></MenuButtons>
                {display()}
                
            
            </BodyContainer>
        </Container>
    );

}

const Container = styled.div`
    background-image: url(${bg});
    width: 100vw;
    height: ${(props) => props.selection === 0? "100vh" : "auto"};
    position: relative;
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


