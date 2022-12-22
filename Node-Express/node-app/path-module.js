const path = require('path')
const fs = require('fs')

let filepath = path.join(__dirname, "folder", "subfolder", "testFile.txt")

fs.readFileSync(filepath, "utf-8")

console.log(fs.readFileSync(filepath, "utf-8"));