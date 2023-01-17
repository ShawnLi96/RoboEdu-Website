import React, { useState } from "react";
import styled from "styled-components";
import Table from "./myProfile/Table";
import {useLocation} from 'react-router-dom';
import Nav from "../Nav";
import bg from "../../images/background.png";
import ProgressBar from "../ProgressBar";
import { devices } from "../../data/devices";
import AccountSettings from "./myProfile/AccountSettings";
import StudentInfoTable from "../studentInfoPage/StudentInfoTable"
import SelectTimeTable from "../selectTimePage/SelectTimeTable"
import SelectProgramChart from "../selectProgramPage/SelectProgramChart"

export default function Home(props) {
  const { state } = useLocation();
  const parentid = state.parentid;

  // state to keep track of which page we are on
  // 5 pages in total of registration process starting from 1 (the table of orders)
  // page 0 is account settings page

  const [curPage, setPage] = useState(0);
  const [focus, setFocus] = useState(props.focus);
  const [selectedStudents, setStudents] = useState([]);
  const [settings, enterSettings] = useState(false);
  
  const params = {
    parentid: parentid,
    setPage: setPage,
    setStudents: setStudents,
    selectedStudents: selectedStudents
  }


  const components = [
    <Table
      {...params}
      enterSettings = {enterSettings}
    />,
    <StudentInfoTable
      {...params}
    />,
    <SelectTimeTable
      {...params}
    />,
    <SelectProgramChart
      {...params}
    />

  ];
  const titles = [
    "My Registration",
    "Account Settings",
    "Students Information",
    "Select a time",
    "Select Program",
    "Waiver and Policy",
  ];
  console.log(curPage)

  function display(){
    if (settings){
      return <AccountSettings {...params} enterSettings = {enterSettings} />
    }
    else {
      return components[curPage]
    }
  }
  return (
    <Container>
      <Nav focus={focus} setFocus={setFocus} />
      <ProgressBar curPage={curPage}/>
      <Box>
        <Title>{titles[curPage]}</Title>
      </Box>
      {display()}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  position: relative;
  background-image: url(${bg});
`;

const Box = styled.div`
  position: relative;
  display: flex;
  @media ${devices.tablet}{
    left: 25px;
    margin-top: 25px;
  }
  @media ${devices.laptop} {
    left: 50px;
  }
`;



const Title = styled.div`
  color: white;
  @media ${devices.tablet}{
    font-size: 40px;
  }
  @media ${devices.laptop} {
    font-size: 50px;
  }
`;
