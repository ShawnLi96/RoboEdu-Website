import React, {useState} from "react";
import { COLUMNS } from "../data/columns";
import "../css/table.css";
import styled from 'styled-components'

export default function NewInfoTable(props) {
<<<<<<< HEAD

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
=======
  
  const [refresh, setRefresh] = useState(0)

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
          {
          props.data.map((order, i) => {
            var total = 0;
            console.log(order.length)

            return (
              <tbody key={i}>
                {order.map((entry) => {
                  // maps thru every camper of the particular order
                  // returns it as a <tr> HTML element
                  total += entry[1];
                  return entry[0];
                })}
                <tr>
                  <td colSpan={7}>Summary: {formatter.format(total)}</td>
                </tr>
              </tbody>
            );
          })}
        </table>

        <Refresh onClick = {(e) => setRefresh((refresh) => {
          console.log(refresh)
          return (refresh + 1)})}>Refresh</Refresh>
      </>
    );
          
>>>>>>> 2e6438449b4215214556142e36a06f5ccaa0d1d9
}
var formatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});

const Refresh = styled.div `
  text-align: center;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
`
