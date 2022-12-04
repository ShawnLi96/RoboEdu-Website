import React, {useState} from "react";
import { COLUMNS } from "../../data/columns";
import "../../css/table.css";
import styled from 'styled-components'
import check from "../../images/check.png";
import cross from "../../images/cross.png";
import { devices } from "../../data/devices"

export default function Schedule(props) {
  
  return (
      <div>
        <table>
          <thead>
            <tr>
              {COLUMNS.map((column) => {
                return <Header key={column}>{column}</Header>;
              })}
            </tr>
          </thead>
          {
            props.schedule.map((week, i) => {
              // each order is 
              // [name, program, lunch, beforeExt, afterExt, subtotal]
              if (week.length > 0){
                var total = 0;
                console.log(props.schedule);
                return (
                  <tbody key={i}>
                    
                    {week.map((entry, k) => {
                      // maps thru every camper of the particular order
                      // returns it as a <tr> HTML element

                      const weekHeader = (k === 0) ? <Date rowSpan = {week.length}>{weeks[i]}</Date>: '';
                      
                      total += entry.subtotal;
                      return (
                        <tr key = {k}>
                          {weekHeader}
                          <Student>{entry.name}</Student>
                          <Program>{entry.program}</Program>
                          <IconTD> <Icon state={entry.lunch} /></IconTD>
                          <IconTD> <Icon state={entry.beforeExt} /></IconTD>
                          <IconTD> <Icon state={entry.afterExt} /></IconTD>
                          <Subtotal> {formatter.format(entry.subtotal)} </Subtotal>
                        </tr>
                      );
                    })}
                  </tbody>
                );
              }
            }) 
            
          }
        </table>
      </div>
    );
          
}

const Student = styled.td`
  outline: 1px solid black;
  @media ${devices.mobile}{

  }
  @media ${devices.tablet}{
    width: 15%;
  }
  
`

const Date = styled.td`
  outline: 1px solid black;

  @media ${devices.mobile}{

  }
  @media ${devices.tablet}{
    width: 20%;
  }
`
const Subtotal = styled.td`
  outline: 1px solid black;

  @media ${devices.mobile}{ 

  }

  @media ${devices.tablet}{
    font-size: 18px;
    width: 10%;
  }

  @media ${devices.laptop}{
    font-size: 20px;
  }
`
const Header = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04AA6D;
  color: white;

  @media ${devices.mobile}{

  }

  @media ${devices.tablet}{
    font-size: 15px;
  }

  @media ${devices.laptop}{
    font-size: 18px;
  }
`
const Program = styled.td`
  outline: 1px solid black;
  @media ${devices.tablet}{
    font-size: 15px;
  }

  @media ${devices.laptop}{
    font-size: 15px;
    width: 30%;

  }

  @media ${devices.laptopL}{
    font-size: 20px;
  }


`
const IconTD = styled.td`
  outline: 1px solid black;

  @media ${devices.tablet}{
    width: 80px;  
  }

  @media ${devices.laptop}{
    width: 100px;
  }

  @media ${devices.laptopL}{
    width: 100px;
  }

`
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