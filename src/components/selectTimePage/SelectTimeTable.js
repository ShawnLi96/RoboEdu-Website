import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { devices } from "../../data/devices";
import { request } from "../../data/fetch";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SelectTimeTable(props) {
  const tableStyle = {
    color: "black",
    width: "1000px",
  };

  const tableHeaderStyle = {
    backgroundColor: "#04aa6d",
    color: "white",
    width: "11%"
  };

  const mainTableHeaderStyle = {
    backgroundColor: "#04aa6d",
    color: "white",
    width: "78%"
  };

  const [info, setInfo] = useState([]);
  const [weeks, setWeeks] = useState([]);
  const auth = sessionStorage.getItem("authkey");

  const getWeeks = async () => {
    props.selectedStudents.map(
      async (i) => {
        return await request("/programs/getweeks", "post", {
          authkey: auth,
          studentid: i
        })
        .then(
          (res) => {
            console.log(res);
            setWeeks(res);
          }
        ).catch(err => {
          console.log(err)
        });
      }
    );
  }

  useEffect(() => {
    getWeeks();
  }, []);

  const Table = (props) => {
    const {data} = props
    console.log({data});

    return(
      <table style={tableStyle}>
        <tbody>
          <tr>
            <th style={tableHeaderStyle}>Time</th>
            <th style={mainTableHeaderStyle}>Summary</th>
            <th style={tableHeaderStyle}>Select</th>
          </tr>

          {data.map(row =>
            <Row
            program1 = {row.program1}
            program2 = {row.program2}
            program3 = {row.program3}/>
          )}
        </tbody>
      </table>
    );
  };

  const Row = (props) => {
    const {id, i, program1, program2, program3} = props

    return(
      <React.Fragment>
        <tr>
          <td rowSpan={3}>Week {i}</td>
          <td>Program 1: {program1}</td>
          <td rowSpan={3}>
          <div class="form-check" style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
            <input class="form-check-input" type="checkbox" value="" id={id} onClick={(c) => updateWeeks(c.target)}/>
          </div>
          </td>
        </tr>
        <tr>
          <td>Program 2: {program2}</td>
        </tr>
        <tr>
          <td>Program 3: {program3}</td>
        </tr>
      </React.Fragment>
    );
  };

  const updateWeeks = (w) => {
    var temp = weeks;
    if(w.checked === true) temp.push(w.id);
    else{
      for(var i = 0; i < temp.length; i++){
        if(temp[i] === w.id) temp.splice(i, 1);
      }
    };

    setWeeks(temp);
    console.log({weeks});
  };

  const sendWeeks = () => {
    props.setPage(4)
  };

  return (
    <Container>
      {/* <table style={tableStyle}>
        <tr>
          <th style={tableHeaderStyle}>Time</th>
          <th style={mainTableHeaderStyle}>Summary</th>
          <th style={tableHeaderStyle}>Select</th>
        </tr>
        <tr>
          <td rowSpan={3}>Week 1</td>
          <td>Program 1</td>
          <td rowSpan={3}>
          <div class="form-check" style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault"/>
          </div>
          </td>
        </tr>
        <tr>
          <td>Program 2</td>
        </tr>
        <tr>
          <td>Program 3</td>
        </tr>
        <tr>
          <td rowSpan={3}>Week 2</td>
          <td>Program 1</td>
          <td rowSpan={3}>
          <div class="form-check" style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault"/>
          </div>
          </td>
        </tr>
        <tr>
          <td>Program 2</td>
        </tr>
        <tr>
          <td>Program 3</td>
        </tr>
      </table> */}

      <Table data = {info}/>

      <Box>
        <Button onClick = {() => props.setPage(2)}>Back</Button>
        <Button onClick = {() => props.setPage(4)}>Next</Button>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media ${devices.mobile} {
    width: 80vw;
  }

  @media ${devices.laptop} {
    width: 60vw;
  }
`;

const Box = styled.div`
  position: relative;
  display: flex;
  @media ${devices.tablet}{
    left: 25px;
    padding: 25px 0px;
  }
  @media ${devices.laptop} {
    left: 50px;
    padding: 25px 0px;
  }
`;

const Button = styled.a`
  background-color: #aac9d4;
  border-radius: 25px;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-top: 3vh;
  cursor: pointer;
  type: "submit";

  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
  &:hover {
    transition: 0.5s;
    background-color: #edd662;
  }
  @media ${devices.mobile} {
    width: 150px;
    font-size: 5vw;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${devices.tablet} {
    width: 20vw;
    height: 5vw;
    font-size: 1vw;
    margin-right: 0;
  }
  @media ${devices.laptop} {
    width: 10vw;
    height: 2vw;
    font-size: 1vw;
  }

  @media ${devices.laptopL} {
    width: 10vw;
    height: 2vw;
    font-size: 1vw;
  }
`;