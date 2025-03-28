import React from 'react'
import banner from '../../public/Banner.jpg'
function Banner() {
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
    <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
     <div className="space-y-12">
     <h1 className="text-4xl font-bold">Hello,Welcome here to read <span className="text-pink-400">something new!!!</span></h1>
     <p  className="text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, consequatur, odit laudantium magni mollitia libero earum rerum voluptatem quod, inventore quidem. Consectetur commodi, amet in nam a illum sapiente reiciendis.
     </p>
     <label className="flex items-center gap-2 p-2 border rounded-md dark:bg-slate-900 dark:border-gray-700 dark:text-white">
  <svg
    className="h-[1em] opacity-50 dark:stroke-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input
    type="email"
    className="bg-transparent dark:bg-slate-900 dark:text-white outline-none px-2"
    placeholder="mail@site.com"
    required
  />
</label>

     </div>
     <button className=" mt-5 btn btn-secondary">Secondary</button>
    
     </div>
    <div className=" order-1 md:order-2 w-full md:w-1/2">
    <img src={banner}  className="w-90 h-92" alt=""/>
    </div>
   </div>
   </>
  )
}

export default Banner
