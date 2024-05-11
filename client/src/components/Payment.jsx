import { useState } from "react";
import logo from "../assets/main-logo.png";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("creditCard");

  return (
    <div className="bg-neutral-100 h-[100%] w-[100%] ">
      <img className="w-[220px] pt-2 max-sm: ml-2" src={logo} alt="logo" />

      
      <div className="text-center ">
        <p className="text-[#7F4A84] text-4xl font-semibold ">Payment Method</p>
        <p className="text-2xl mt-4">Customer Information</p>
      </div>
     

      <div className=" first-div flex justify-center mt-8">

        <form className="flex-col ">
          <div className="input-div flex gap-5 mt-2 flex-wrap">
          <div className="max-md:w-full flex flex-col justify-center items-center">
              <p>Name</p>
              <input
                placeholder="Enter your name"
                className=" border-2 mt-3 rounded-lg p-1 transition-all w-[230px] max-md:w-[90%]"
              />
            </div>
            <div className="max-md:w-full flex flex-col justify-center items-center">
              <p>Phone Number</p>
              <input
                placeholder="Enter your name"
                className=" border-2 mt-3 rounded-lg p-1 transition-all w-[230px] max-md:w-[90%]"
              />
            </div>
            <div className="max-md:w-full flex flex-col justify-center items-center">
              <p>Email address</p>
              <input
                placeholder="Enter your name"
                className=" border-2 mt-3 rounded-lg p-1 transition-all w-[230px] max-md:w-[90%]"
              />
            </div>
          </div>

         
        </form>
      </div>

      <div className="flex justify-center">
      <div className="mt-10 w-[740px] max-lg:w-[90%] transition-all">
            <p>Payment</p>
            <div className=" rounded-xl p-5 mt-3 text-center bg-white border-2">
              <p>Your Total Payment</p>
              <p className="font-bold">Rs 28,156</p>
              <p>Pay May 1st, at 10:30</p>
            </div>
          </div>
      </div>

      {/* Payment */}

      <div className="second-div flex justify-center">
        <div className="flex flex-col items-start space-y-4 mt-5 w-[740px] max-lg:w-[90%] transition-all justify-center">
      <p className=" text-2xl">Select Payment Method</p>
          <div className="bg-white border-2 p-2 rounded-lg w-full">
            <input
              type="radio"
              id="creditCard"
              value="creditCard"
              checked={selectedOption === "creditCard"}
              onChange={() => setSelectedOption("creditCard")}
              className="mr-2 "
            />
            <label htmlFor="creditCard">Credit Card</label>
          </div>
          <div className="bg-white border-2  p-2 rounded-lg w-full">
            <input
              type="radio"
              id="paypal"
              value="paypal"
              checked={selectedOption === "paypal"}
              onChange={() => setSelectedOption("paypal")}
              className="mr-2"
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <div className="bg-white border-2 p-2 rounded-lg w-full">
            <input
              type="radio"
              id="stripe"
              value="stripe"
              checked={selectedOption === "stripe"}
              onChange={() => setSelectedOption("stripe")}
              className="mr-2 "
            />
            <label htmlFor="stripe" className="cursor-pointer">Stripe</label>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center mt-10 pb-16">
        <div className=" w-[350px] flex justify-center p-2 text-white rounded-xl cursor-pointer bg-[#FE854E]">
          <button>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
