const express = require('express');

const router = express.Router();

/*
    Name: http://localhost:4000/user
*/
router.get("/", (req, res) => {
    console.log("/");
    res.send("User");
})
/*
    Name: http://localhost:4000/login
    Method: POST
    Fields: email, password
*/
router.post("/login", (req, res) => {
    // read form data
    let { email, password} = req.body;
    res.send("Login");
})
/*
    Name: http://localhost:4000/register
    Method: POST
    Fields: name, email, password
*/
router.get("/register", (req, res) => {
    res.send("Register");
})

module.exports = router;