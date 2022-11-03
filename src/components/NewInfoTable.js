import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLUMNS } from "../data/columns";
import "../css/table.css";
import { fetchOrders, fetchStudent, fetchCamper } from "../data/fetch";

import check from "../images/check.png";
import cross from "../images/cross.png";

export default function NewInfoTable() {
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

  const parentid = 22;
  // an array of orders fetched
  const [allOrders, setOrders] = useState([]);

  // a 2D array, where each 1D array corresponds to each order
  // allCamperInfo[i][x] stores a HTML row element for a camper
  // displayed on row x of order i
  const [allCamperInfo, setAllCamperInfo] = useState([]);

  // fetches all the orders and saves into state
  const getOrders = async () => {
    const orders = fetchOrders(parentid).then((res) => {
      return res;
    });
    setOrders(await orders);
  };

  //
  const getCampers = async () => {
    const masterCamperInfo = [];
    allOrders.map((order) => {
      const orderCamperData = [];
      const campers = JSON.parse(order["CamperIDs"]);
      campers.map(async (camper, i) => {
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
            <td>{camperData["Lunch"]}</td>
            <td>{camperData["BeforeExt"]}</td>
            <td>{camperData["AfterExt"]}</td>
            <td>
              {formatter.format(
                camperData["Lunch"] * 50 +
                  camperData["BeforeExt"] * 50 +
                  camperData["AfterExt"] * 50
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
    getOrders();
  }, []);

  useEffect(() => {
    getCampers();
  }, [allOrders]);


  return (
    <>
      <p>hello</p>

      <table>
        <thead>
          <tr>
            {COLUMNS.map((column) => {
              return <th key={column}>{column}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {
        
          allCamperInfo.map((order) => {
            return (
              <>
                test
                {order}
                <tr>
                  <td colSpan={7}>Summary</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
