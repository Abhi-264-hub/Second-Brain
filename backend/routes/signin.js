const express = require("express");
const rootRouter=express.Router()
const zod=require("zod")
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const signupSchema=require("../schema")
rootRouter.post("/signin",async(req,res)=>{
    const { success } = signupSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Error in Inputs"
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username,
        password:req.body.password
    })

    if (existingUser) {
        const token = jwt.sign({
            userId: existingUser._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }
    res.status(403).json({
        message: "Wrong Email/Password"
    })
    })
    
module.exports = rootRouter;