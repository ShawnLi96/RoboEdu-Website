import React from "react";
import "../../css/table.css";
import styled from 'styled-components'
import { devices } from "../../data/devices"
import Schedule from "./Schedule"

export default function InfoTable(props) {
  console.log(props.orders)
  return (
      <div>

        <table>
          {
            props.orders.map((schedule, i) => {
              var dateEdited = new Date(props.data[i]["Last Action"]).toLocaleDateString("en-US")
              return (
                <tbody>
                  <Schedule schedule={schedule}/>
                  <tr>
                    <Summary>
                      <SummaryContainer>
                          <Info>
                            Total: {formatter.format(props.data[i]["Fee"])}<br></br>
                            Last edited: {dateEdited} <br></br>
                            Status: {props.data[i]["status"]}
                          </Info>
                        <div style = {{display: "flex"}}>
                          <Button name = "edit">Edit</Button>
                          <Button name = "delete">Delete</Button>
                          <Button name = "confirm">Confirm</Button>
                        </div>
                      </SummaryContainer>
                    </Summary>
                  </tr>
                </tbody>
              )
              // each order will have a schedule
              
                
              
            }) 
            
          }
        </table>
      </div>
    );
          
}

const Summary = styled.td`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #E0E5E9;
  column-span: 7;
  border-top: 0;
  @media ${devices.mobile}{

  }

  @media ${devices.tablet}{
    padding: 20px 0px;
  }
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



var formatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});


