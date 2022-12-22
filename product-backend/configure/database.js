const mongoose = require('mongoose');

const { MONGODB_LOCAL_URL } = process.env;

exports.connect = () => {
    mongoose.connect(MONGODB_LOCAL_URL, {
        useUnifiedTopology : true,
        useNewUrlParser : true,
    }).then(() => {
        console.log(`CONNECTED TO MONGODB SUCCESSFULLY`);
    }).catch((error) => {
        console.log(`DATABASE CONNECTION FAILED`);
        console.log(error);
        process.exit(1);
    })
}