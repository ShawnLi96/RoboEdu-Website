import React, { useState } from "react";
import styled from "styled-components";
import MyProfile from "./myProfile/MyProfile";
import {useLocation} from 'react-router-dom';
import Nav from "../Nav";
import bg from "../../images/background.png";
import ProgressBar from "../ProgressBar";
import { devices } from "../../data/devices";
import StudentInfoTable from "../studentInfoPage/StudentInfoTable"
import SelectTimeTable from "../selectTimePage/SelectTimeTable"
import SelectProgramChart from "../selectProgramPage/SelectProgramChart"
import "../../css/index.css"

export default function Home(props) {
  const { state } = useLocation();
  const parentid = state.parentid;

  // state to keep track of which page we are on
  // 5 pages in total of registration process starting from 1 (the table of orders)
  // page 0 is account settings page
  const [refresh, setRefresh] = useState(false);
  const [curPage, setPage] = useState(0);
  const [focus, setFocus] = useState(props.focus);
  const [selectedStudents, setStudents] = useState([]);
  
  const params = {
    parentid: parentid,
    setPage: setPage,
    setStudents: setStudents,
    selectedStudents: selectedStudents,
    setRefresh: setRefresh,
    refresh: refresh
  }


  const components = [
    <MyProfile
      {...params}
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
    "Students Information",
    "Select a time",
    "Select Program",
    "Waiver and Policy",
    
  ];
  console.log(curPage)


  return (
    <Container>
      <Nav focus={focus} setFocus={setFocus} />
      <ProgressBar curPage={curPage}/>
      <Box>
        <Title>{titles[curPage]}</Title>
      </Box>
      {components[curPage]}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  position: relative;
  background-image: url(${bg});
  @media ${devices.mobile}{

  }

  @media ${devices.tablet}{
    padding: 0 0 50px ;
  }

  @media ${devices.laptop}{
    padding: 0 0 50px;
  }
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
  font-family: "roboFont";
  @media ${devices.mobile}{
    font-size: 20px;
    margin-left: 40px;
  }
  @media ${devices.tablet}{
    font-size: 40px;
  }
  @media ${devices.laptop} {
    font-size: 50px;
  }
`;
