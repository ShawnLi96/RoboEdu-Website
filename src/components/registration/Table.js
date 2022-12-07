import React, { useState, useEffect } from "react";
import InfoTable from "./InfoTable";
import Schedule from "./Schedule"
import { request } from "../../data/fetch";
import styled from "styled-components";


export default function Table(props) {

  // an array of orders fetched
  const [fetchedOrders, setOrders] = useState([]);  
  useEffect(() => {
    getOrders();
  }, [props.refresh]);
  // fetches all the orders and saves into state
  const getOrders = async () => {
    const orders = await request("/parents/getorders", "post", {parentid: props.parentid}).then((res) => {
      return res;
    }).catch(err => {
      console.log(err)
    });
    setOrders(orders);
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
          const camperData = await request("/campers/getcamper", "post", {
            camperid: camper
          }, 
          ).then((res) => {
            return res;
          }).catch(err => {
            console.log(err)
          })

          // needed to fetch name, as campers/getCamper does not provide name
          const student = await request("/students/getstudent", "post", {studentid: camperData["Student ID"]}).then(
            (res) => {
              return res;
            }
          ).catch(err => {
            console.log(err)
          });
  

          // create a name key pair in the camperData
          camperData["Name"] =
            student["first name"] + " " + student["last name"];

          // create an entry for the camper for this order of the week
          return buildSchedule(masterSchedule, schedule, camperData);
        });
        orders.push(schedule)
    });
    setScheduleInfo(masterSchedule);
    setAllOrders(orders);
  }}

  useEffect(() => 
  {
    getCampers();
  }, [fetchedOrders]);

  const displayTable = () => {
    if (props.display === 0 && allOrders){
      return <InfoTable orders={allOrders} data={fetchedOrders} refresh = {props.refresh} setRefresh = {() => props.setRefresh}/>
    }
    else return <Schedule schedule = {scheduleInfo}/>
  }
  return (
    <Container>
      {displayTable()}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
`