
import Image from "next/image"
import shop from "@/app/assests/Shop.png"
import Rectanglar63 from "@/app/assests/Rectangular63.png"

const Shop = () => {

  return(
      <>
      <div className="w-full bg-slate-800 h-[350px]">
        <div className="h-[316]" >
          <Image src={shop} alt="" />
        </div>
      </div>
      </>

  )
}

export default Shop;