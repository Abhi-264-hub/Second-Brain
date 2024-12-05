const express=require("express")
const shareRouter=express.Router()
const randomFunc=require("./random")
const { authMiddleware } = require("../middleware")
const {Link,User,Content}=require("../db")

shareRouter.post("/share",authMiddleware,async (req,res)=>{
   const share=req.body.share
   if(share){
    const existingLink=await Link.findOne({
        userId:req.userId
    })
    if(existingLink){
        res.json({
            hash:existingLink.hash
        })
        return 
    }
    const hash=randomFunc(10)
    await Link.create({
        hash,
        userId:req.userId
    })
    res.json({
        hash
    })
   }
   else{
    await Link.deleteOne({
        userId: req.userId
    });

    res.json({
        message: "Removed link"
    })

   }

})
shareRouter.get("/:shareLink",async(req,res)=>{      //This Link is shareable.So there is no authentication,anybody can see it.
    const hash = req.params.shareLink;

    const link = await Link.findOne({
        hash
    });

    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        return;
    }
    // userId
    const content = await Content.find({
        userId: link.userId
    })
    const user = await User.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }

    res.json({
        username: user.username,
        content: content
    })
})



module.exports=shareRouter
