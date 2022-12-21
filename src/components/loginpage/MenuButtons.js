import React from 'react';
import styled from 'styled-components';
import { devices } from '../../data/devices';
import button1 from '../../images/title_blok_1.png'
import button2 from '../../images/title_blok_2.png'


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

            <Button key = {0} active = {props.curSelection === 0} onClick = {() => manageClick(0)}>Current User</Button>
            <Button key = {1} active = {props.curSelection === 1} onClick = {() => manageClick(1)}>New User</Button>
                

        </Container>
    );

}
const Button = styled.a`
    margin: auto;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.active ? "#EDD662" : "#FFFFFF"};
    background-image: url(${(props) => (props.active) ? button1: button2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media ${devices.mobile}{
        font-size: 15px;
        font-weight: bold;
        width: 42vw;
        height: 10vw;
    }

    @media ${devices.tablet}{
        font-size: 25px;
        margin-top: .5vh;
        width: 38vw;
        height: 7.6vw;
    }

    @media ${devices.laptop}{
        font-size: 30px;
        height: 5vw;
        width: 30vw;

    }

    @media ${devices.laptopL}{
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

