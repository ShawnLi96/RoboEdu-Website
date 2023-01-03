import { id } from "date-fns/locale";
import React, { useEffect, useInsertionEffect, useState } from "react";
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
    const parent = await request("/parents/getparent", "post", {parentid: props.parentid})
    .then(
      (res) => {
        const children = res.children;
        
        const studentData = children.map(
          async(i) => {
            await request("/students/getstudent", "post", {studentid: i})
            .then(
              studentData.push(i)
            ).catch(err => {
              console.log(err)
            });
          }
        );

        return setInfo(studentData);
      }
    ).catch(err => {
      console.log(err)
    });
  }

  useEffect(() => {
    getStudents();
  }, []);

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
                  <input class="form-check-input" type="checkbox" value="" id={id}/>
                  <label class="form-check-label" for="flexCheckDefault"/>
                </div>
                </td>
              </tr>
              <tr>
                <td height={30} colSpan={3}>{exp}</td>
              </tr>
        </React.Fragment>
    );
  };

  const Table = (props) => {
    const {data} = props

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
            id = {row.id}
            name = {row.name}
            dob = {row.dob}
            gender = {row.gender}
            grade = {row.grade}
            exp = {row.exp}/>
          )}

          <tr>
            <td height={60} rowSpan={2}>+ New Student</td>
            <td height={30}></td>
            <td height={30}></td>
            <td height={30}></td>
            <td height={60} rowSpan={2}>
            <div class="form-check" style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault"/>
            </div>
            </td>
          </tr>
          <tr>
            <td height={30} colSpan={3}>STEM Experience: </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <Container>
      <Table data = {info}/>

      <Box>
        <Button>Next</Button>
      </Box>
      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
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

const Button = styled.div`
  color: black;
  background-color: white;
  width: 200px;
  height: 40px;
  float: right;
  margin: 30px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding-top: 20px;
`;