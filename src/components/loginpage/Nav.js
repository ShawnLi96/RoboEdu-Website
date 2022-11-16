import React from 'react'
import styled from 'styled-components'


export default function Nav(props) {
    const title = ["Home", "Summer Camps", "March Camps", "Winter Camps", "PA Day Camps", "Register Now"]
    const components = []
    for (let i = 0; i < title.length; i++){
        if (props.current === title[i]){
            components.push(<Button>{title[i]}</Button>)
        }
        else components.push(<Button>{title[i]}</Button>)

    }

    return (
        <Container>
            <Button>Home</Button>
            <Button>Summer Camps</Button>
            <Button>March Camps</Button>
            <Button>Winter Camps</Button>
            <Button>PA Day Camps</Button>
            <Button>Register Now</Button>
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-weight: 900;
    height: 4vw;
    opacity: 0.8;
    background-color: #144257;
    align-items: center;


`

const Button = styled.a`
    color: white;
    &:hover{
        color: #EDD662;
    }
    &:link { text-decoration: none; }
    &:visited { text-decoration: none; }
    &:hover { text-decoration: none; }
    &:active { text-decoration: none; }
`