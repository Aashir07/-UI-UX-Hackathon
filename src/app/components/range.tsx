import Image from "next/image";
import dining from "@/app/assests/Dining.png"
import living from "@/app/assests/living.png"
import bedroom from "@/app/assests/bedroom.png"

const Range = () => {

  return(

    <>
    <div className="w-full h-[718.83px] mt-7 bg-white " >
      
      <div className="w-[559px] h-[76.71px] mt-10 ml-[615px] bg-white " >
        <h1 className="font-bold pl-44 text-2xl " > Browse the Range</h1>
        <p className="px-16" >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      
      
        <ul className="flex mt-10 mx-80 gap-5" >
          <li> <Image src={dining} alt="" /> <br></br> <h1 className="pl-36 font-medium " >Dining</h1> </li>
          <li> <Image src={living} alt="" /> <br></br> <h1 className="pl-36 font-medium " >Living</h1>  </li>
          <li> <Image src={bedroom} alt=""/> <br></br> <h1 className="pl-36 font-medium " >Bedroom</h1>   </li>
        </ul>
      </div>

    
    </>

  )

}

export default Range;