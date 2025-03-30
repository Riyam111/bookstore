import mongoose from "mongoose";
const bookschema=mongoose.Schema({
   name:String,
   price:Number,
   category:String,
   Image:String,
   title:String ,
});
const book=mongoose.model("book",bookschema);
export default book;