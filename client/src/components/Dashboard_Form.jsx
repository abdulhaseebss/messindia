import React from 'react'
import form1 from '../assets/form1.png'
import form2 from '../assets/form2.png'

const Dashboard_Form = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 flex-1 m-11 overflow-hidden max-[1500px]:w-[1000px] max-[1024px]:w-[500px] max-xl:w-[800px] max-md:w-[350px] max-sm:w-[200px]">
       <h1 className='text-[#1A1C1E] text-2xl font-semibold border-b border-gray-100 m-11 pb-11 max-sm:text-base'>Mess Non Veg (All Days)</h1>
       {/* form1 */}
       <h1 className='text-[#1A1C1E] text-2xl font-semibold px-11 py-2 max-sm:text-base max-sm:py-0'>User Details</h1>
       <div className="ml-11 max-2xl:m-8">
       <img src={form1} alt="" className='py-4'/>
       <form action="" method="post">
            <input className='border rounded-xl w-[43rem] max-2xl:w-full border-gray h-14 text-sm px-8 mr-2 mb-5' type="text" placeholder='First Name' required />
            <input className='border rounded-xl w-[43rem] max-2xl:w-full border-gray h-14 text-sm px-8 mr-2 mb-5' type="text" placeholder='Last Name' required />
            <input className='border rounded-xl w-[43rem] max-2xl:w-full border-gray h-14 text-sm px-8 mr-2 mb-5' type="text" placeholder='Address' required />
            <input className='border rounded-xl w-[43rem] max-2xl:w-full border-gray h-14 text-sm px-8 mr-2 mb-5' type="number" placeholder='Telephone Number' required />
       </form>
      </div>
       {/* form2 */}
       <h1 className='text-[#1A1C1E] text-2xl font-semibold border-b border-gray-100 m-11 pb-11'>Breakfast (8:00 to 9:00)</h1>
       <div className="ml-11 max-2xl:m-8">
       <img src={form2} alt="" className='py-4'/>
       <form action="" method="post">
            <input className='border rounded-xl w-[43rem] max-2xl:w-full border-gray h-14 text-sm px-8 mr-2 mb-5' type="text" placeholder='Option-1' required />
            <input className='border rounded-xl w-[43rem] max-2xl:w-full border-gray h-14 text-sm px-8 mr-2 mb-5' type="text" placeholder='Option-2' required />
       </form>
      </div>
      {/* form3 */}
      <h1 className='text-[#1A1C1E] text-2xl font-semibold border-b border-gray-100 m-11 pb-11'>Lunch (12:00 to 1:00)</h1>
       <div className="ml-11 max-2xl:m-8">
       <img src={form2} alt="" className='py-4'/>
       <form action="" method="post">
            <input className='border rounded-xl w-[43rem] max-2xl:w-full border-gray h-14 text-sm px-8 mr-2 mb-5' type="text" placeholder='Option-1' required />
            <input className='border rounded-xl w-[43rem] max-2xl:w-full border-gray h-14 text-sm px-8 mr-2 mb-5' type="text" placeholder='Option-2' required />
       </form>
      </div>
      {/* form4 */}
      <h1 className='text-[#1A1C1E] text-2xl font-semibold border-b border-gray-100 m-11 pb-11'>Dinner (7:00 to 8:00)</h1>
       <div className="ml-11 max-2xl:m-8">
       <img src={form2} alt="" className='py-4'/>
       <form action="" method="post">
            <input className='border rounded-xl w-[43rem] max-2xl:w-full border-gray h-14 text-sm px-8 mr-2 mb-5' type="text" placeholder='Option-1' required />
            <input className='border rounded-xl w-[43rem] max-2xl:w-full border-gray h-14 text-sm px-8 mr-2 mb-5' type="text" placeholder='Option-2' required />
       </form>
      </div>
      {/* button */}
      <div className='flex justify-end'>
            <button className='h-11 w-56 bg-[#FE854E] rounded-md text-white m-11'>Back</button>
      </div>


    </div>
  )
}

export default Dashboard_Form