import React, { useState, useEffect } from "react";
import InfoTable from "./NewInfoTable";
import { request } from "../../data/fetch";
import styled from "styled-components";

import check from "../../images/check.png";
import cross from "../../images/cross.png";

export default function Table(props) {




  // an array of orders fetched
  const [orders, setOrders] = useState([]);  

  useEffect(() => {
    getOrders();
  }, []);
  // fetches all the orders and saves into state
  const getOrders = async () => {
    const orders = await request("/parents/getorders", "post", {parentid: props.parentid}).then((res) => {
      console.log("ORDERS", res)
      return res;
    }).catch(err => {
      console.log(err)
    });
    setOrders(orders);
  };




  const [allCamperInfo, setAllCamperInfo] = useState([]);

  // loop thru the orders and fetch every camper. 
  // parse information of each camper into html and save it into state allCamperInfo
  useEffect(() => {
    var totalWeeks = [[], [], [], [], [], [], [], [], []];
    const getCampers = async () => {
      if (orders) {
        console.log("props", orders);
        orders.map((order) => {
          const campers = JSON.parse(order["CamperIDs"]);
          campers.map(async (camper) => {
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
            return totalWeeks[camperData["Week"]].push([
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
        });
        return setAllCamperInfo(totalWeeks);

      }
    };
    getCampers();
  }, [orders]);

  console.log("allcamperInfo", allCamperInfo)
  return (
    <div>
      <InfoTable data={allCamperInfo}></InfoTable>
    </div>
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
  "July 3 - July 7",
  "July 10 - July 14",
  "July 17 - July 21",
  "July 24 - July 28",
  "July 31 - Aug 4",
  "Aug 7 - Aug 11",
  "Aug 14 - Aug 18",
  "Aug 21 - Aug 25",
];
