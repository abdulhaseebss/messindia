import HomeSec2Card from "./HomeSec2Card";
import img from "../assets/Section2-1.png";

import homeSec1 from "../assets/homeSec1.png"
import homeSec2 from "../assets/homeSec2.png"
import homeSec3 from "../assets/homeSec3.png"
import homeSec4 from "../assets/homeSec4.png"
import homeSec5 from "../assets/homeSec5.png"
 

const HomeSec2 = () => {

const obj = [
  {
    image: homeSec1,
    para: 'Mess Luxury Plan',
    price: "4500₹"
  },

  {
    image: homeSec2,
    para: 'Mess Veg Plan',
    price: "2800₹"
  },

  {
    image: homeSec3,
    para: 'Mess Non Veg Plan',
    price: "2900₹"
  },

  {
    image: homeSec4,
    para: 'Mess Cheap Plan',
    price: "1800₹"
  },


  {
    image: homeSec5,
    para: 'Mess Non Veg (All Days)',
    price: "3600"
  },

]
  return (

    <div>
      <div className="-mt-96 max-sm:-mt-56">
        <p className="text-4xl font-bold text-center">
          Today <span className="text-[#87548C]">special</span> offers
        </p>
        <img className="h-32" src={img} alt=" " />


     <div className="flex justify-center">
     <div className="flex flex-wrap w-[80%] justify-center gap-14">
      {
        obj.map((item)=>{
         return <HomeSec2Card image={item.image} para={item.para} price={item.price}/>

        })
       }
      </div>
     </div>
      </div>
    </div>
  );
};

export default HomeSec2;
