import React, {useState} from "react";
import { COLUMNS } from "../../data/columns";
import "../../css/table.css";
import styled from 'styled-components'

export default function NewInfoTable(props) {
  
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
            }) 
            
          }
        </table>

        <Refresh onClick = {(e) => setRefresh((refresh) => {
          console.log(refresh)
          return (refresh + 1)})}>Refresh</Refresh>
      </>
    );
          
}
var formatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});

const Refresh = styled.div `
  background-color: white;
  text-align: center;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
`
