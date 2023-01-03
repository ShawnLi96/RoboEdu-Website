import React, { useState, useEffect } from "react";
import InfoTable from "./InfoTable";
import Schedule from "./Schedule"
import { request } from "../../../data/fetch";
import styled from "styled-components";
import { devices } from '../../../data/devices'


export default function Table(props) {

  console.log('rerender')
  console.log(props.parentid)
  // an array of orders fetched
  const [fetchedOrders, setOrders] = useState([]);  
  useEffect(() => {
    getOrders();
  }, []);
  // fetches all the orders and saves into state
  const getOrders = async () => {
    return await request("/parents/getorders", "post", {parentid: props.parentid}).then((res) => {
      setOrders(res);
      console.log(res)
      console.log('data set')
    }).catch(err => {
      console.log(err)
    });
  };

  function buildSchedule(masterSchedule, schedule, camperData) {
    schedule[camperData["Week"]].push(
      {
        name: camperData["Name"],
        program: camperData["Program ID"],
        lunch: camperData["Lunch"] === 1,
        beforeExt: camperData["BeforeExt"] === 1,
        afterExt: camperData["AfterExt"] === 1,
        subtotal: camperData["Lunch"] * 50 + camperData["BeforeExt"] * 50 + camperData["AfterExt"] * 50 + 50 // add program fee;
      })
    masterSchedule[camperData["Week"]].push(
      {
        name: camperData["Name"],
        program: camperData["Program ID"],
        lunch: camperData["Lunch"] === 1,
        beforeExt: camperData["BeforeExt"] === 1,
        afterExt: camperData["AfterExt"] === 1,
        subtotal: camperData["Lunch"] * 50 + camperData["BeforeExt"] * 50 + camperData["AfterExt"] * 50 + 50 // add program fee;
      })
  }

  const [scheduleInfo, setScheduleInfo] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  // loop thru the orders and fetch every camper. 
  // parse information of each camper into html and save it into state allCamperInfo


  
  const getCampers = async () => {
    var masterSchedule = [[], [], [], [], [], [], [], [], []];
    var orders = []
    if (fetchedOrders) {
      fetchedOrders.map((order) => {
        var schedule = [[], [], [], [], [], [], [], [], []];

        const campers = JSON.parse(order["CamperIDs"]);
        campers.map(async (camper, i) => {
          await request("/campers/getcamper", "post", {
            camperid: camper
          },
          ).then(async (res) => {
            console.log("camperdata", res)
            const camperData = res;
             // needed to fetch name, as campers/getCamper does not provide name
            await request("/students/getstudent", "post", {studentid: camperData["Student ID"]}).then(
              (res) => {
                const studentData = res;
                  // create a name key pair in the camperData
                  camperData["Name"] =
                  studentData["first name"] + " " + studentData["last name"];

                // create an entry for the camper for this order of the week
                buildSchedule(masterSchedule, schedule, camperData);

              }
            ).catch(err => {
              console.log(err)
            });
            setScheduleInfo(masterSchedule);
            setAllOrders(orders);
          }).catch(err => {
            console.log(err)
          })
        });
        orders.push(schedule)
    });
  }}

  useEffect(() => 
  {
    getCampers();
  }, [fetchedOrders]);

  const displayTable = () => {
    if (display === 0 && allOrders){
      return <InfoTable orders={allOrders} data={fetchedOrders} refresh = {props.refresh} setRefresh = {() => props.setRefresh}/>
    }
    else return <Schedule schedule = {scheduleInfo}/>
  }

  // display 0 is the list of orders (default)
  // display 1 is the schedule filled in by all orders
  const [display, setDisplay] = useState(0);
  return (
    <Container>
      <Box>
        <CircularButton onClick = {() => {
          console.log('clicked')
          props.setPage(1)}}>Account Settings</CircularButton>
        <CircularButton onClick = {() => props.setPage(2)}>Start New Registration</CircularButton>
      </Box>
      <div style={{ display: "flex" }}>
        <Button onClick={() => props.setRefresh(!props.refresh)}>Refresh</Button>
        <Button
          onClick={() =>
            setDisplay((display) => {
              return (display ^= 1);
            })
          }
        >
          Change View
        </Button>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        {displayTable()}
      </div>
    </Container>
  );
}
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
  background-color: white;
  text-align: center;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
`
const CircularButton = styled.a`
  background-color: #aac9d4;
  border-radius: 25px;
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
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
  }

  @media ${devices.tablet} {
    width: 25vw;
    height: 5.8vw;
    font-size: 2vw;
    margin-right: 30px;
  }
  @media ${devices.laptop} {
    width: 15vw;
    height: 5vw;
    font-size: 1.25vw;
    margin-right: 50px;
  }

  @media ${devices.laptopL} {
    width: 15vw;
    height: 3.5vw;
    font-size: 1.25vw;
  }
`;
