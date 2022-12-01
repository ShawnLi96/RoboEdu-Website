import React from "react";
import { COLUMNS } from "../../data/columns";
import "../../css/table.css";
import styled from 'styled-components'
import check from "../../images/check.png";
import cross from "../../images/cross.png";
import { devices } from "../../data/devices"
import Schedule from "./Schedule"

export default function InfoTable(props) {
  
  return (
      <div>

        <table>
          <thead>
            <tr>
              {COLUMNS.map((column) => {
                return <th key={column}>{column}</th>;
              })}
            </tr>
          </thead>
          {
            props.orders.map((schedule, i) => {
              var total = 0;
              return (
                <Schedule schedule={schedule}/>
              )
              // each order will have a schedule
              
                
              
            }) 
            
          }
        </table>
      </div>
    );
          
}
const Cell = styled.td`

  @media ${devices.tablet}{
    font-size: 15px;
  }

  @media ${devices.laptop}{
    font-size: 15px;

  }

  @media ${devices.laptopL}{
    font-size: 20px;
  }


`
const IconTD = styled.td`
  
  @media ${devices.tablet}{
    width: 100px;  
  }

  @media ${devices.laptop}{
    width: 100px;
  }

  @media ${devices.laptopL}{
    width: 100px;
  }

`
const Summary = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

`

const SummaryContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${devices.mobile}{

  }

  @media ${devices.tablet}{
    margin-left: 25px;
  }

`
const Info = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  @media ${devices.tablet}{
    height: 50px;
  }
  @media ${devices.laptop}{
    height: 50px;
  }

  @media ${devices.laptopL}{
    height: 80px;
    font-size: 18px;
  }
`

const Button = styled.a`
    background-color: ${(props) => {
      if (props.name === "edit") return "#07AEFC";
      else if (props.name === "delete") return "#91C4A9"
      else return "#90DCE8"
    }};
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;    
    align-items: center;
    cursor: pointer;
    &:link { text-decoration: none; }
    &:visited { text-decoration: none; }
    &:hover { text-decoration: none; }
    &:active { text-decoration: none; }
    &:hover{
        transition: 0.5s;
        filter: brightness(1.25);
    }
    @media ${devices.mobile}{
      width: 150px;
      font-size: 5vw;
      height: 50px;

  }

  @media ${devices.tablet}{
      width: 10vw;
      height: 3vw;
      font-size: 1.5vw;
      
  }
  @media ${devices.laptop}{
      width: 12vw;
      height: 3vw;
      font-size: 2vw;
  }

  @media ${devices.laptopL}{
      width: 10vw;
      height: 2.5vw;
      font-size: 1.25vw;
      margin-left: 25px;
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