import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast"
function Signup() {
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname||"/";
    const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm();
          const onSubmit=async(data)=>{
            const userInfo = {
              fullname: data.fullname,
              email: data.email,
              password: data.password,
            };
          await  axios.post("http://localhost:4001/user/signup",userInfo).
            then((res)=>{
              console.log(res.data);
              if(res.data){
                toast.success("sign up succesfully");
              navigate(from,{replace:true});
              }
              localStorage.setItem("user",JSON.stringify(res.data.user))
            }).catch((err)=>{
             if(err.response){
              console.log(err);
              toast.error("error:"+err.response.data.message)
             }
              
            })};
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="w-[600px] p-8 rounded-2xl shadow-xl bg-white/30 backdrop-blur-lg border border-white/20">
        {/* Close Button */}
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        <Link to="/" className="absolute right-4 top-4 text-white text-xl hover:text-gray-300">
          ✕
        </Link>

        <h3 className="text-2xl font-bold text-white text-center">Create an Account</h3>

        {/* Name Input */}
        <div className="mt-6">
          <label className="text-white text-sm">Full Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-300 outline-none border border-white/30 focus:border-white focus:ring-1 focus:ring-white transition"
            {...register("fullname", { required: true })}
          />
          <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
        </div>

        {/* Email Input */}
        <div className="mt-4">
          <label className="text-white text-sm">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-300 outline-none border border-white/30 focus:border-white focus:ring-1 focus:ring-white transition"
            {...register("email", { required: true })}
          />
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
         {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
        </div>

        {/* Signup & Open Login Modal */}
        <div className="flex flex-col items-center mt-6">
          <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition">
            Sign Up
          </button>

          <p className="text-white mt-4">
            Already have an account?{" "}
            <span 
              onClick={() => document.getElementById("my_modal_3").showModal()} 
              className="underline text-white hover:text-gray-300 cursor-pointer"
            >
              Log in
            </span>
          </p>
        </div>
        </form>
      </div>

      {/* Login Modal */}
      <Login />
     
    </div>
  );
}

export default Signup;
