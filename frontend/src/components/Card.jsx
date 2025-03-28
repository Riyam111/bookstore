import React from 'react'

function Card({item}) {
   
  return (
   <>
    <div className="  mt-4 my-3  p-3  ">
    <div className="card bg-base-100 w-88 shadow-xl p-3 hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white">
  <figure   >
    <img
      src={item.image}
      alt={item.name} />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-sm font-semibold">
      {item.name}
      <div className="badge badge-secondary text-xs">{item.category}</div>
    </h2>
    <p className="text-xs">{item.title}</p>
    <div className="card-actions flex justify-between text-xs mt-2">
      <div className="cursor-pointer px-2 py-1 rounded-full border-[1px] ">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[1px]   hover:bg-pink-500 hover:text-white">Buy now</div>
    </div>
  </div>
</div>
      </div>
   </>
  )
}

export default Card
