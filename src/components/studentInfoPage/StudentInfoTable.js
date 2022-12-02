import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { devices } from "../../data/devices";

export default function StudentInfoTable() {
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
          <th style={tableHeaderStyle}>Name</th>
          <th style={tableHeaderStyle}>Date of Birth</th>
          <th style={tableHeaderStyle}>Gender</th>
          <th style={tableHeaderStyle}>Grade</th>
          <th style={tableHeaderStyle}>Select</th>
        </tr>
        <tr>
          <td rowSpan={2}>Baron Yu</td>
          <td>2016.12.22</td>
          <td>M</td>
          <td>G1</td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={3}>STEM Experience: Creator LV. 1</td>
        </tr>
        <tr>
          <td rowSpan={2}>Tian Qin</td>
          <td>2016.12.22</td>
          <td>M</td>
          <td>G3</td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={3}>STEM Experience: Wedo 2.0 LV. 3</td>
        </tr>
        <tr>
          <td rowSpan={2}>+ New Student</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={3}>STEM Experience: </td>
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