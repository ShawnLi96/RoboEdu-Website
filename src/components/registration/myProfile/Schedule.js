import React, {useState, useEffect} from "react";
import "../../../css/table.css";
import styled from 'styled-components'
import check from "../../../images/check.png";
import cross from "../../../images/cross.png";
import { devices } from "../../../data/devices"

export default function Schedule(props) {
  const [refresh, setRefresh] = useState(false);
  console.log(refresh)
  useEffect(() => {
    setRefresh(true)
  }, [])

  return (
    <Container>
      <table style={{width: "100%"}}>
        <thead style={{width: "100%"}}>
          <tr style={{width: "100%"}}>
            <Header width = {0}> Camp Date </Header>
            <Header width = {1}> Student </Header>
            <Header width = {2}> Program </Header>
            <Header width = {3}>Lunch </Header>
            <Header width = {3}>Beforecare </Header>
            <Header width = {3}>Aftercare </Header>
            <Header width = {1}> Subtotal </Header>
          </tr>
        </thead>
        {
          props.schedule.map((week, i) => {
            // each order is 
            // [name, program, lunch, beforeExt, afterExt, subtotal]
            if (week.length > 0){
            return (
                <tbody key={i}>
                  
                  {week.map((entry, k) => {
                    // maps thru every camper of the particular order
                    // returns it as a <tr> HTML element

                    const weekHeader = (k === 0) ? <Date rowSpan = {week.length}>{weeks[i]}</Date>: '';
                    
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
    </Container>
  );         
}

// these percentages denote how much space a certain cell is going to take
// index 0 - size of camp date
// index 1 - size of student & subtotal
// index 2 - size of program
// index 3 - size of lunch, beforeext, afterext

const laptopSizes = ["10%", "15%", "30%", "10%"]
const tabletSizes = ["15%", "15%", "30%", "10%"]
const mobileSizes = ["15%", "10%", "30%", "10%"]
function selectWidth(device, width) {
  if (device === "laptop"){
    return laptopSizes[width];
  }
  else if (device === "tablet"){
    return tabletSizes[width];
  }
  else if (device === "mobile"){
    return mobileSizes[width];
  }
}
const Container = styled.div`
  @media ${devices.mobile}{
    width: 95vw;
  }
`
const Header = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04AA6D;
  color: white;

  @media ${devices.mobile}{
    width: ${(props) => selectWidth("mobile", props.width)}

  }

  @media ${devices.tablet}{
    font-size: 15px;
    width: ${(props) => selectWidth("tablet", props.width)}

  }

  @media ${devices.laptop}{
    font-size: 18px;
    width: ${(props) => selectWidth("laptop", props.width)}

  }
`

const Student = styled.td`
  outline: 1px solid black;
  @media ${devices.mobile}{

  }
  @media ${devices.tablet}{
    font-size: 15px;
  }
  
`

const Date = styled.td`

  @media ${devices.mobile}{

  }
  @media ${devices.tablet}{
    font-size: 13px;
  }
  @media ${devices.laptop}{
    font-size: 15px;
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
  
  // CHANGE TO PERCENTAGES
  @media ${devices.tablet}{
    width: 80px;  
  }

  @media ${devices.laptop}{
    width: 100px;
  }

  @media ${devices.laptopL}{
    width: 5%;
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
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.state ? check : cross)});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;

  @media ${devices.tablet}{
    width: 20px;
    height: 20px;
  }

  @media ${devices.laptop}{
    width: 25px;
    height: 25px;
  }

  @media ${devices.laptopL}{
    width: 25px;
    height: 25px;
  }
`;