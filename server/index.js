const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'csaa-rest-test.cluvhncij4nr.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'rootroot',
    database: 'roboedu'
})

app.get("/api", (req, res) => {

    const sqlInsert = "INSERT INTO location0.orders (ID, `Parent ID`, CamperIDs, `Last Action`, Fee, `status`, PayMethod) values (124, 50880, '111, 222, 333', 1, 20.18, 0, 'card');"
    db.query(sqlInsert, (err, result) => {
        res.json({"users": ["Orion", "Orion2", "Orion3"]})
    })
})


// react defaults to port 3000, so run server on port 5000
app.listen(5000, () =>{
    console.log("Server listening to port 5000")
})