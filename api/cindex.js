import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authr from "./routes/auth.js"
import hotel from "./routes/hotels.js"
const app = express()
dotenv.config()
const connect = async()=>{
    try {
  await mongoose.connect(process.env.cloudmongo);
  console.log("connected to cloud cluster")
} catch (error) {
 throw error;
}
};
app.get('/users',(req,res)=>{
    res.send("this is first get res from server side")
});
app.use(express.json())
app.use("/auth/register",authr)
//app.use("/api/auth",hotel)
app.listen(6600,()=>{
    connect()
    console.log(" application is listening the request comin on the localhost")
});