const os = require('os');

//find system os
console.log(os.arch());

console.log(os.platform());

console.log(os.release());

console.log(os.hostname());

console.log(os.homedir());

console.log(os.tmpdir());

console.log(os.uptime());

console.log(os.userInfo());
//Total memory
console.log("Total memory : "+os.totalmem());
//Free memory
console.log("Free memory : "+os.freemem());
