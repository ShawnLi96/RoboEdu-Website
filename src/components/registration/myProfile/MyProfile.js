import React, { useState, useEffect, useRef } from "react";
import Table from "./Table";
import AccountSettings from "./AccountSettings"
import { request } from "../../../data/fetch";
import styled from "styled-components";
import { devices } from '../../../data/devices'


export default function MyProfile(props) {
  

  const [scheduleInfo, setScheduleInfo] = useState([]);
  const [orderInfo, setAllOrders] = useState([]);
  
  let fetchedOrders = useRef(null);

  console.log(fetchedOrders)
  useEffect(() => {
    build();
  }, []);

  async function build(){
    try{
      const orders = await getOrders();
      fetchedOrders.current = orders;
      await getCampers(orders)
      console.log('campers gotten')
    }
    catch (err) {
      console.log(err);
    }
  }

  


  async function getOrders() {
    return await request("/parents/getorders", "post", 
    {
      parentid: props.parentid
    }).then((res) => {
      console.log(res);
      return res;
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

  
  async function getCampers(fetchedOrders) {
    var masterSchedule = [[], [], [], [], [], [], [], [], []];
    var orders = []
    console.log("camper resources", fetchedOrders)
    if (fetchedOrders) {
      fetchedOrders.forEach(async (order) => {
        var schedule = [[], [], [], [], [], [], [], [], []];

        const campers = JSON.parse(order["CamperIDs"]);
        await campers.forEach(async (camper, i) => {
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
                setScheduleInfo(masterSchedule);
              }
            ).catch(err => {
              console.log(err)
            });

          }).catch(err => {
            console.log(err)
          })
        });
        orders.push(schedule)
        setAllOrders(orders);

    });
  }}

  // display 0 is the table (default)
  // display 1 is the account settings
  const [display, setDisplay] = useState(0);


  const params = {
    orders: orderInfo,
    fetchedOrders: fetchedOrders.current,
    schedule: scheduleInfo,
    refetchOrders: () => build(),
    setDisplay: setDisplay,
    setPage: props.setPage
  }

  const params2 = {
    parentid: props.parentid,
    setDisplay: setDisplay,
  }

  console.log(params)

  const displayProfile = () => {
    if (display === 0 && orderInfo){
        return <Table params = {params} />
    }
    else return <AccountSettings params = {params2}/>
  } 


  return (
    <>
        {displayProfile()}
    </>
  );
  
}
