import postModel from "../Models/post.model.js";


    
const createPost = async(req,res,next)=>{
    // console.log(req.body);
    try {
    const {topic,question,answer} = req.body;
    const responseData = await postModel.create({
        topic,
        question,
        answer
    })
    res.send({
        success : true,
        responseData
    });
}
 catch (error) {
    console.log(error);
}
}
const getAllPosts = async(req,res,next)=>{
    // console.log(req.body);
    // const {topic,question,answer} = req.body;
    try{
    const responseData = await postModel.find();
    res.send({
        success : true,
        responseData
    });
}
    catch (error) {
    console.log(error);
}
}
const getSinglePost = async(req,res,next)=>{
    // console.log(req.body);
    // const {topic,question,answer} = req.body;
    try{
    const {postId} = req.query;
    const responseData = await postModel.findById(postId);
    res.send({
        success : true,
        responseData
    });
}
 catch (error) {
    console.log(error);
}
}
const deletePost = async(req,res,next)=>{
    // console.log(req.body);
    // const {topic,question,answer} = req.body;
    try{
    const {postId} = req.body;
    const responseData = await postModel.findByIdAndDelete(postId);
    res.send({
        success : true,
        responseData
    });
}
 catch (error) {
    console.log(error);
}
}
const updatePost = async(req,res,next)=>{
    // console.log(req.body);
    // const {topic,question,answer} = req.body;
    try{
    const {postId,topic,question,answer} = req.body;
    const responseData = await postModel.findByIdAndUpdate(postId,{
        topic,
        question,
        answer,
    });
    res.send({
        success : true,
        responseData
    });
}
 catch (error) {
    console.log(error);
}
}
export{
    createPost,getAllPosts,getSinglePost,deletePost,updatePost
};