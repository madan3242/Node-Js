const bcrypt = require('bcrypt');

let userDetails = {
    name: "Madan",
    email : "madangowda@gmail.com",
    password : "yUi9886#BgwwX67"
};
// let salt = bcrypt.genSalt(10);
let newPassword = bcrypt.hashSync(userDetails.password, 10); 
                                                        //Salt

console.log(newPassword);

userDetails = { ...userDetails, password : newPassword};

console.log(userDetails);

console.log(bcrypt.compareSync("yUi9886#BgwwX67", userDetails.password));

if(bcrypt.compareSync("yUi9886#BgwwX67", userDetails.password)){
    console.log("Password Match");
}
else{
    console.log("Incorrect Password");
}