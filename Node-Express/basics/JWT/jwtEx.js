const jwt = require('jsonwebtoken')

let user = {
    id : 1099,
    name : "Madan",
    email : "madan@go.co"
}

let payload = {
    id : user.id,
    email : user.email
}
let skey = '2034';
let token = jwt.sign(payload, skey, {expiresIn: 60000})

console.log(token);

console.log(jwt.decode(token));

console.log(jwt.verify(token, skey));