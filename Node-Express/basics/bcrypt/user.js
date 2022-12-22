const bcrypt = require('bcrypt');

let salt1 = bcrypt.genSaltSync(10);
let salt2 = bcrypt.genSaltSync(9);

let name1 = "madan";
let name2 = "madan";

console.log(bcrypt.hashSync(name1, salt1));
console.log(bcrypt.hashSync(name2, salt2));

if (bcrypt.hashSync(name1, salt1) === bcrypt.hashSync(name2, salt1)) {
    console.log("Match");
} else {
    console.log("Incorrect");
}