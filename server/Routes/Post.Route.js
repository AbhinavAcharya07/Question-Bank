
import express from "express";
import { test } from "../Controllers/Post.Controller.js";
const router = express.Router();


router.get("/helo",test);
export default router;