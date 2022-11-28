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

  const components = ["", <Table parentid = {parentid}/>]
  const [page, setPage] = useState(1);

  const [focus, setFocus] = useState(props.focus);

  return (
    <Container>
      <Nav focus = {focus} setFocus = {setFocus}/>
      {components[page]}
    </Container>
  );
}


const Container = styled.div`
    background-image: url(${bg});
    width: 100vw; 
    position: relative;
    
`