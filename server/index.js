const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ["Orion", "Orion2"]})
})


// react defaults to port 3000, so run server on port 5000
app.listen(5000, () =>{
    console.log("Server listening to port 5000")
})