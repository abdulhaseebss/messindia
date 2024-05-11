import React, { useState } from 'react';
import gradient from "../../assets/gradient.png"
import bike from "../../assets/bike.png"
import logo from "../../assets/main-logo.png"
import fruit from "../../assets/8.png"
import bowl from "../../assets/bowl.png"
import girl from "../../assets/girl-with-mobile.png"
import line from "../../assets/line.png"
import google from "../../assets/google.png"
import facebook from "../../assets/Facebook.png"
import apple from "../../assets/apple.png"
import { Link } from 'react-router-dom';


const SignUp = () => {

   
    
  return (
    <>
      <div className="flex h-[100vh] w-screen">
        <div className="h-full w-[50%] main-div absolute">
          <img className="h-12 mt-5 ml-5 max-[600px]:h-8" src={logo} alt="" />
          <img className="h-[200px] ml-[20vw] mt-[10vh] max-[700px]:hidden" src={bike} alt="" />
          <img className="h-[100px] absolute bottom-16 ml-10 max-[700px]:hidden" src={bowl} alt="" />
        </div>

        <div className="h-full w-[50%] absolute right-0 flex flex-col justify-center items-end">
          <img className="h-[100px] mr-16 max-[700px]:hidden" src={fruit} alt="" />
          <img className="h-[400px] max-[700px]:hidden" src={girl} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center absolute inset-0 max-[700px]:mt-8 max-[600px]:mt-10 transition-all mx-5">
        <div className="relative bg-white shadow-2xl h-auto w-[400px] rounded-3xl p-8">
          <h2 className="text-[#7F4A84] font-semibold text-3xl">Sign Up</h2>
          <p className="text-[11px] mt-3">Create your account to manage your orders and payments effortlessly.</p>

          <form className="w-full mt-8">
            
            <div className="flex gap-4">
            <div>
              <h2 className="text-sm font-semibold">Username</h2>
              <input className="border-2 w-full mt-2 p-1 rounded-lg outline-none focus:border-[#FE854E] text-sm px-2 transition-all"  type="text" placeholder="Enter your Email"/>
            </div>
            
            <div>
              <h2 className="text-sm font-semibold">Contact</h2>
              <input className="border-2 w-full mt-2 p-1 rounded-lg outline-none focus:border-[#FE854E] text-sm px-2 transition-all"  type="Number" placeholder="Contact Number"/>
            </div>
            </div>

            <h2 className="text-sm font-semibold mt-6">Address</h2>
              <input className="border-2 w-full mt-2 p-1 rounded-lg outline-none focus:border-[#FE854E] text-sm px-2 transition-all"  type="text" placeholder="Address"/>

              <div className="flex gap-4 mt-6">
            <div>
              <h2 className="text-sm font-semibold">Hostel name</h2>
              <input className="border-2 w-full mt-2 p-1 rounded-lg outline-none focus:border-[#FE854E] text-sm px-2 transition-all"  type="text" placeholder="Hostel name"/>
            </div>
            
            <div>
              <h2 className="text-sm font-semibold">Password</h2>
              <input className="border-2 w-full mt-2 p-1 rounded-lg outline-none focus:border-[#FE854E] text-sm px-2 transition-all"  type="Password" placeholder="Password"/>
            </div>
            </div>
           
            <button className="text-center bg-[#FE854E] w-full mt-8 p-2 text-white font-semibold rounded-xl">Sign In</button>
          </form>


      

          
            <p className="text-sm text-center mt-6">Have an Account ? <span className="text-[#B87514] cursor-pointer"><Link to={"/"}>Sign In</Link></span></p>
         
        </div>
      </div>
    </>
  )
}

export default SignUp
