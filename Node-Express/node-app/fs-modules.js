const fs = require('fs')

//Reading file synchrnous
let data = fs.readFileSync("test.txt", "utf-8");
console.log(data);

let txt = "Good Night"

//Writing file synchrnous
fs.writeFileSync("test.txt", txt);

//Reading and Writing Asynchrnous

fs.readFile("test.txt", "utf-8", (err, data) => {
    if(err) throw err;
    console.log(data);
    let txt = "Good Morning"
    fs.writeFile("test.txt", txt, (err, data) => {
        if(err) throw err;
        console.log("File updated successfully");
    })
})