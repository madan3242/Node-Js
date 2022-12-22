const http = require('http')
const path = require('path')
const dotenv = require('dotenv')
const fs = require('fs')

const filePath = path.join(__dirname, "config", "config.env")
const file = path.join(__dirname, "Web", "index.html")

dotenv.config({ path: filePath})



const server = http.createServer((req, res) => {
    res.writeHead(200, 'Content-Type', 'text/html')
    // res.end("<h1>Hello World!</h1>")
    // res.end(fs.readFileSync(file, 'utf-8'))
    fs.readFile(file, 'utf-8', (err, data) => {
        if(err) throw err
        res.end(data)
    })
})

server.listen(process.env.PORT, process.env.HOST_NAME, (err) => {
    if(err) throw err
    console.log(`Server running on http://${process.env.HOST_NAME}:${process.env.PORT}`);
})