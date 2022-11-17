import React from "react";
import { COLUMNS } from "../data/columns";
import "../css/table.css";

export default function NewInfoTable(props) {

  var body = []
  const build = () => {

    // 3d array
    props.data.map((order, i) => {
      var total = 0;    
      console.log('run')
      console.log(order)
      console.log(order.length)

      // for every entry
      for (let i = 0; i < order.length; i++){
        const entry = order[i]
        body.push(entry[0])
        total += entry[1]
        console.log("entry", entry)
      }
      body.push(
        <tr key={i}>
        <td colSpan={7}>Summary: {formatter.format(total)}</td>
        </tr>
      );
    });
    
  }

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
          {build()}
        </tbody>
      </table>
    </>
  );
}
var formatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});
