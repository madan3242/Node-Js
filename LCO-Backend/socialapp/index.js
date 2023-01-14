// console.log("Hello");
const express = require('express')

const format = require('date-format');

let date = format.asString("dd-MM hh:mm:ss", new Date());

const app = express();

const PORT = process.env.PORT || 4000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// swagger docs related
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})



app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        username: "madan",
        followers: 79,
        follows: 82,
        date: date,
    }
    res.status(200).json(instaSocial)
});

app.get('/api/v1/facebook', (req, res) => {
    const instaSocial = {
        username: "madan123",
        followers: 67,
        follows: 78,
        date: date,
    }
    res.status(200).json(instaSocial)
})

app.get('/api/v1/linkedin', (req, res) => {
    const instaSocial = {
        username: "56madan",
        followers: 34,
        follows: 45,
        date: date,
    }
    res.status(200).json(instaSocial)
})

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({ parms : req.params.token})
})

app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
})