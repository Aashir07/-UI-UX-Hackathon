import Image from "next/image";
import logo1 from "@/app/assests/logo1.png"
import logo2 from "@/app/assests/logo2.png"
import logo3 from "@/app/assests/logo3.png"
import logo4 from "@/app/assests/logo4.png"
import logo5 from "@/app/assests/logo5.png"

const Navbar = () => {

return(
      <>

        
          <div className="w-full h-[100px] pt-[29px] bg-white " >
            <div className="w-[1850px] h-[41px]  ml-[54px]   flex bg-white " >
                <Image className=""  src={logo1} alt="" />

                <div className="ml-[505px] mt-[9px]  " >
                <ul className="flex text-black gap-10 " >
                  <li>Home</li>
                  <li>Shop</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
                </div>

                <div className=" ml-[520px] mt-[9px]  " >
                <ul className="flex gap-8 " >
                  <li> <Image className="" src={logo2} alt="" /> </li>
                  <li> <Image className="" src={logo3} alt="" /> </li>
                  <li> <Image className="" src={logo4} alt="" /> </li>
                  <li> <Image className="" src={logo5} alt="" /> </li>                  
                </ul>
                </div>

            </div>
          </div>
        
        </>
)

}

export default Navbar;