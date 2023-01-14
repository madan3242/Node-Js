const express = require('express')

const app = express()

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const fileUpload = require('express-fileupload')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())
app.use(fileUpload())

let courses = [
    {
        id: "11",
        name: "Learn Reactjs",
        price: 299
    },
    {
        id: "12",
        name: "Learn Angular",
        price: 349
    },
    {
        id: "13",
        name: "Learn Vue",
        price: 399
    }
]

app.get("/", (req, res) => {
    res.send("Hello World")
});

//String based GET request
app.get("/api/v1/lco", (req, res) => {
    res.json("Hello LCO Docs")
});

//Handlig object
app.get("/api/v1/lcoobject", (req, res) => {
    res.send({
        id: "55",
        name: "learn backend",
        price: 349
    })
});

//Handling Array
app.get("/api/v1/courses", (req, res) => {
    res.send(courses)
});

//Sending data in URL
app.get("/api/v1/mycourse/:courseId", (req, res) => {
    const myCourse = courses.find(course => course.id === req.params.courseId)
    res.send(myCourse)
});

//Maganing Request Body
app.post("/api/v1/addCourse", (req, res) => {
    console.log(req.body);
    courses.push(req.body);
    res.send(true);
});

//Handling URL query 
app.get("/api/v1/coursequery", (req, res) => {
    let location = req.query.location;
    let device = req.query.device;
  
    res.send({ location, device });
});

//Handling images
app.post("/api/v1/courseupload", (req, res) => {
    console.log(req.headers);
    const file = req.files.file;
    console.log(file);
    let path = __dirname + "/images/" + Date.now() + ".jpg";
    file.mv(path, (err) => {
        if(err) throw err
        res.send(true);
    });
});

app.listen(4000, () => {
    console.log(`Server is running at port 4000`);
})