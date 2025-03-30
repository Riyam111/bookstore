import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import axios from 'axios';
function Freebook() {
  const [book,setbook]=useState([])
  useEffect(()=>{
    const getbook=async()=>{
      try {
        const res=await axios.get("http://localhost:4001/book");
      const data=res.data.filter((data)=>data.category==="Free");
        setbook(data);
      } catch (error) {
        console.log(error);
        
      }}
      getbook();
  },[])
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
    <div >
      <h1 className="text-xl  pb-2 font-semibold">Free offer</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam sunt excepturi amet dicta iure minima cumque laboriosam voluptatem explicabo, obcaecati suscipit laborum laudantium dolor adipisci ratione asperiores ipsum repellat officiis?</p>
    </div>
    <div>
    <Slider {...settings}>
      {
        book.map((item)=>(
         <Card item={item} key={item.id}/> 
        ))
      }
      </Slider>   
    </div>
    </div>
   </>
  )
}

export default Freebook
