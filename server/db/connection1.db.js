import mongoose from "mongoose";
const connectionWithMongoose = async()=>{
    try {
       const connectionInstance = await mongoose.connect('mongodb+srv://abhinavachar235_db_user:5t3hlFK0HFBC1GLr@question-bank.ahdss6o.mongodb.net/')
        console.log("connection success,host on",connectionInstance.connection.host)
    } catch (error) {
        console.log(error)
    }
    
}
export {connectionWithMongoose}