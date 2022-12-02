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