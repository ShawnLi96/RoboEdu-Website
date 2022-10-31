export function fetchStudent(id) {
  fetch(`http://localhost:160/students/getstudent`, {
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
  });
}

export function fetchOrders(id) {
  fetch(`http://localhost:160/parents/getorders`, {
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
  });
}
