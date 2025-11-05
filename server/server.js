import express from "express"

import CreatePost from "./Routes/Post.Route.js"
const app = express();
app.use('/api',CreatePost);
// app.get("/",(req,res,next)=>{
//     res.send("hello from abhinav");
// });

app.listen(8001,()=>{
    console.log("server is lisening on 8001");
});