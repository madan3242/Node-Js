const os = require('os')

console.log(os.arch());

console.log(os.platform());

console.log(os.release());

console.log(os.hostname());

console.log(os.homedir());

console.log(os.tmpdir());

console.log(os.uptime());

console.log(os.userInfo());

console.log(`Total memory : ${os.totalmem()}`);

console.log(`Free memory : ${os.freemem()}`);