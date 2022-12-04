import React, { useState } from "react";
import styled from "styled-components";
import Table from "./Table";
import Nav from "../Nav";
import bg from '../../images/background.png'


export default function Home(props) {
  const parentid =  22;

  // state to keep track of which page we are on
  // 5 pages in total of registration process starting from 1 (the table of orders)
  // page 0 is account settings page

  const [page, setPage] = useState(1);
  const [focus, setFocus] = useState(props.focus);
  const [refresh, setRefresh] = useState(0)
  const [display, setDisplay] = useState(0);

  console.log("display", display)
  const components = ["", <Table parentid = {parentid} display = {display}/>]
  return (
    <Container>
      <Nav focus = {focus} setFocus = {setFocus}/>
      
      <div style={{display: "flex"}}>
        <Button onClick = {(e) => setRefresh((refresh) => {
            console.log(refresh)
            return (refresh + 1)})}>Refresh</Button>

        <Button onClick = {(e) => setDisplay((display) => {
            console.log(refresh)
            return (display ^= 1)})}>Change View</Button>
      </div>
      {components[page]}
    </Container>
  );
}


const Container = styled.div`
    width: 100vw; 
    position: relative;
    background-image: url(${bg});
    
`

const Button = styled.div `
  background-color: white;
  text-align: center;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
`