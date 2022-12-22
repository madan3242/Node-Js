const bcrypt = require('bcrypt');

let userPayment = {
    userId : "HCX44567",
    ccNo : "876954678845",
    cvv : "359"
}

const salt = bcrypt.genSaltSync(10);

let newCC = bcrypt.hashSync(userPayment.ccNo, salt);
let newCVV = bcrypt.hashSync(userPayment.cvv, salt);

userPayment = {
    ...userPayment, 
    ccNo: newCC,
    cvv: newCVV
}

console.log(userPayment);

if(bcrypt.compareSync("876954678845", userPayment.ccNo) && bcrypt.compareSync("359", userPayment.cvv)){
    console.log("Correct Match");
}
else{
    console.log("Incorrect Match");
}