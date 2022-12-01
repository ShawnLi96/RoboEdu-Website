import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { devices } from "../../data/devices";

export default function SelectTimePage() {
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
      <button>New Registration</button>

      <table style={tableStyle}>
        <tr>
          <th style={tableHeaderStyle}>Time</th>
          <th style={tableHeaderStyle}>Summary</th>
          <th style={tableHeaderStyle}>Select</th>
        </tr>
        <tr>
          <td>Week 1</td>
          <td>Program 1</td>
          <td></td>
        </tr>
        <tr>
          <td>Week 2</td>
          <td>Program 2</td>
          <td></td>
        </tr>
        <tr>
          <td>Week 3</td>
          <td>Program 3</td>
          <td></td>
        </tr>
      </table>

      <button>Next</button>
      <button>Back</button>
    </Container>
  );
}

const Button = styled.a`
  margin: auto;
  border-style: solid;
  border-color: black;
  width: 20vw;
  cursor: pointer;
  text-align: center;
  color: ${(props) => (props.active ? "#EDD662" : "#FFFFFF")};
  background-color: ${(props) => (props.active ? "#1E108A" : "#000000")};
  @media ${devices.mobile} {
    font-size: 20px;
  }

  @media ${devices.tablet} {
    font-size: 30px;
    margin-top: 2vh;
  }

  @media ${devices.laptop} {
    font-size: 30px;
  }

  @media ${devices.laptopL} {
    font-size: 40px;
  }
`;

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