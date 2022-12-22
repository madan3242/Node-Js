const path = require('path');
const fs = require('fs');

let p = path.join(__dirname, "folder", "subfolder", "one.txt")
// console.log(p);
let text = "Hello World"
fs.writeFile(p, text, (err) => {
    if(err) throw err
    console.log("Inserted successfully");
})