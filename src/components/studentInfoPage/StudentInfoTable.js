import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { devices } from "../../data/devices";
import { request } from "../../data/fetch";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StudentInfoTable(props) {
  const tableStyle = {
    color: "black",
    width: "1000px",
  };

  const tableHeaderStyle = {
    backgroundColor: "#04aa6d",
    color: "white",
  };

  const [info, setInfo] = useState([]);

  const getStudents = async () => {
    return await request("/parents/getparent", "post", {parentid: props.parentid})
    .then(
      (res) => {
        console.log(res);
        const children = JSON.parse(res.children);
        var temp = []
        children.map(
          async(i) => {
            await request("/students/getstudent", "post", {studentid: i})
            .then((res) =>{
              console.log(res);
              temp.push(res);
            }
            ).catch(err => {
              console.log(err)
            });
          }
        );
        console.log(temp);
        setInfo(temp);
      }
    ).catch(err => {
      console.log(err)
    });
  }

  useEffect(() => {
    getStudents();
  }, []);

  const Table = (props) => {
    const {data} = props
    console.log({data});

    return(
      <table style={tableStyle}>
        <tbody>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Date of Birth</th>
            <th style={tableHeaderStyle}>Gender</th>
            <th style={tableHeaderStyle}>Grade</th>
            <th style={tableHeaderStyle}>Select</th>
          </tr>

          {data.map(row =>
            <Row
            id = {row.ID}
            name = {row["first name"] + " " + row["last name"]}
            dob = {row.dob}
            gender = {row.status}
            grade = {row.grade}
            exp = {row.school}/>
          )}

          <tr>
            <td height={60} rowSpan={2}>+ New Student</td>
            <td height={30}><Input></Input></td>
            <td height={30}><Input></Input></td>
            <td height={30}><Input></Input></td>
            <td height={60} rowSpan={2}>
            <div class="form-check" style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault"/>
            </div>
            </td>
          </tr>
          <tr>
            <td height={30} colSpan={3}>STEM Experience: <Input></Input></td>
          </tr>
        </tbody>
      </table>
    );
  };

  const Row = (props) => {
    const {id, name, dob, gender, grade, exp} = props

    return(
      <React.Fragment>
        <tr>
          <td height={60} rowSpan={2}>{name}</td>
          <td height={30}>{dob}</td>
          <td height={30}>{gender}</td>
          <td height={30}>{grade}</td>
          <td height={60} rowSpan={2}>
          <div class="form-check" style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
            <input class="form-check-input" type="checkbox" value="" id={id} onClick={(c) => updateStudents(c.target)}/>
          </div>
          </td>
        </tr>
        <tr>
          <td height={30} colSpan={3}>STEM Experience: {exp}</td>
        </tr>
      </React.Fragment>
    );
  };

  const updateStudents = (s) => {
    var temp = props.selectedStudents;
    if(s.checked === true) temp.push(s.id);
    else{
      for(var i = 0; i < temp.length; i++){
        if(temp[i] === s.id) temp.splice(i, 1);
      }
    };

    props.setStudents(temp);
    console.log(props.selectedStudents);
  };

  const sendStudents = () => {
    props.setPage(2)
    props.setTitle(2);
  };

  return (
    <Container>
      <Table data = {info}/>

      <Box>
        <Button onClick = {() => sendStudents()}>Next</Button>
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

const Input = styled.input`
    type: "text";
    required
    autofocus
    font-size: 15px;

    @media ${devices.mobile}{
        font-weight: normal;
        height: 2vh;
        
    }

    @media ${devices.tablet}{
        width: 10vw;
        height: 2vh;
        font-size: 15px;

    }

    @media ${devices.laptop}{
        width: 10vw;
        height: 2vh;
        font-size: 15px;
    }
    @media ${devices.laptopL}{
        height: 2vh;
        width: 10vw;
        font-size: 15px;
    }
`;