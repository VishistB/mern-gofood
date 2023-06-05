const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
require('../schema/User')

const user=mongoose.model("user")

router.post('/createuser',async(req,resp)=>{
    try {
        await user.create({
            name: req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:req.body.password
        })
        
        resp.json({success:true});

    } catch (error) {
        console.log(error);
        resp.json({success:false});
    }
})

module.exports=router;