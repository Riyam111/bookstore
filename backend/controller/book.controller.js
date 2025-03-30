
import book from "../model/book.model.js";
export const getbook=async(req,res)=>{
    try{
const Book=await book.find()
res.status(200).json(Book)
    }
    catch(error){
console.log("error",error);
res.status(500).json(error);
    }
};