const dotenv = require('dotenv')
const path = require('path')

let filePath = path.join(__dirname, "config", "config.env")
console.log(filePath);

dotenv.config({ path: filePath})

console.log(process.env.PORT);
console.log(process.env.HOST_NAME);