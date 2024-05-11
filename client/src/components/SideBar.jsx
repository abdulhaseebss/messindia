import classNames from 'classnames'
import logo from '../assets/logo.png'
import { IoRadioButtonOn } from "react-icons/io5";
import { HiOutlineViewGrid } from "react-icons/hi";
import avatar from '../assets/avatar.png'

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
  return (
    <div className="bg-[#FE854E] w-80 flex flex-col">
      <div className="flex justify-center gap-2 px-1 py-3 bg-[#87548C]">
        <img className='h-16 max-xl:h-11 max-lg:h-9' src={logo} alt="" />
      </div>


      <div className="avatar flex flex-wrap p-4  max-xl:p-1 max-lg:py-4">
        <img className='h-11 max-lg:h-9' src={avatar} alt="" />
        <IoRadioButtonOn className='text-[#2ED47A] mt-5 ' />
        <div className="flex-col px-3">
          <p className='text-white max-lg:text-sm'>Anni</p>
          <p className='text-[#FED600] max-lg:text-sm'>Super Admin</p>
        </div>
        {/* <BsThreeDotsVertical className='text-[white] text-2xl flex'/> */}
      </div>

      <div className="py-2 flex flex-1 flex-col gap-0.5">
        <div className={classNames(linkClass, 'cursor-pointer hover:bg-[#87548C] text-white bg-[#E47340] py-4')}>
          <span className="text-2xl">
            <HiOutlineViewGrid />
          </span>
          Dashboard
        </div>
      </div>

      <div className="flex flex-col gap-0.5 pt-2">
        <div className={classNames(linkClass, 'cursor-pointer hover:bg-[#87548C] items-center font-bold text-white bg-[#E47340] py-4')}>
          Powered by Hashtag19 © 2024
        </div>
      </div>
    </div>
  )
}



