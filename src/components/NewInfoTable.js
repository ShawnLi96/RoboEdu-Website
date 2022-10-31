import React, { useMemo } from "react";
import styled from "styled-components";
import { COLUMNS } from "../data/columns";
import "../css/table.css";
import { fetchOrders, fetchStudent, fetchCamper } from "../data/fetch";

import check from "../images/check.png";
import cross from "../images/cross.png";

export default function NewInfoTable() {
  const parentid = 22;

  const student = fetchStudent(4);
  const nums = [1, 2, 3, 4, 5];

  console.log("hello");
  console.log(JSON.parse("[1, 2, 3]"));
  console.log(fetchCamper(3))

  var formatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });
  const weeks = [
    "July 1st to 7th",
    "July 8th to 14th",
    "July 15th to 21st",
    "July 22nd to 29th",
    "August 1st to 7th",
    "August 8th to 14th",
    "August 15th to 21st",
    "August 22nd to 29th"
  ]

  return (
    <>
      <p>hello</p>

      <table>
        <thead>
          <tr>
            {COLUMNS.map((column) => {
              return <th key = {column}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {
            fetchOrders(parentid).then((orders) => {
              // for each order
              orders.map((order) => {
                
                const campers = JSON.parse(order["CamperIDs"]);
                console.log(campers)
                return (

                  // for each camper
                  campers.map((camper) => {
                    fetchCamper(camper).then((camperData) => {
                      console.log(camperData);
                      
                        return (
                          <>
                            <td>{weeks[camperData["Week"]]}</td>
                            <td>
                              {
                                fetchStudent(camperData["Student ID"]).then((studentData) => 
                                {
                                  return (studentData["first name"] + " " + studentData["last name"])
                                })
                              }
                            </td>
                            <td>{camperData["Program ID"]}</td>
                            <td>{camperData["Lunch"]}</td>
                            <td>{camperData["BeforeExt"]}</td>
                            <td>{camperData["AfterExt"]}</td>
                            <td>{formatter.format(
                              camperData["Lunch"] * 50 + 
                              camperData["BeforeExt"] * 50 + 
                              camperData["AfterExt"] * 50
                            )}
                            </td>

                          </>
  
                        )}
                      )
                          
                                        
                    })
                )})

              })
                
              
          
        }
        </tbody>
      </table>
    </>
  );
}
