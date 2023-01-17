import React from "react";
import styled from 'styled-components'
import { devices } from "../data/devices"
import title1 from "../images/title1.png"
import title2 from "../images/title2.png"
import title3 from "../images/title3.png"
import title4 from "../images/title4.png"
import title5 from "../images/title5.png"
const titles = [title1, title2, title3, title4, title5];
const text = ["My Profile", "Student Info", "Select Time", "Select Program", "Confirmation"]


export default function ProgressBar(props) {

    // tbh i couldve used a for-loop to do this but 
    // tried it in the first place and didnt get it to work
    const curPage = props.curPage;
    const display = () => {
        // fifth arrow must be rendered first
        // because if you render first arrow to fifth arrow,
        // newly rendered components would overlap onto the previous ones
        let arr = []
        for (let i = 4; i >= 0; i--){
            arr.push(<Arrow page = {i} curPage = {curPage}> {text[i]} </Arrow>)
        }
        return arr;

    }
    return(
        <Container>
            {display()}
        </Container>
    )
}
const Arrow = styled.div`
    background-image: url(${(props) => titles[props.page]});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${(props) => {
        if (props.page === props.curPage){
            return "#EDD662";
        }
        else return "#FFFFFF"
    }};
    @media ${devices.tablet}{
        width: 195px;
        height: 41px;
        font-size: 1.5vw;
        font-weight: bold;
        right: ${(props) => (props.page * 25) + "px"};

    }
    @media ${devices.laptop}{
        width: 305px;
        height: 67.5px;
        font-size: 1.25vw;
        font-weight: bold;
        right: ${(props) => (props.page * 50) + "px"};
    }
`
const Container = styled.div`
    display: flex;
    justify-content: left;
    width: 100vw;
    background-color: red;
    flex-direction: row-reverse;
    @media ${devices.tablet}{
        margin-top: 40px;
    }
    @media ${devices.laptop}{
        margin-top: 40px;
    }
`
