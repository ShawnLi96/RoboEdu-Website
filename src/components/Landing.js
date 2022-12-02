import Header from './Header'
import styled from 'styled-components'
import React, { useState } from 'react';


export default function Landing() {

  var width = Math.max(window.screen.width, window.innerWidth);
  var f = (width < 500) ? 2: 5;
  const [navFocus, setNavFocus] = useState(f);

  
  
  return (
    <Container>
      <Header/>
      <FlexContainer>
        <Button href='/#/LoginPage' focus = {navFocus} setFocus = {setNavFocus}> Login Page </Button>
        <Button href='/#/Home' focus = {navFocus} setFocus = {setNavFocus}> Test Table </Button>
        <Button href='/#/StudentInfoPage' focus = {navFocus} setFocus = {setNavFocus}> Student Info Page </Button>
        <Button href='/#/SelectTimePage' focus = {navFocus} setFocus = {setNavFocus}> Select Time Page </Button>

      </FlexContainer>
    </Container>

  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const FlexContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vw;
`


const Button = styled.a`
  text-align: center;
  border-style solid;
  color: black;
  height: 6vh;
  width: 20vw;
  border-radius: 25%;
  font-size: 2vw;
  &:hover{
    background-color: #C0C0C0;
    transition: 0.25s;


`
