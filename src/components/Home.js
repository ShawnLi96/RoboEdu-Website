import React, { useState, useEffect } from "react";
import Table from "./Table";
import { fetchOrders } from "../data/fetch";

export default function Home() {
  const parentid = 22;

  // an array of orders fetched
  const [allOrders, setOrders] = useState();

  // fetches all the orders and saves into state
  const getOrders = async () => {
    const orders = fetchOrders(parentid).then((res) => {
      return res;
    });
    setOrders(await orders);
    console.log("ORDERS");
    console.log(orders);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <Table orders={allOrders}></Table>
    </>
  );
}
