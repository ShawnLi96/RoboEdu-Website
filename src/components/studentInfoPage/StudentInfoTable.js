import { id } from "date-fns/locale";
import React, { useEffect, useInsertionEffect, useState } from "react";
import styled from "styled-components";
import { devices } from "../../data/devices";
import { request } from "../../data/fetch";

export default function StudentInfoTable() {
  const tableStyle = {
    color: "black",
    width: "1000px",
  };

  const tableHeaderStyle = {
    backgroundColor: "#04aa6d",
    color: "white",
  };
/*
  useEffect(() => {
    const getStudents = async () => {
      if(fetchedOrders){
        fetchedOrders.map((order) => {
          const campers = JSON.parse(order["CampersId"]);
          campers.map(async (camper, i) => {
            const camperData = await request("/campers/getcamper", "post", {camperid: camper},
            ).then(
              (res) => {
              return res;
            }
            ).catch(err => {
              console.log(err)
            })

            const student = await request("/students/getstudent", "post", {studentid: camperData["Student ID"]}
            ).then(
              (res) => {
                return res;
              }
            ).catch(err => {
              console.log(err)
            });

            camperData["Name"] = student["first name"] + " " + student["last name"];
          });
        });
      }
    };
    getStudents();
  });
*/
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
          <td height={60} rowSpan={2}>Baron Yu</td>
          <td height={30}>2016.12.22</td>
          <td height={30}>M</td>
          <td height={30}>G1</td>
          <td height={60} rowSpan={2}></td>
        </tr>
        <tr>
          <td height={30} colSpan={3}>STEM Experience: Creator LV. 1</td>
        </tr>
        <tr>
          <td height={60} rowSpan={2}>Tian Qin</td>
          <td height={30}>2016.12.22</td>
          <td height={30}>M</td>
          <td height={30}>G3</td>
          <td height={60} rowSpan={2}></td>
        </tr>
        <tr>
          <td height={30} colSpan={3}>STEM Experience: Wedo 2.0 LV. 3</td>
        </tr>

        <tr>
          <td height={60} rowSpan={2}>+ New Student</td>
          <td height={30}></td>
          <td height={30}></td>
          <td height={30}></td>
          <td height={60} rowSpan={2}></td>
        </tr>
        <tr>
          <td height={30} colSpan={3}>STEM Experience: </td>
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