const express = require("express");
const rootRouter=express.Router()
const {Content}=require("../db")
const {authMiddleware}=require("../middleware")

rootRouter.post("/content",authMiddleware,async(req,res)=>{
    const link = req.body.link;
    const type = req.body.type;
    await Content.create({
        title: req.body.title,
        link,
        tags:[],
        type,
        userId: req.userId
    })

    res.json({
        message: "Content added"
    })
})
rootRouter.get("/content",authMiddleware,async(req,res)=>{
    const contents=await Content.find({
        userId:req.userId
    })
    res.json({
        content:contents
    })
})


module.exports = rootRouter;

