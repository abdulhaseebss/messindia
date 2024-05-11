import React from 'react'
import Home2Sec2Card from './Home2Sec2Card'
import steak from "../assets/steak&egg.png"


const Home2Sec2 = () => {

    const obj = [
        {
            head: "Steak and Eggs",
            pera: "Grilled steak served with sunny-side-up eggs, roasted potatoes.",
            image: steak
        },
        {
            head: "Classic Bacon and Eggs",
            pera: "Served with toast, hash browns, or roasted tomatoes.",
            image: steak
        },

    ]
  return (
    <>
        <div className='mt-24 '>
            <h1 className='text-center font-bold text-5xl'>Monday</h1>

            <div>
                <h3 className='text-center font-semibold text-3xl mt-10'>Breakfast <span className='text-[#FDC55E]'>(8:00 to 9:00)</span></h3>

                <div className='flex justify-center gap-10 mt-10 flex-wrap' >
                    {obj.map((item)=>{
                         return <Home2Sec2Card head={item.head} pera={item.pera} image={item.image}/>
                         
                    })}                    
                </div>
            </div>

            <div>
                <h3 className='text-center font-semibold text-3xl mt-10'>Lunch <span className='text-[#FDC55E]'>(12:00 to 1:00)</span></h3>

                <div className='flex justify-center gap-10 mt-10 flex-wrap' >
                    {obj.map((item)=>{
                         return <Home2Sec2Card head={item.head} pera={item.pera} image={item.image}/>
                         
                    })}                    
                </div>
            </div>

            <div>
                <h3 className='text-center font-semibold text-3xl mt-10'>Dinner <span className='text-[#FDC55E]'>(7:00 to 8:00)</span></h3>

                <div className='flex justify-center gap-10 mt-10 flex-wrap' >
                    {obj.map((item)=>{
                         return <Home2Sec2Card head={item.head} pera={item.pera} image={item.image}/>
                         
                    })}                    
                </div>
            </div>

            <div className="flex justify-center mt-20">
        <div className=" w-[350px] mb-10 flex justify-center p-2 text-white rounded-xl cursor-pointer bg-[#FE854E]">
          <button>Confirm</button>
        </div>
      </div>

                    
    

        </div>
    </>
  )
}

export default Home2Sec2