require("dotenv").config();
const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
const signupRouter = require("./routes/signup");
const signinRouter=require("./routes/signin")
app.use("/api/v1", signupRouter);
app.use("/api/v1", signinRouter);
app.listen(3000);