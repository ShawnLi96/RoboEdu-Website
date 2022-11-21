export async function fetch(param, route) {
    const data = await fetch(`http://192.168.2.225:160/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...param,
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

