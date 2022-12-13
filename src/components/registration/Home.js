import React, { useState } from "react";
import styled from "styled-components";
import Table from "./stepOne/Table";
import Nav from "../Nav";
import bg from "../../images/background.png";
import ProgressBar from "../ProgressBar";
import { devices } from "../../data/devices";
import AccountSettings from "./stepOne/AccountSettings";

export default function Home(props) {
  const parentid = 22;

  // state to keep track of which page we are on
  // 5 pages in total of registration process starting from 1 (the table of orders)
  // page 0 is account settings page

  const [page, setPage] = useState(0);
  const [focus, setFocus] = useState(props.focus);
  const [refresh, setRefresh] = useState(false);



  const components = [
    <Table
      parentid={parentid}
      refresh={refresh}
      setRefresh={() => setRefresh(!refresh)}
      setPage = {setPage}
    />,
    <AccountSettings/>
  ];
  const titles = [
    "My Registration",
    "Account Settings",
    "Students Information",
    "Select a time",
    "Select Program",
    "Waiver and Policy",
  ];
  console.log(page)
  return (
    <Container>
      <Nav focus={focus} setFocus={setFocus} />
      <ProgressBar page={page} />
      <Box>
        <Title>{titles[page]}</Title>
      </Box>
      {components[page]}
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
  @media ${devices.laptop} {
    left: 50px;
    margin-top: 25px;
  }
`;




const Title = styled.div`
  color: white;

  @media ${devices.laptop} {
    font-size: 50px;
  }
`;
