import dotenv from "dotenv"
dotenv.config({
    path:"./.env",
})
import express from "express"

import CreatePost from "./Routes/Post.Route.js"
import { connectionWithMongoose } from "./db/connection1.db.js";
import cors from "cors";
const app = express();
connectionWithMongoose();
app.use(cors({
    origin:["http://localhost:5174"],
}));
app.use(express.json());
app.use('/api',CreatePost);


app.listen(8001,()=>{
    console.log("server is lisening on 8001");
});