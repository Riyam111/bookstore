import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js"
const app=express();
app.use(express.json());
dotenv.config();
app.use(cors());
const port=process.env.PORT||4000;
const URI=process.env.MongoDbURI;
try{
mongoose.connect(URI,{
useNewUrlParser:true,
useUnifiedTopology:true,
});
console.log("connect to mogodb");

}
catch(error){
console.log("error",error);
}
//route definne
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.listen(port,()=>{
console.log(`example app on port${port}`)
});
