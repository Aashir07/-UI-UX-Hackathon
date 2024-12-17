import Image from "next/image";
import Syltherine from "@/app/assests/Syltherine.png"
import lolito from "@/app/assests/lolito.png"
import respira from "@/app/assests/respira.png"
import grifo from "@/app/assests/grifo.png"
import muggo from "@/app/assests/muggo.png"
import Pingky from "@/app/assests/Pingky.png"
import potty from "@/app/assests/potty.png"

const Products = () => {

return(

<>

  <div className="w-full h-[1084px] bg-white "  >

    <h1 className="ml-[810px] text-3xl font-bold text-[#3A3A3A] " >Our Products</h1>
    <div className="w-[1236px] h-[446px] gap-32 mt-4  ml-72 " >
      <ul className="flex justify-around " >
        
        <li className="bg-[#F4F5F7]" > <Image src={Syltherine} alt=""/> <h5 className="pl-3 pt-2  text-[#3A3A3A] font-semibold " >Syltherine</h5> <p className="pl-3 text-[#898989] " >Stylish Cafe Chair</p> <h5 className="pl-3 text-[#3A3A3A] font-semibold " >Rp 2.500.000</h5> </li>
        
        <li className="bg-[#F4F5F7]" > <Image src={lolito} alt=""  /> <h5 className="pl-3 pt-2 text-[#3A3A3A] font-semibold " >Lolito</h5> <p className="pl-3 text-[#898989] " >Stylish Cafe Chair</p> <h5 className="pl-3 text-[#3A3A3A] font-semibold " >Rp 2.500.000</h5>  </li>
        
        <li className="bg-[#F4F5F7]" > <Image src={respira} alt=""  /> <h5 className="pl-3 pt-2 text-[#3A3A3A] font-semibold " >Respira</h5> <p className="pl-3 text-[#898989] " >Stylish Cafe Chair</p> <h5 className="pl-3 text-[#3A3A3A] font-semibold " >Rp 500.000</h5>  </li>
      </ul>
    </div>

    <div className="w-[1236px] h-[446px] gap-32 mt-4  ml-72" >
    <ul className="flex justify-between " >
        
        <li className="bg-[#F4F5F7]" > <Image src={grifo} alt=""/> <h5 className="pl-3 pt-2  text-[#3A3A3A] font-semibold " >Grifo</h5> <p className="pl-3 text-[#898989] " >Stylish Cafe Chair</p> <h5 className="pl-3 text-[#3A3A3A] font-semibold " >Rp 1.500.000</h5> </li>
        
        <li className="bg-[#F4F5F7]" > <Image src={muggo} alt=""  /> <h5 className="pl-3 pt-2 text-[#3A3A3A] font-semibold " >Lolito</h5> <p className="pl-3 text-[#898989] " >Stylish Cafe Chair</p> <h5 className="pl-3 text-[#3A3A3A] font-semibold " >Rp 150.000</h5>  </li>
        
        <li className="bg-[#F4F5F7]" > <Image src={Pingky} alt=""  /> <h5 className="pl-3 pt-2 text-[#3A3A3A] font-semibold " >Respira</h5> <p className="pl-3 text-[#898989] " >Stylish Cafe Chair</p> <h5 className="pl-3 text-[#3A3A3A] font-semibold " >Rp 7.000.000</h5>  </li>

        <li className="bg-[#F4F5F7]" > <Image src={potty} alt=""  /> <h5 className="pl-3 pt-2 text-[#3A3A3A] font-semibold " >Respira</h5> <p className="pl-3 text-[#898989] " >Stylish Cafe Chair</p> <h5 className="pl-3 text-[#3A3A3A] font-semibold " >Rp 500.000</h5>  </li>
      </ul>
    </div>

                <button className=" w-[245px] h-[48px] text-[#B88E2F] justify-center border border-[#B88E2F] ml-[778px]  " >Show More</button>

  </div>
</>

)

}

export default Products;