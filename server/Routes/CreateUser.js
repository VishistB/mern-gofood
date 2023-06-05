const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
require('../schema/User')
const { body, validationResult } = require('express-validator');

const user=mongoose.model("user")

router.post('/createuser',
body('email').isEmail(),
body('password').isLength({min:2}),
body('password','incorrect password').isLength({min:4}), //incorrect pwd message for validator
async(req,res)=>{
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
    }

    
    try {
        await user.create({
            name: req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:req.body.password
        })
        
        res.json({success:true});

    } catch (error) {
        console.log(error);
        res.json({success:false});
    }
})

module.exports=router;