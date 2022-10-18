const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true}))

const db = mysql.createPool({
    host: 'csaa-rest-test.cluvhncij4nr.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'rootroot',
})

app.post("/api/newUser", (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;

    const sqlInsert = "INSERT INTO location3.parents (`first name`, `last name`, `phone number`, email) VALUES (?,?,?,?);"
    db.query(sqlInsert, [firstName, lastName, email, phoneNumber], (err, result) => {
        console.log("inserted")
    })
})


// react defaults to port 3000, so run server on port 5000
app.listen(5000, () =>{
    console.log("Server listening to port 5000")
})