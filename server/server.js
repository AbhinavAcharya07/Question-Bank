import express from "express"

import CreatePost from "./Routes/Post.Route.js"
import { connectionWithMongoose } from "./db/connection1.db.js";
const app = express();
connectionWithMongoose();
app.use('/api',CreatePost);


app.listen(8001,()=>{
    console.log("server is lisening on 8001");
});