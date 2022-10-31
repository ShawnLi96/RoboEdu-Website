import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLUMNS } from "../data/columns";
import "../css/table.css";
import { fetchOrders, fetchStudent, fetchCamper } from "../data/fetch";

import check from "../images/check.png";
import cross from "../images/cross.png";

export default function NewInfoTable() {
  const parentid = 22;

  var formatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });
  const weeks = [
    "",
    "July 1st to 7th",
    "July 8th to 14th",
    "July 15th to 21st",
    "July 22nd to 29th",
    "August 1st to 7th",
    "August 8th to 14th",
    "August 15th to 21st",
    "August 22nd to 29th"
  ]

  const [allOrders, setOrders] = useState('');
  const [camperInfo, setCamperInfo] = useState('');

  useEffect(() => {
    getAllOrders(),
    getCamperInfo()
  }, [])

  const getAllOrders = async () => {
    setOrders(await fetchOrders(parentid))
  }


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
                console.log("CAMPERS")
                console.log(campers)
                return (

                  // for each camper
                  campers.map((camper) => {


                    fetchCamper(camper).then((camperData) => {
                      

                        return (
                          <>
                            <td>{weeks[camperData[0]["Week"]]}</td>
                            <td>
                              {
                                fetchStudent(camperData[0]["Student ID"]).then((studentData) => 
                                {
                                  console.log("STUDENT")
                                  console.log(camperData)
                                  console.log(camperData[0]["Student ID"])
                                  console.log(studentData)
                                  return (studentData["first name"] + " " + studentData["last name"])
                                })
                              }
                            </td>
                            <td>{camperData[0]["Program ID"]}</td>
                            <td>{camperData[0]["Lunch"]}</td>
                            <td>{camperData[0]["BeforeExt"]}</td>
                            <td>{camperData[0]["AfterExt"]}</td>
                            <td>
                              {
                                formatter.format(
                                camperData[0]["Lunch"] * 50 + 
                                camperData[0]["BeforeExt"] * 50 + 
                                camperData[0]["AfterExt"] * 50
                                )
                              }
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
