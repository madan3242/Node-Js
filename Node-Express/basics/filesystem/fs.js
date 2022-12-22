const fs = require('fs');

//Reading the file synchrnous
let data = fs.readFileSync("test.txt", "utf-8")
console.log(data);

//Reading a file asynchrnous

fs.readFile("test.txt", "utf-8" ,(err, newdata) => {
    // console.log(newdata);
    //Writing file asynchronously
    fs.writeFile("one.txt", newdata, (err) => {
        if(err) throw err;
        console.log("Writing file successfully");
    })
})