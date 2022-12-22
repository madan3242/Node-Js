const bcrypt = require('bcrypt')

let user = {
    username: "madan567",
    email: "hui99@hk.co",
    password: "76855667"
}

const salt = bcrypt.genSaltSync(10);

let newPassword = bcrypt.hashSync(user.password, salt);

console.log(newPassword);

user = {
    ...user,
    password: newPassword
}

console.log(user);

if(bcrypt.compareSync("76855667", user.password)){
    console.log("Password Match");
}
else{
    console.log("Incorrect password! Try again...");
}
