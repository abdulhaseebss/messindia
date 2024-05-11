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


const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = (e) => {
      e.preventDefault();
      console.log("Username:", username);
      console.log("Password:", password);
      // You can add your sign-in logic here
    };

   
    
  return (

    <>
      <div className="flex h-[100vh] w-screen">
        <div className="h-full w-[50%] main-div absolute">
          <img className="h-12 mt-5 ml-5 max-[600px]:h-8" src={logo} alt="" />
          <img className="h-[200px] ml-[20vw] mt-[10vh] max-[700px]:hidden" src={bike} alt="" />
          <img className="h-[100px] absolute bottom-16 ml-10 max-[700px]:hidden" src={fruit} alt="" />
        </div>

        <div className="h-full w-[50%] absolute right-0 flex flex-col justify-center items-end">
          <img className="h-[100px] mr-16 max-[700px]:hidden" src={bowl} alt="" />
          <img className="h-[400px] max-[700px]:hidden" src={girl} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center absolute inset-0 max-[700px]:mt-8 max-[600px]:mt-10 transition-all mx-5">
        <div className="relative bg-white shadow-2xl h-auto w-[400px] rounded-3xl p-8">
          <h2 className="text-[#7F4A84] font-semibold text-3xl">Sign In</h2>
          <p className="text-[11px] mt-3">Please enter your credentials to access your account.</p>

          <form className="w-full mt-8" onSubmit={handleSignIn}>
            <h2 className="text-sm font-semibold">Username</h2>
            <input className="border-2 w-full mt-2 p-1 rounded-lg outline-none focus:border-[#FE854E] text-sm px-2 transition-all"  type="email" placeholder="Enter your Email" value={username}
              onChange={(e) => setUsername(e.target.value)}/>
            <h2 className="text-sm mt-6 font-semibold">Password</h2>
            <input className="border-2 w-full mt-2 p-1 rounded-lg outline-none focus:border-[#FE854E] text-sm px-2 transition-all"   type="Password" placeholder="Enter your Password"  value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            <h5 className="text-right text-[12px] mt-2 text-[#E60000] cursor-pointer font-semibold">Forgot Password?</h5>
            <button className="text-center bg-[#FE854E] w-full mt-4 p-2 text-white font-semibold rounded-xl">Sign In</button>
          </form>

          <div className="flex justify-evenly items-center mt-3">
            <img className="w-[30%]" src={line} alt="" />
            <h2 className="font-semibold text-[#ABABAB]">OR</h2>
            <img className="w-[30%]" src={line} alt="" />
          </div>

          <div className="flex justify-evenly mt-3 flex-wrap">

            <button className="flex  items-center gap-3 bg-[#FFF4E3] p-3 px-5 rounded-lg max-[600px]:w-full max-[600px]:justify-center">
            <img className="w-5" src={google} alt="" />
            <h3 className="text-[#B87514] text-sm">Sign in with Google</h3>
            </button>

            <div className="flex justify-center max-[600px]:w-full gap-2 max-[600px]:mt-2">

            <button className="flex  items-center gap-3 bg-[#FFF4E3] p-3 rounded-lg max-[600px]:w-[50%] max-[600px]:justify-center">
            <img className="w-5" src={facebook} alt="" />
            <h3 className="text-[#0c87ee] text-sm hidden max-[600px]:block" >Facebook</h3>
            </button>

            <button className="flex  items-center gap-3 bg-[#FFF4E3] p-3 rounded-lg max-[600px]:w-[50%] max-[600px]:justify-center">
            <img className="w-5" src={apple} alt="" />
            <h3 className="text-[#283544] text-sm hidden max-[600px]:block" >Apple</h3>

            </button>
            </div>

          </div>

          
            <p className="text-sm text-center mt-6">Have an Account ? <span className="text-[#B87514] cursor-pointer"><Link to={"signUp"}>Sign Up</Link></span></p>
         
        </div>
      </div>
    </>
  )
}

export default SignIn
