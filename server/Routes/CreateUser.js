const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
require("../schema/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken')

const user = mongoose.model("user");

const jwtSecret="wejfloawiu3o2iur98u2893ru2,ruu2983ru,p23ru,81io4tjoi"


router.post(
    "/createuser",
    body("email").isEmail(),
    body("name").isLength({ min: 2 }),
    body("password", "incorrect password").isLength({ min: 4 }), //incorrect pwd message for validator
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.send({ errors: result.array() });
        }
        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password,salt);
        let email = req.body.email;
        try {
            let oldUser = await user.findOne({ email });
            if(oldUser){
                return res.json({ errors: "Already exists" });
            }
            await user.create({
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,
                password: secPassword,
            });

            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);

router.post(
    "/loginuser",
    body("email").isEmail(),
    body("password", "incorrect password").isLength({ min: 4 }),
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.send({ errors: result.array() });
        }

        let email = req.body.email;
        try {
            let userData = await user.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Wrong Credentials" });
            }
            const pwdCompare=bcrypt.compare(req.body.password,userData.password)
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Wrong Credentials" });
            }
            const data = {
                user:{
                    id:userData.id,
                }
            }
            const authToken = jwt.sign(data,jwtSecret)
            return res.json({ success: true ,authToken:authToken });
        } catch (error) {
            return res.json({ success: false });
        }
    }
);

module.exports = router;
