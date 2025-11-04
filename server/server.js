import express, { response } from "express"
const app = express();
app.get('/',(req,res,next)=>{
    res.send("hello from abhinav");
})
app.listen(8000,()=>{
    console.log("server is lisening on 8000");
})