import footerlogo from "../assets/Footerlogo.png"


const Footer = () => {
  return (
    <>
<div className="bg-[#FE854E] py-14 mt-10 ">
<div className="flex justify-between flex-wrap items-start mx-10 max-md:justify-center ">
  <div className="child-1 max-sm:">
        <img className="h-[50px] max-[450px]:h-[45px]" src={footerlogo} alt="" />
        <p className="w-[290px] mt-2 max-[450px]:w-[80%] max-[450px]:text-sm ">We believe in the power of food to bring people together, to create memories, and to inspire.</p>
        
       <div className="flex gap-5 text-[#FDC55E] mt-3">
       <i className="fa-brands fa-facebook-f text-2xl "></i>
        <i className="fa-brands fa-instagram text-2xl"></i>
        <i className="fa-brands fa-twitter text-2xl"></i>
       </div>
    </div>


    <div className="child-2 ">
    <p className="text-xl font-bold text-[#87548C] max-[710px]:mt-5">Get in touch</p>
    <p className="w-[340px] mt-10 max-[450px]:w-[80%] max-[450px]:text-sm max-[450px]:mt-5">We look forward to hearing from you and creating memorable moments together!</p>
    <div className="flex gap-3 mt-5">
    <input type="text" placeholder="Email" className="outline-none w-[190px] rounded-full p-3 bg-[#bd633a] max-[450px]:w-[210px]"/>
    <button className="w-[100px] text-white text-sm rounded-full p-3 bg-[#87548C] max-[450px]:w-[80px] max-[450px]:text-[10px]"> Subscribe</button>
    </div>
    </div> 
  
   
  </div>

</div>
<div className="bg-[#bd633a] p-5 ">
        <p className="text-center">Copyright © 2024 Mess India</p>
    </div>
    </>
  )
}

export default Footer