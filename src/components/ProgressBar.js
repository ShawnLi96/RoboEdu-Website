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

    const display = () => {
        var arr = []
        for (let i = 0; i < titles.length; i++){
            arr.push(<Arrow number={i}/>);
        }
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
`
const Arrow = styled.div`
    background-image: ${(props) => titles[props.number]}
`