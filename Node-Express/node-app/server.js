const http = require('http');
const fs = require('fs')
const dotenv = require('dotenv')

dotenv.config({path: ".env"});

const server = http.createServer((req, res) => {
    // res.writeHead(200, 'Content-Type', 'text/plain')
    res.writeHead(200, 'Content-Type', 'text/html')
    fs.readFile("index.html", (err, data) => {
        if(err) throw err;
        res.end(data)
    })
    // res.end("Hello World")
})

server.listen(process.env.PORT, (err) => {
    if(err) throw err;
    console.log("Server running on http://localhost:5000");
})