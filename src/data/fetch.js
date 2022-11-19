export async function fetchStudent(id) {
  const data = await fetch(`http://192.168.2.225:160/students/getstudent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      studentid: id,
      authkey:
        "88dac29638e4f20a3dc0706aa3c5a306328042f5fcb71119395aaa98c278056f31ea2ff1c9efba7c70510553416088d8",
    }),
  }).then((res) => {
    return res.json();
  }).then((json) => {
    return json;
  })

  return data;
}

export async function fetchCamper(id) {
  const data = await fetch(`http://192.168.2.225:160/campers/getcamper`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      camperid: id,
      authkey:
        "88dac29638e4f20a3dc0706aa3c5a306328042f5fcb71119395aaa98c278056f31ea2ff1c9efba7c70510553416088d8",
    }),
  }).then((res) => {
    return res.json();
  }).then((json) => {
    return json;
  })

  return data;
}

export async function fetchOrders(id) {
  const data = await fetch(`http://192.168.2.225:160/parents/getorders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parentid: id,
      authkey:
        "88dac29638e4f20a3dc0706aa3c5a306328042f5fcb71119395aaa98c278056f31ea2ff1c9efba7c70510553416088d8",
    }),
  }).then((res) => {
    return res.json();
  }).then((json) => {
    return json;
  });

  return data;
}
