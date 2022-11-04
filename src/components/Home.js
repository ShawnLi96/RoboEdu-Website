import React, { useState, useEffect } from "react";
import InfoTable from "./NewInfoTable";
import { fetchOrders } from "../data/fetch";

export default function Home() {

      
  const parentid = 22

  // an array of orders fetched
  const [allOrders, setOrders] = useState();

  // fetches all the orders and saves into state
  const getOrders = async () => {
      const orders = fetchOrders(parentid).then((res) => {
      return res;
      });
      setOrders(await orders);
      console.log('ORDERS')
      console.log(orders)
  };

  useEffect(() => {
      console.log('first render, get orders')
      getOrders();
    }, []);
  

  return (
    <>
      <InfoTable orders={allOrders}></InfoTable>
    </>
  );
}
