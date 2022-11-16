import React from 'react';
import styled from 'styled-components';
import { devices } from '../../data/devices';


export default function MenuButtons(props){

    function manageClick(id) {
        console.log('clicked')
        // toggles between 1 and 0
        // 0 means Current student
        // 1 means new student
        if (id !== props.curLoginOption){
            props.updateLoginOption(id)
        }
    }

    // for some reason i need arrow function not just {manageClick(id)} or it wont work}
    return (
        
        <Container>

            <Button active = {props.curLoginOption === 0} onClick = {() => manageClick(0)}>Login with Email</Button>
            <Button active = {props.curLoginOption === 1} onClick = {() => manageClick(1)}>Login with WeChat ID</Button>
                

        </Container>
    );

}
const Button = styled.a`
    text-align: center;
    font-size: 35px;
    width: 20vw;
    background-color: ${(props) => props.active ? "#475F6F": "#7999A8"};
    color: ${(props) => props.active ? "#EDD662" : "#FFFFFF"};

`

const Container = styled.div`
    display: flex;
    margin-top: 2vw;
    justify-content: space-between;
    @media ${devices.mobile}{
        width: 80vw;
    }

    @media ${devices.laptop}{
        width: 60vw;
    }
`

