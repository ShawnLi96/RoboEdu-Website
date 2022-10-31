import React, { useMemo } from "react";
import styled from "styled-components";
import { COLUMNS } from "../data/columns";
import MOCK_DATA from "../MOCK_DATA.json";
import "../css/table.css";
import { fetchOrders, fetchStudent } from "../data/fetch";

import check from "../images/check.png";
import cross from "../images/cross.png";

export default function NewInfoTable() {
  const parentid = 22;

  const orders = fetchOrders(parentid);
  const student = fetchStudent(4)
  const nums = [1, 2, 3, 4, 5];

  console.log("hello");
  console.log(JSON.parse("[1, 2, 3]"));

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
          <tr>
            {nums.map((num) => {
              return <td> {num} </td>;
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
}
