const http = require('http')

const dotenv = require('dotenv')
const path = require('path')

let filePath = path.join(__dirname, "config", "config.env")

dotenv.config({ path: filePath })

// const PORT = 5000;
// const HOST_NAME = '127.0.0.1';

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    res.writeHead(200, 'Content-Type', 'text/plain')
    res.end("Hello World");
});

server.listen(process.env.PORT, process.env.HOST_NAME, (err) => {
    if(err) throw err;
    console.log(`Ruunning on http://${process.env.HOST_NAME}:${process.env.PORT}`);
})