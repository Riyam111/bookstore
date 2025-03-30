import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from "axios"
function Course() {
  const [book,setbook]=useState([])
  useEffect(()=>{
    const getbook=async()=>{
      try {
        const res=await axios.get("http://localhost:4001/book");
      setbook(res.data);
      } catch (error) {
        console.log(error);
        
      }}
      getbook();
  },[])
  
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
    <div className='mt-26 items-center justify-center text-center'>
        
    <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here!</span></h1>
    <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eaque necessitatibus eveniet modi illum, hic laudantium, at similique possimus quo nostrum sed enim quis iste adipisci. Deserunt, aliquam. Inventore, laudantium.</p>
    <Link to="/">
    <button className= 'bg-pink-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration-300  '>Back</button>
    </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-3 '>
        {book.map((item)=>(
          <Card key={item.id} item={item}/> 
        ))
           
        }
    </div>
   </div>
   </>
  )
}

export default Course
