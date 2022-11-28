import React, {useState} from "react";
import { COLUMNS } from "../../data/columns";
import "../../css/table.css";
import styled from 'styled-components'
import check from "../../images/check.png";
import cross from "../../images/cross.png";

export default function NewInfoTable(props) {
  
  const [refresh, setRefresh] = useState(0)

  return (
      <div>

        <Refresh onClick = {(e) => setRefresh((refresh) => {
          console.log(refresh)
          return (refresh + 1)})}>Refresh</Refresh>
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

              // each order is 
              // [name, program, lunch, beforeExt, afterExt, subtotal]
              if (order.length > 0){
                var total = 0;
                return (
                  <tbody key={i}>
                    
                    {order.map((entry, k) => {
                      // maps thru every camper of the particular order
                      // returns it as a <tr> HTML element

                      const weekHeader = (k === 0) ? <td rowSpan = {order.length}>{weeks[i]}</td>: '';
                      total += entry.subtotal;
                      return (
                        <tr>
                          {weekHeader}
                          <td>{entry.name}</td>
                          <td>{entry.program}</td>
                          <td> <Icon state={entry.lunch} /></td>
                          <td> <Icon state={entry.beforeExt} /></td>
                          <td> <Icon state={entry.afterExt} /></td>
                          <td> {formatter.format(entry.subtotal)} </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td colSpan={7}>Summary: {formatter.format(total)}</td>
                    </tr>
                  </tbody>
                );
              }
            }) 
            
          }
        </table>
      </div>
    );
          
}
const weeks = [
  "",
  "July 3 - July 7",
  "July 10 - July 14",
  "July 17 - July 21",
  "July 24 - July 28",
  "July 31 - Aug 4",
  "Aug 7 - Aug 11",
  "Aug 14 - Aug 18",
  "Aug 21 - Aug 25",
];


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
const Icon = styled.div`
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.state ? check : cross)});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
`;