import Image from "next/image";
import collection1 from "@/app/assests/collection1.jpg"

const Collection = () => {

return(

  <>
    <div className="w-full h-[718.83px] ml-[250px] " >
      <div className="w-[1440px] h-[718.83px] " >
      <Image src={collection1} alt="" />
      </div>
    </div>
  </>

)

}

export default Collection;