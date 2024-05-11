import ellipse from "../assets/EllipseLeft.png"
import gradient from "../assets/RectangleGradient.png"

const Home2Sec2Card = (props) => {
  return (
    <>
    <div className='flex items-center flex-wrap justify-center max-sm:shadow-xl max-sm:p-5 max-sm:rounded-3xl max-sm:w-[90%]'>
        <div className='flex justify-start items-center'>
            <img className='w-[140px]' src={ellipse} alt="" />
            <img className='w-[100px] ml-[-112px]' src={props.image} alt="" />
        </div>
        
        <div className='flex items-center max-sm:mt-8'>
            <img className='h-[100px] max-sm:h-[150px]  max-sm:w-[400px] max-sm:hidden' src={gradient} alt="" />
            <p className='ml-[-320px] max-sm:ml-0'>
                <h3 className='font-semibold max-sm:text-sm'>{props.head}</h3>
                <p className='w-[290px] mt-2 max-sm:text-sm max-sm:w-[230px]' >{props.pera}</p>
            </p>
        </div>

        <div className='h-[60px] w-[60px] flex justify-center max-sm:mt-8 bg-[#FDC55E] items-center rounded-full shadow-xl ml-[-30px] max-sm:ml-0 cursor-pointer hover:scale-110 transition-all hover:bg-[#e4b04f] active:scale-100'>
            <p className='text-4xl font-semibold text-white '>+</p>
        </div>
    </div>
    </>
  )
}

export default Home2Sec2Card