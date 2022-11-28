import React, { useState, useEffect } from "react";
import InfoTable from "./NewInfoTable";
import { request } from "../../data/fetch";
import styled from "styled-components";


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

            // create an entry for the camper for this order in the table
            // the entry will be an array [<tr>, subtotal]
            // <tr> is the html element that will display
            // subtotal is the subtotal for the camper
            return totalWeeks[camperData["Week"]].push(
              {
                name: camperData["Name"],
                program: camperData["Program ID"],
                lunch: camperData["Lunch"] === 1,
                beforeExt: camperData["BeforeExt"] === 1,
                afterExt: camperData["AfterExt"] === 1,
                subtotal: camperData["Lunch"] * 50 + camperData["BeforeExt"] * 50 + camperData["AfterExt"] * 50 + 50 // program fee;
              });
          });
        });
        return setAllCamperInfo(totalWeeks);

      }
    };
    getCampers();
  }, [orders]);

  console.log("allcamperInfo", allCamperInfo)
  return (
    <Container>
      <InfoTable data={allCamperInfo}></InfoTable>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
`