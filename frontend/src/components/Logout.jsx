import React from 'react'
import { useAuth } from '../context/Authprovider'
import toast from 'react-hot-toast'

function Logout() {
    const [authuser,setauthuser]=useAuth()
const handlelogout=()=>{
    try {
        setauthuser({
         ...authuser,
         user:null   
        })
        localStorage.removeItem("user")
        toast.success("logout successfully")
       
        setTimeout(()=>{
            window.location.reload(); 
        },3000);
       
    } catch (error) {
      toast.error("error:"+error)  
      setTimeout(()=>{},2000);
    }
};
  return (
    <div>
      <button className='rounded-md px-3 py-2 bg-red-500 text-white'
       onClick={handlelogout}>
        logout
        </button>
   
    </div>
  )
}

export default Logout
