import React from "react";
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
          {props.data.map((order, i) => {
            var total = 0;
            return (
              <>
                {order.map((entry) => {
                  // maps thru every camper of the particular order
                  // returns it as a <tr> HTML element
                  total += entry[1];

                  return entry[0];
                })}
                <tr key={i}>
                  <td colSpan={7}>Summary: {formatter.format(total)}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
var formatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});
