import React, { useMemo } from "react";
import styled from "styled-components";
import { COLUMNS } from "../data/columns";
import "../css/table.css";
import { fetchOrders, fetchStudent } from "../data/fetch";

import check from "../images/check.png";
import cross from "../images/cross.png";

export default function NewInfoTable() {
  const parentid = 22;

  const student = fetchStudent(4);
  const nums = [1, 2, 3, 4, 5];

  console.log("hello");
  console.log(JSON.parse("[1, 2, 3]"));


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
                
                const campers = JSON.parse(order.CamperIDs);
                console.log(campers)
                return (
                  campers.map((camper) => {
                    fetchStudent(camper).then((data) => {
                      console.log(data.week);
                                        
                    })
                  })

                )
                
              })
          })
        }
        </tbody>
      </table>
    </>
  );
}
