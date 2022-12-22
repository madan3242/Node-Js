const jwt = require('jsonwebtoken')

let user = {
    email: "matrix@go.co",
    password: "YuijU12Ti"
}

let payload = {
    id: user.email,
}

let skey = "123456"

let token = jwt.sign(payload, skey, { expiresIn: 60*60})
console.log(token);

// let decoded = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1hdHJpeEBnbW8uY28iLCJpYXQiOjE2NjkwMjg4NTgsImV4cCI6MTY2OTAzMjQ1OH0.b7OkSorK3M-PEnaW0t8G89z9_CPrRWRKYgru3Aj5cDw");
// console.log(decoded);

// How to verify token
jwt.verify(token, skey, (err, data) => {
    if(err) throw err
    console.log(data);
})