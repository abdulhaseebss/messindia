import Ellipse from "../assets/Ellipse57.png";
// import sec2img from "../assets/sec2-1.png";

const HomeSec2Card = (props) => {
  return (
    <div>
    
    <div className="flex flex-col items-center mt-36">
    <div className="w-[280px] flex-col h-[280px] rounded-xl bg-gradient-to-b from-white to-[#ffcdd1] flex justify-center items-center">
          <p className="text-center text-2xl font-semibold">{props.para}</p>
          <p  className="text-xl font-bold mt-10 text-[#87548C]">{props.price}</p>
         
            </div>
        
  
          <div className="">
           <img className=" h-[250px] -mt-[29rem]" src={Ellipse} alt=" " />
            <img className=" h-[200px] -mt-[14rem] items-center ml-6" src={props.image} alt=" " />
          </div>
          
          <div className="w-12 h-12 -mt-7  bg-yellow-400 rounded-full flex justify-center items-center">
              <i className="fa-solid fa-arrow-right text-xl text-white font-semibold"></i>
            </div>
        </div>
    </div>
  )
}

export default HomeSec2Card