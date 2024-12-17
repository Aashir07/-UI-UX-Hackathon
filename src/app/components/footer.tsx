import Image from "next/image";
import footer from "@/app/assests/footer.png"

const Footer = () => {

return(

  <>
  
        <div className="w-full h-[505px] py-11 " >
            <div className="w-[1240.01px] h-[419px] mx-72 " >
                <Image src={footer} alt="" />
            </div>
        </div>
  
  </>

)


} 

export default Footer;