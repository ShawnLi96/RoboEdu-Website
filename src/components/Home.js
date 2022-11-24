import React, { useState, useEffect } from "react";
import Table from "./Table";
import { request } from "../data/fetch";

export default function Home() {
  const parentid = 22;

  // an array of orders fetched
  const [allOrders, setOrders] = useState();

  // fetches all the orders and saves into state
  const getOrders = async () => {
    const orders = await request("/parents/getorders", "post", {parentid: 22}).then((res) => {
      console.log("ORDERS", res)
      return res;
    });
    setOrders(orders);
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
