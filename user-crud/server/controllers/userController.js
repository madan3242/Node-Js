import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/*
    API URL: http://127.0.0.1:4000/user/create
    Method: POST
    Require Field: name, email, password
    Access Type: public
*/

export const createUser = async (req, res) => {
    try {
        let {name, email, password} = req.body;
        let user = await User.findOne({ email: email});
        if(user) {
            return res.status(401).json({
                message: `User already exist`
            })
        }
        let salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        user = new User({ name, email, password });

        user = await user.save();

        user.password = undefined;

        res.status(200).json({
            result: "Success",
            user,
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

/*
    API URL: http://127.0.0.1:4000/user/login
    Method: POST
    Require Field: email, password
    Access Type: public
*/

export const userLogin = async (req, res) => {
    try {
        let { email, password } = req.body;

        let user = await User.findOne({ email: email });
        if(!user) {
            return res.status(401).json({
                message: `User not registered`
            })
        }

        //verify password
        let flag = await bcrypt.compare(password, user.password)
        if (!flag) {
            return res.status(401).json({ status: "Password does't match"})
        }

        //if user is exists and password matches then genrate JWT token
        //palyload - what we are generating token ?

        let payload = {
            user: {
                id: user.id,
                name: user.name,
            }
        }

        //generate JWT token
        jwt.sign(payload, process.env.JWT_SECRET_KEY, (err, token) => {
            if(err) throw err;
            res.status(200).json({ status: "Login Successful", token: token });
        })

    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

/*
    API URL: http://127.0.0.1:4000/user/id
    Method: PUT
    Require Field: no-fields
    Access Type: public
*/

export const updateUser = async (req, res) => {
    try {
        let userId = req.params.id;
        let {name, email, password} = req.body;

        let user = await User.findById(userId);
        
        if(!user) {
            return res.status(401).json({
                message: `User does't exist`
            })
        }
        let salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        user = { name, email, password };
        
        user = await User.findByIdAndUpdate(userId, { $set: user }, {new: true})

        user.password = undefined;

        res.status(200).json({
            result: "Success",
            user,
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

/*
    API URL: http://127.0.0.1:4000/user/id
    Method: DELETE
    Require Field: no-fields
    Access Type: public
*/

export const deleteUser = async (req, res) => {
    try {
        let userId = req.params.id;

        let user = await User.findById(userId);
        
        if(!user) {
            return res.status(401).json({
                message: `User does't exist`
            })
        }

        user = await User.findByIdAndDelete(userId)

        res.status(200).json({
            result: "Success",
            user,
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}