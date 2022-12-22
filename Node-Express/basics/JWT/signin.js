const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

let user = {
    username: "madan3487",
    password: "yUrtq112"
}

let salt = bcrypt.genSaltSync(10);

let newPass = bcrypt.hashSync(user.password, salt)


user = {
    ...user,
    password: newPass
}

// console.log(user);

let payload = {
    id: user.username
}

let skey = "7687"

// let token = jwt.sign(user, skey, (err, data) => {
//     if(err) throw err
//     console.log(data);
// } )

let token = jwt.sign(user, skey, {expiresIn: 60*60})

console.log(token);

// console.log(jwt.decode(token));

let decoded = jwt.decode(token)

console.log(decoded.password);

if(bcrypt.compareSync("yUrtq112", decoded.password)){
    console.log("Password match");
}
else{
    console.log("Password incorrect");
}


jwt.verify(token, skey, (err, data) => {
    if(err) throw err
    console.log(data);
})
