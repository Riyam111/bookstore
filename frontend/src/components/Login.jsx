import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios  from 'axios';
import toast from 'react-hot-toast'
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
        const onSubmit=async(data)=>{
          const userInfo = {

            email: data.email,
            password: data.password,
          };
        await  axios.post("http://localhost:4001/user/login",userInfo).
          then((res)=>{
            console.log(res.data);
            if(res.data){
              toast.success("logged in succesfully")
              document.getElementById("my_modal_3").close();
              setTimeout(()=>{
               
                window.location.reload();
                localStorage.setItem("user",JSON.stringify(res.data.user))
              },1000);
           
            }
            
          }).catch((err)=>{
           if(err.response){
            console.log(err);
            toast.error("error:"+err.response.data.message);
            setTimeout(()=>{},2000);
           }
            
          });
      };
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-8">
        {/* Close Button */}
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <Link  to="/" className="absolute right-4 top-4 text-white text-xl hover:text-gray-300"
          onClick={()=>document.getElementById("my_modal_3").close()}
          >✕</Link>
        

        <h3 className="text-2xl font-bold text-white text-center">Welcome Back!</h3>

        {/* Email Input */}
        <div className="mt-6">
          <label className="text-white text-sm">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-300 outline-none border border-white/30 focus:border-white focus:ring-1 focus:ring-white transition"
            {...register("email", { required: true })}
          />
           <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
        </div>

        {/* Password Input */}
        <div className="mt-4">
          <label className="text-white text-sm">Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-300 outline-none border border-white/30 focus:border-white focus:ring-1 focus:ring-white transition"
            {...register("password", { required: true })}
          />
          <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
        </div>

        {/* Login & Signup Link */}
        <div className="flex flex-col items-center mt-6">
          <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition">
            Log In
          </button>

          <p className="text-white mt-4">
            Not registered?{" "}
            <Link to="/signup" className="underline text-white hover:text-gray-300 cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
        </form>
      </div>
    </dialog>
  );
};

export default Login;
