export async function fetchStudent(id) {
  const data = await fetch(`http://localhost:160/students/getstudent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      studentid: id,
      authkey:
        "f99b3e0accc55b4e8df73e83e430590257dc03a4f6ac859608773d0952a04acee359c7dfeced23be88fac3a7f160e836",
    }),
  }).then((res) => {
    return res.json();
  }).then((json) => {
    return json;
  })

  return data;
}

export async function fetchCamper(id) {
  const data = await fetch(`http://localhost:160/campers/getcamper`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      camperid: id,
      authkey:
        "f99b3e0accc55b4e8df73e83e430590257dc03a4f6ac859608773d0952a04acee359c7dfeced23be88fac3a7f160e836",
    }),
  }).then((res) => {
    return res.json();
  }).then((json) => {
    return json;
  })

  return data;
}

export async function fetchOrders(id) {
  const data = await fetch(`http://localhost:160/parents/getorders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parentid: id,
      authkey:
        "f99b3e0accc55b4e8df73e83e430590257dc03a4f6ac859608773d0952a04acee359c7dfeced23be88fac3a7f160e836",
    }),
  }).then((res) => {
    return res.json();
  }).then((json) => {
    return json;
  });

  return data;
}
