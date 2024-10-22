import mongoose from "mongoose";

const dbConnection = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/ecomerece")
        console.log(`data base connected successfully`.bgGreen)
    }
    catch (error) {
        console.log(`error connecting to database `.bgRed)
    }
}
export default dbConnection;
