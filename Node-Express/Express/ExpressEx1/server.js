const express = require('express')
const morgan = require('morgan')
const app = express();

app.use(morgan('combined'))

// we are initilizing express app

//Basic Routing 
/*
    API URL: http://localhost:5000/
    Mthod: GET
    Fields: No Requires
    Access Type: Public
*/
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

/*
    API URL: http://localhost:5000/user
    Mthod: GET
    Fields: No Requires
    Access Type: Public
*/
app.get("/user", (req, res) => {
    res.send("User data")
})

/*
    API URL: http://localhost:5000/employee
    Mthod: GET
    Fields: No Requires
    Access Type: Public
*/
app.get("/employee", (req, res) => {
    res.send("Employee data")
})

/*
    API URL: http://localhost:5000/employee/details
    Mthod: GET
    Fields: No Requires
    Access Type: Public
*/
app.get("/employee/details", (req, res) => {
    res.send("Employee data")
})

/*
    API URL: http://localhost:5000/insert
    Method: POST
    Fileds: email, password
    Access type: Public
*/
app.post("/signup", (req, res) => {
    res.send("User registered successfully")
})

app.listen(5000, (err) => {
    if(err) throw err;
    console.log(`Server is running on http://localhost:5000`);
}) 