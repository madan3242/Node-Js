const express = require("express");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const passportConfig = require("./passport/passport");
const passport = require("passport");
const cookieSession = require('cookie-session')

const app = express();

//connect with mongodb
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/passport', ()=> {
    console.log(`DB CONNECTED`);
});

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //1 day
    keys: ['thisistokenkey'], //dotenv
}))

app.use(passport.initialize());
app.use(passport.session());

const isLoggedIn = (req, res, next) => {
    if (!req.user) {
        res.redirect("/auth/login");
    }
    next();
}

app.set('view engine', 'ejs');

app.use("/auth", auth);

app.get("/", isLoggedIn, (req, res) => {
    res.render("home");
})

app.listen(4000, ()=>{
    console.log(`Server is running http://localhost:4000`);
})