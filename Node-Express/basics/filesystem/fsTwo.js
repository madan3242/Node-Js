const fs = require('fs');

// fs.copyFileSync("one.txt", "two.txt");

// fs.copyFile("one.txt", "three.txt", (err)=> {
//     if(err) throw err
// })

fs.readFile("one.txt", "utf-8", (err, data) => {
    if(err) throw err
    fs.writeFile("four.txt", data, (err) => {
        if(err) throw err
        console.log("Data inserted successfully");
    })

})