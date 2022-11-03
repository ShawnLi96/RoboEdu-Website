import React, { useState, useEffect } from "react";
import InfoTable from "./NewInfoTable";
import { fetchCamper, fetchStudent, fetchOrders } from "../data/fetch";
import styled from 'styled-components'

import check from "../images/check.png";
import cross from "../images/cross.png";
export default function Home() {
  var formatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });
  const weeks = [
    "",
    "July 1st to 7th",
    "July 8th to 14th",
    "July 15th to 21st",
    "July 22nd to 29th",
    "August 1st to 7th",
    "August 8th to 14th",
    "August 15th to 21st",
    "August 22nd to 29th",
  ];

      
  const parentid = 22

  // an array of orders fetched
  const [allOrders, setOrders] = useState();

  // fetches all the orders and saves into state
  const getOrders = async () => {
      const orders = fetchOrders(parentid).then((res) => {
      return res;
      });
      setOrders(await orders);
  };

  useEffect(() => {
      console.log('first render, get orders')
      getOrders();
    }, []);
  
  // a 2D array, where each 1D array corresponds to each order
  // allCamperInfo[i][x] stores a HTML row element for a camper
  // displayed on row x of order i
  const [allCamperInfo, setAllCamperInfo] = useState([]);

  const getCampers = async () => {
    const masterCamperInfo = [];
    allOrders.map((order) => {
      const orderCamperData = [];
      const campers = JSON.parse(order["CamperIDs"]);
      campers.map(async (camper) => {
        const camperData = await fetchCamper(camper).then((res) => {
          return res;
        });

        // needed to fetch name, as campers/getCamper does not provide name
        const student = await fetchStudent(camperData["Student ID"]).then(
          (res) => {
            return res;
          }
        );

        // create a name key pair in the camperData
        camperData["Name"] = student["first name"] + " " + student["last name"];

        // create an entry for the camper for this order in the table
        return orderCamperData.push(
          <tr key={`camper-${camper}`}>
            <td>{weeks[camperData["Week"]]}</td>
            <td>{camperData["Name"]}</td>
            <td>{camperData["Program ID"]}</td>
            <td><Icon state = {camperData["Lunch"] === 1}/> </td>
            <td><Icon state = {camperData["BeforeExt"] === 1}/> </td>
            <td><Icon state = {camperData["AfterExt"] === 1}/> </td>
            <td>
              {formatter.format(
                camperData["Lunch"] * 50 +
                  camperData["BeforeExt"] * 50 +
                  camperData["AfterExt"] * 5
              )}
            </td>
          </tr>
        );
      });

      return masterCamperInfo.push(orderCamperData);
    });

    setAllCamperInfo(masterCamperInfo);
  };

  useEffect(() => {
    console.log("second render");
    getCampers();
  }, [allOrders]);

  return (
    <>
      <InfoTable data={allCamperInfo}></InfoTable>
    </>
  );
}
const Icon = styled.div`
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.state ? check : cross)});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
`
