require('dotenv').config();
const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/user", require('./router/userRouter'))

app.use("/product", require('./router/productRouter'))


module.exports = app;