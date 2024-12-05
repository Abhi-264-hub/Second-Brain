require("dotenv").config();
const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
const signupRouter = require("./routes/signup");
const signinRouter=require("./routes/signin")
const contetRouter=require("./routes/content")
const shareRouter=require("./routes/share")
app.use("/api/v1", signupRouter);
app.use("/api/v1", signinRouter);
app.use("/api/v1", contetRouter);
app.use("/api/v1/brain",shareRouter)
app.listen(3000);