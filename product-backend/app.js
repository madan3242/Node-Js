// dotenv configuration
require('dotenv').config();
//connect to MongoDB
require('./configure/database').connect();
const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.get("/", (req, res) => {
    res.send("Hello World")
})

// configure product router
app.use('/api', require('./router/productApi'))

module.exports = app;