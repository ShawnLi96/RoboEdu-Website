import React, { useState, useEffect } from "react";
import InfoTable from "./NewInfoTable";
import { fetchCamper, fetchStudent } from "../data/fetch";
import styled from "styled-components";

import check from "../images/check.png";
import cross from "../images/cross.png";

export default function Table(props) {
  // a 2D array, where each 1D array corresponds to each order
  // allCamperInfo[i][x] stores a HTML row element for a camper
  // displayed on row x of order i
  const [allCamperInfo, setAllCamperInfo] = useState([]);
  useEffect(() => {
    // setting the state allCamperInfo
    const getCampers = async () => {
      const masterCamperInfo = [];
      if (props.orders) {
        console.log("props", props.orders);
        props.orders.map((order) => {
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

            const subtotal =
              camperData["Lunch"] * 50 +
              camperData["BeforeExt"] * 50 +
              camperData["AfterExt"] * 50;

            // create a name key pair in the camperData
            camperData["Name"] =
              student["first name"] + " " + student["last name"];

            // create an entry for the camper for this order in the table
            // the entry will be an array [<tr>, subtotal]
            // <tr> is the html element that will display
            // subtotal is the subtotal for the camper
            return orderCamperData.push([
              <tr key={`camper-${camper}`}>
                <td>{weeks[camperData["Week"]]}</td>
                <td>{camperData["Name"]}</td>
                <td>{camperData["Program ID"]}</td>
                <td>
                  <Icon state={camperData["Lunch"] === 1} />{" "}
                </td>
                <td>
                  <Icon state={camperData["BeforeExt"] === 1} />{" "}
                </td>
                <td>
                  <Icon state={camperData["AfterExt"] === 1} />{" "}
                </td>
                <td>{formatter.format(subtotal)}</td>
              </tr>,
              subtotal,
            ]);
          });

          return masterCamperInfo.push(orderCamperData);
        });

        setAllCamperInfo(masterCamperInfo);
      }
    };
    getCampers();
  }, [props.orders]);
  // runs when orders changed
  console.log("allcamperinfo", allCamperInfo);

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
`;
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
