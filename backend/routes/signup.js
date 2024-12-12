const express = require("express");
const rootRouter=express.Router()
const zod=require("zod")
const { User } = require("../db");
const signupSchema=require("../schema")

rootRouter.post("/signup",async(req,res)=>{
    const { success } = signupSchema.safeParse(req.body)
    if (!success) {
        return res.status(400).json({
            message: "Error in Inputs"
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser)
        return res.status(403).json({
            message: " User already exists with this username"
        })
try{
  await User.create({
    username:req.body.username,
    password:req.body.password
  })  
  return res.status(200).json({
    message: " User Successfully signed up"
})

}
catch(error){
console.log(error)
    return res.status(500).json({
        message: "Server Error"
    })
}  
    })
module.exports = rootRouter;