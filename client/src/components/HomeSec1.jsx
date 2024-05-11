import React, { useState } from "react";

import logo from "../assets/main-logo.png";
import vector from "../assets/Vector2.png";
import arrow from "../assets/arrow.png";
import dhaniya from "../assets/dhnaiya.png";
import Pilate from "../assets/home3.png";
import ellipse from "../assets/Ellipse.png";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/HomePilate.png";
import home4 from "../assets/home4.png";

const HomeSec1 = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  console.log(hoveredImage);

  return (
    <div>
      {/* Logo div */}
      <div>
        <img className="w-[250px] mt-8 ml-14 max-sm:ml-2" src={logo} alt="logo" />
        <img className="ml-[18rem] h-[130px] max-[900px]:hidden -mt-1" src={vector} alt="vector" />
      </div>

      {/* text div */}
      <div className="parent flex justify-around items-start flex-wrap">
        <div className="child-1 w-[40%] max-lg:w-[800px] max-lg:mt-10 mx-5 transition-all">
          <div className="">
            <p className="text-5xl font-bold leading-[60px]">
              Delicious <span className="text-[#753D7A]">Food</span> Is
              <span className="text-[#753D7A]"> Waiting</span> For
              <span className="text-[#FDC55E]"> You</span>
            </p>
            <p className="text-xl mt-5">
              We're passionate about crafting delicious, nutritious, and
              unforgettable meals that cater to every palate and occasion.
            </p>
          </div>
        </div>

        {/* images div */}
        <div className="child-2 image-div flex flex-col items-center justify-center max-lg:mt-[200px]">
          <div className="flex justify-end"></div>

          {/* Pilate */}
          <div>
            <img
              className="w-[450px]  max-sm:mr-6 mt-[-160px] max-sm:w-[320px] z-10 relative transition-all max-lg:mr-10"
              src={hoveredImage ? hoveredImage : Pilate}
              alt="pilate"
            />
          </div>

          {/* 4 dishes */}
          <div>
            <img className="relative z-0 w-[450px] bottom-[-95px] top-[-400px] max-sm:w-[300px] transition-all max-sm:top-[-220px]" src={ellipse} alt="" />
          </div>
          <div className="flex z-10 top-[-500px] relative max-sm:top-[-275px] justify-evenly">
            <img
              className="h-[120px] -mt-24 max-sm:h-[70px] cursor-pointer"
              src={home1}
              alt="logo"
              onMouseEnter={() => setHoveredImage(home1)}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <img
              className="h-[145px] max-sm:h-[90px] max-sm:-mt-3 cursor-pointer"
              src={home2}
              alt="logo"
              onMouseEnter={() => setHoveredImage(home2)}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <img
              className="h-[120px] mt-5 ml-10 max-sm:h-[70px] max-sm:mt-0 cursor-pointer"
              src={home3}
              alt="logo"
              onMouseEnter={() => setHoveredImage(home3)}
              onMouseLeave={() => setHoveredImage(null)}
            />
            <img
              className="h-[120px] -mt-24 max-sm:h-[70px] cursor-pointer"
              src={home4}
              alt="logo"
              onMouseEnter={() => setHoveredImage(home4)}
              onMouseLeave={() => setHoveredImage(null)}
            />
          </div>

          <img className="absolute top-0 z-0 w-48 right-0 max-lg:w-36 max-md:w-32 transition-all" src={dhaniya} alt="" />

          <img className="absolute bottom-0 left-0 ml-14 h-16 cursor-pointer max-sm:ml-2 transition-all" src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSec1;
