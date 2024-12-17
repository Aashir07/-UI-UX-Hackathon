import Image from "next/image";
import InnerPeace from "@/app/assests/Inner Peace.png"
import Rectangular25 from "@/app/assests/Rectangle 25.png"
import Rectangular26 from "@/app/assests/Rectangle 26.png"

const Inspiration = () => {

return(

    <>

      <div className="w-full h-[670px]   pl-[295px] flex " >
        
        <div className="w-[422px] h-[151px] mt-52  align-middle " >
          <h2 className="text-3xl font-extrabold mb-2 " >50+ Beautiful Rooms Inspiration</h2> 
          <p className="text-[#616161]" >Our designer already made alot of beautiful<br></br> prototipe of rooms that inspire you</p> 
          <br></br>
          <button className="w-[186px] h-[48px] bg-[#B88E2F] text-white " >Explore More</button>
        </div>
          
        <div className="w-[442px] h-[582px] py-10 pl-9 " >
        <Image  src={InnerPeace} alt=""/> 
        </div>
        <div className="w-[392px] h-[486px] py-10 pl-9 " >
        <Image src={Rectangular25} alt="" />
        </div>
        <div className="w-[345px] h-[486px] pl-9  " >
        <Image className="py-10 pl- "  src={Rectangular26} alt="" />
        </div>
      
      
      </div>

    </>

)

}

export default Inspiration;