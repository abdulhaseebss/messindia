import React from "react";

const HomeSec3Card = (props) => {
  return (
    <>
      <div className="bg-white p-5 h-[400px] max-md:w-[90%] transition-all w-[380px] border-2 mt-9 flex flex-col justify-center items-center gap-8 rounded-3xl hover:border-0 hover:shadow-2xl cursor-pointer">
        <div className="bg-[#F5DDC4] p-3 rounded-full flex justify-center items-center">
          <img className="h-7" src={props.image} alt="" />
        </div>

        <h3 className="text-center font-bold">{props.head}</h3>
        <p className="text-[#686868] text-center">
          {props.pera}
        </p>
      </div>
    </>
  );
};

export default HomeSec3Card;
