
import express from "express";
import  {createPost, getAllPosts,getSinglePost,deletePost, updatePost}  from "../Controllers/Post.Controller.js";
const router = express.Router();


router.post("/createpost",createPost);
router.get("/getallposts",getAllPosts);
router.get("/getsinglepost",getSinglePost);
router.delete("/deletepost",deletePost);
router.put("/updatepost",updatePost);
export default router;