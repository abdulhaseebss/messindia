import HomeSec3Card from './HomeSec3Card'
import food from "../assets/Food.png";
import delivery from "../assets/delivery.png";
import fog from "../assets/spoon&fog.png";


const HomeSec3 = () => {

    const obj = [
        {
            image: food,
            head: "Quality Food",
            pera: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
        },
        {
            image: fog,
            head: "Healthy Food",
            pera: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
        },
        {
            image: delivery,
            head: "Fast Delivery",
            pera: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
        },
    ]

  return (
    <>
        <h5 className='text-center font-semibold text-xl text-[#87548C] mt-10'>Services</h5>
        <h3 className='text-center text-2xl font-bold mt-2'>Why Choose Our Favorite Food</h3>


    <div className='flex justify-center gap-8 mx-5 flex-wrap mb-24'>
        {
            obj.map((item)=>{
                return <HomeSec3Card image={item.image} head={item.head} pera={item.pera}/>

            })
        }
    
    </div>
    </>
  )
}

export default HomeSec3