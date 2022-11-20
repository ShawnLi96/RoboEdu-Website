import React from 'react';
import styled from 'styled-components';
import { devices } from '../../data/devices';


export default function MenuButtons(props){

    function manageClick(id) {
        console.log('clicked')
        // toggles between 1 and 0
        // 0 means Current student
        // 1 means new student
        if (id !== props.curSelection){
            props.setSelection(id)
        }
    }

    // for some reason i need arrow function not just {manageClick(id)} or it wont work}
    return (
        
        <Container>

            <Button active = {props.curSelection === 0} onClick = {() => manageClick(0)}>Current Student</Button>
            <Button active = {props.curSelection === 1} onClick = {() => manageClick(1)}>New Student</Button>
                

        </Container>
    );

}
const Button = styled.a`
    font-size: 40px;
    margin: auto;
    border-style: solid;
    border-color: black;
    width: 20vw;
    cursor: pointer;
    text-align: center;
    color: ${(props) => props.active ? "#EDD662" : "#FFFFFF"};
    background-color: ${(props) => props.active ? "#1E108A": "#000000"};
    @media ${devices.mobile}{
        font-size: 20px;
    }

    @media ${devices.tablet}{
        font-size: 30px;
        margin-top: 2vh;
    }

    @media ${devices.laptop}{
        font-size: 40px;
    }

    `

const Container = styled.div`
    display: flex;
    margin: auto;
   @media ${devices.mobile}{
        width: 80vw;
    }

    @media ${devices.laptop}{
        width: 60vw;
    }


`

