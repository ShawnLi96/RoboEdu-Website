import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Table from "./Table";
import Nav from "../Nav";
import { devices } from "../../data/devices";
import bg from '../../images/background.png'
import { HashRouter as Router,Routes, Route} from 'react-router-dom';


export default function Home() {
  const parentid =  22;

  // state to keep track of which page we are on
  // 5 pages in total of registration process starting from 1 (the table of orders)
  // page 0 is account settings page

  const components = ["", <Table parentid = {parentid}/>]
  const [page, setPage] = useState(1);


  return (
    <Container>
      <Nav/>
      {components[page]}
    </Container>
  );
}


const Container = styled.div`
    background-image: url(${bg});
    width: 100vw;
  
    height: 100vh;
    position: relative;
  

`