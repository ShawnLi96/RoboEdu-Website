import React from 'react';
import styled from 'styled-components';
import { devices } from '../../data/devices';
import "../../css/index.css";



export default function MenuButtons(props){

    function manageClick(id) {
        console.log('clicked')
        // toggles between 1 and 0
        // 0 means Current student
        // 1 means new student
        if (id !== props.curLoginOption){
            props.setLoginOption(id)
        }
    }

    // for some reason i need arrow function not just {manageClick(id)} or it wont work}
    return (
        
        <Container>

            <Button key = {0} active = {props.curLoginOption === 0} onClick = {() => manageClick(0)}>Login with Email</Button>
            <Button key = {1} active = {props.curLoginOption === 1} onClick = {() => manageClick(1)}>Login with WeChat ID</Button>
                

        </Container>
    );

}
const Button = styled.a`
    text-align: center;
    align-items: center;
    font-size: 40px;
    cursor: pointer;
    text-decoration: none;
    &:focus, &:visited, &:link, &:active {
      text-decoration: none;
    }
    font-family: "roboFont";
    width: 100vw;
    background-color: ${(props) => props.active ? "#475F6F": "#7999A8"};
    color: ${(props) => props.active ? "#EDD662" : "#FFFFFF"};

    @media ${devices.mobile}{
        font-size: 20px;
    }

    @media ${devices.tablet}{
        font-size: 30px;
    }

    @media ${devices.laptop}{
        font-size: 35px;
    }

    @media ${devices.laptopL}{
        font-size: 40px;
    }

    

`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    @media ${devices.mobile}{
        width: 80vw;
        margin-top: 5vh;
    }

    @media ${devices.laptop}{
        width: 60vw;
        margin-top: 5vh;
    }
`

