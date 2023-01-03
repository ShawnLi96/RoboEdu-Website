import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { devices } from "../../data/devices";

export default function SelectTimeTable() {
  const tableStyle = {
    color: "black",
    width: "1000px",
  };

  const tableHeaderStyle = {
    backgroundColor: "#04aa6d",
    color: "white",
  };

  return (
    <Container>
      <Button primary>Start New Registration</Button>

      <table style={tableStyle}>
        <tr>
          <th style={tableHeaderStyle}>Time</th>
          <th style={tableHeaderStyle}>Summary</th>
          <th style={tableHeaderStyle}>Select</th>
        </tr>
        <tr>
          <td rowSpan={3}>Week 1</td>
          <td>Program 1</td>
          <td rowSpan={3}></td>
        </tr>
        <tr>
          <td>Program 2</td>
        </tr>
        <tr>
          <td>Program 3</td>
        </tr>
        <tr>
          <td rowSpan={3}>Week 2</td>
          <td>Program 1</td>
          <td rowSpan={3}></td>
        </tr>
        <tr>
          <td>Program 2</td>
        </tr>
        <tr>
          <td>Program 3</td>
        </tr>
      </table>

      <Box>
        <Button>Next</Button>
        <Button>Back</Button>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: auto;
  @media ${devices.mobile} {
    width: 80vw;
  }

  @media ${devices.laptop} {
    width: 60vw;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  @media ${devices.tablet}{
    left: 25px;
    padding: 25px 0px;
  }
  @media ${devices.laptop} {
    left: 50px;
    padding: 25px 0px;
  }
`;

const Button = styled.div`
  color: black;
  background-color: white;
  width: 200px;
  height: 40px;
  float: right;
  margin: 30px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding-top: 20px;
`;