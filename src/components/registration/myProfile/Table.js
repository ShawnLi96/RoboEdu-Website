import React, { useState, useEffect, useRef, useMemo } from "react";
import InfoTable from "./InfoTable";
import Schedule from "./Schedule"
import styled from "styled-components";
import { devices } from '../../../data/devices'


export default function Table(props) {
  


  const params = props.params
  const displayTable = () => {
    if (display === 0){
      return <InfoTable {...params}/>
    }
    else return <Schedule schedule = {params.schedule}/>
  } 

  // display 0 is the list of orders (default)
  // display 1 is the schedule filled in by all orders
  const [display, setDisplay] = useState(0);
  return (
    <Container>
      <Box>
        <CircularButton onClick = {() => {
          console.log('clicked')
          params.setDisplay(1)}
          
        }>
          Account Settings
        </CircularButton>
        <CircularButton onClick = {() => params.setPage(1)}>New Registration</CircularButton>
        <CircularButton
          onClick={() =>
            setDisplay((display) => {
              return (display ^= 1);
            })
          }
          > 
            Change View
          </CircularButton>
      </Box>

      <div style={{margin: "auto"}}>        
        <TableContainer>
          {displayTable()}
        </TableContainer>
      </div>
    </Container>
  );
  
}
const TableContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Box = styled.div`
  position: relative;
  display: flex;

  @media ${devices.mobile}{
    margin: auto;
    padding: 10px 0px;
  }
  @media ${devices.tablet}{
    margin: 0px;
    left: 25px;
    padding: 25px 0px;
  }
  @media ${devices.laptop} {
    left: 50px;
    padding: 25px 0px;
  }
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
`
const CircularButton = styled.a`
  background-color: #aac9d4;
  border-radius: 25px;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: none;
  &:focus, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:hover {
    transition: 0.5s;
    background-color: #edd662;
  }
  @media ${devices.mobile} {
    width: 120px;
    font-size: 3vw;
    height: 50px;
    margin-right: 10px;
  }

  @media ${devices.tablet} {
    width: 25vw;
    height: 5.8vw;
    font-size: 2vw;
    margin-right: 30px;
  }
  @media ${devices.laptop} {
    width: 15vw;
    height: 5vw;
    font-size: 1.25vw;
    margin-right: 50px;
  }

  @media ${devices.laptopL} {
    width: 15vw;
    height: 3.5vw;
    font-size: 1.25vw;
  }
`;