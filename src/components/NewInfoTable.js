import React, { useState, useEffect } from "react";
import { COLUMNS } from "../data/columns";
import "../css/table.css";

export default function NewInfoTable(props) {
  return (
    <>
      <table>
        <thead>
          <tr>
            {COLUMNS.map((column) => {
              return <th key={column}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((order) => {
            return (
              <>
                {order}

                <tr>
                  <td colSpan={7}>Summary</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
