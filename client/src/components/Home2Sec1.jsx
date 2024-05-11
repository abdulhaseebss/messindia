import logo from "../assets/main-logo.png";
import arrow from "../assets/arrow.png";
import dhaniya from "../assets/dhnaiya.png";
import circleImage from "../assets/home2Sec1.png"
import EllipseCircle from "../assets/EllipseCircle.png"


const Home2Sec1 = () => {
 
    




return (
    <>
  <div>
    {/* Logo div */}
    <div>
      <img className="w-[250px] mt-8 ml-14 max-sm:ml-2" src={logo} alt="logo" />
      {/* <img className="ml-[18rem] h-[130px] max-[900px]:hidden -mt-1" src={vector} alt="vector" /> */}
    </div>

    {/* text div */}
    <div className="parent flex justify-between mx-10 items-start flex-wrap mt-32">
      <div className="child-1 w-[40%] max-lg:w-[800px] max-lg:-mt-20 mx-5 transition-all">
        <div className="">
          <p className="text-5xl font-bold leading-[60px]">
          Mess Non Veg <br />
          (All Days)
          </p>
          <p className="text-xl mt-5">
            We are passionate about crafting delicious, nutritious, and
            unforgettable meals that cater to every palate and occasion.
          </p>
        </div>
      </div>

      {/* images div */}
      <div className="child-2 image-div flex flex-col items-center justify-center max-xl:mt-[200px]">
    

        {/* Pilate */}
        <div className='flex justify-center'>
            <img
              className="w-[400px] mr-24 mt-[-150px]  z-10 relative transition-all max-xl:mt-[-100px] max-sm:-mr-16 max-sm:mt-[-150px] max-[1020px]:ml-[250px] max-[900px]:ml-[200px] max-[850px]:ml-[150px] max-sm:ml-[-60px]"
              src={circleImage}
              alt="pilate"
            />
          </div>
          <div>
            <img className="relative mr-24 z-0 w-[450px] mt-[-425px] transition-all  max-[1020px]:ml-[250px] max-[900px]:hidden" src={EllipseCircle} alt="" />
          </div>

       

        <img className="absolute top-0 z-0 w-48 right-0 max-lg:w-36 max-md:w-32 transition-all" src={dhaniya} alt="" />

        <img className="absolute bottom-0 left-0 ml-14 h-16 cursor-pointer max-sm:ml-2 transition-all max-lg:hidden" src={arrow} alt="" />
      </div>
    </div>
  </div>
    </>
);
}

export default Home2Sec1