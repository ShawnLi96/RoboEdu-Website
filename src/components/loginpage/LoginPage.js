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

    // selection is Current User / New User page
    // 0 means we are trying to login
    // 1 means we are trying to make a new account
    const [selection, setSelection] = useState(0)


    // loginOption is choosing which tab to login with
    // 0 is email login
    // 1 is WeChat login
    const [loginOption, setLoginOption] = useState(0)

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
    position: relative;

    @media ${devices.mobile}{
        height: 100vh;
    }

    @media ${devices.tablet}{
        height: 100vh;
    }

    @media ${devices.laptop}{
        height: auto;
        padding: 0px 0px 50px;
    }
    @media ${devices.laptop}{
        height: ${(props) => props.selection === 0? "100vh" : "auto"};

    }
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


