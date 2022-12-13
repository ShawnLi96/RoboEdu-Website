import React from "react";
import styled from 'styled-components'
import { devices } from "../data/devices"
import title1 from "../images/title1.png"
import title2 from "../images/title2.png"
import title3 from "../images/title3.png"
import title4 from "../images/title4.png"
import title5 from "../images/title5.png"
const titles = [title1, title2, title3, title4, title5];



export default function ProgressBar(props) {

    // tbh i couldve used a for-loop to do this but 
    // tried it in the first place and didnt get it to work
    const display = () => {
        // fifth arrow must be rendered first
        // because if you render first arrow to fifth arrow,
        // newly rendered components would overlap onto the previous ones
        var arr = 
        [<FifthArrow page = {props.page}>Confirmation</FifthArrow>, 
        <FourthArrow page = {props.page}>Select Program</FourthArrow>, 
        <ThirdArrow page = {props.page}>Select Time</ThirdArrow>, 
        <SecondArrow page = {props.page}>Student Info</SecondArrow>, 
        <FirstArrow page = {props.page}>My Profile</FirstArrow>]

        return arr;
    }
    return(
        <Container>
            {display()}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: left;
    width: 100vw;
    @media ${devices.tablet}{
        margin-top: 40px;
    }
    @media ${devices.laptop}{
        margin-top: 40px;
    }
`

const FirstArrow = styled.div`
    background-image: url(${titles[0]});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${(props) => props.page === 1 || props.page === 0 ? "#EDD662" : "#FFFFFF"};

    @media ${devices.tablet}{
        width: 195px;
        height: 41px;
        font-size: 1.5vw;
        font-weight: bold;
    }
    @media ${devices.laptop}{
        width: 305px;
        height: 67.5px;
        font-size: 1.25vw;
        font-weight: bold;

    }

`
const SecondArrow = styled.div`
    background-image: url(${titles[1]});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${(props) => props.page === 2 ? "#EDD662" : "#FFFFFF"};
    @media ${devices.tablet}{
        width: 195px;
        height: 41px;
        font-size: 1.5vw;
        font-weight: bold;
        right: 25px;
    }
    @media ${devices.laptop}{
        width: 305px;
        height: 67.5px;
        right: 50px;
        font-size: 1.25vw;
        font-weight: bold;

    }

`
const ThirdArrow = styled.div`
    background-image: url(${titles[2]});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${(props) => props.page === 3 ? "#EDD662" : "#FFFFFF"};
    @media ${devices.tablet}{
        width: 195px;
        height: 41px;
        font-size: 1.5vw;
        font-weight: bold;
        right: 50px;

    }
    @media ${devices.laptop}{
        width: 305px;
        height: 67.5px;
        right: 100px;
        font-size: 1.25vw;
        font-weight: bold;


    }

`
const FourthArrow = styled.div`
    background-image: url(${titles[3]});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${(props) => props.page === 4 ? "#EDD662" : "#FFFFFF"};
    @media ${devices.tablet}{
        width: 195px;
        height: 41px;
        font-size: 1.5vw;
        font-weight: bold;
        right: 75px;

    }
    @media ${devices.laptop}{
        width: 305px;
        height: 67.5px;
        right: 150px;
        font-size: 1.25vw;
        font-weight: bold;

    }

`
const FifthArrow = styled.div`
    background-image: url(${titles[4]});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${(props) => props.page === 5 ? "#EDD662" : "#FFFFFF"};
    @media ${devices.tablet}{
        width: 195px;
        height: 41px;
        font-size: 1.5vw;
        font-weight: bold;
        right: 100px;

        
    }
    @media ${devices.laptop}{
        width: 305px;
        height: 67.5px;
        right: 200px;
        font-size: 1.25vw;
        font-weight: bold;

    }

`