
import Image from "next/image";
import Rectangular36 from "@/app/assests/Rectangle 36.png"
import Rectangular38 from "@/app/assests/Rectangle 38.png"
import Rectangular40 from "@/app/assests/Rectangle 40.png"
import Rectangular43 from "@/app/assests/Rectangle 43.png"
import Rectangular39 from "@/app/assests/Rectangle 39.png"
import Rectangular37 from "@/app/assests/Rectangle 37.png"
import Rectangular41 from "@/app/assests/Rectangle 41.png"
import Rectangular44 from "@/app/assests/Rectangle 44.png"

const FurnitureGallery = () => {
  return (
    <div className="bg-white p-4 h-[780px] mx-auto overflow-hidden">
      {/* Header */}
      <h1 className="text-center text-4xl font-bold mb-6">
        Share your setup with <br />
        <span className="text-gray-800">#FuniroFurniture</span>
      </h1>

      
      <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[650px]">
        
        <div className="col-span-3 row-span-4">
          <Image className="w-[274px] h-[382px] object-cover rounded-md"
            src={Rectangular36}
            alt="Shelf"
            width={274}
            height={382}
            
          />
        </div>

        
        <div className="col-span-3 row-span-3">
          <Image
            src={Rectangular38}
            alt="Laptop Desk"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        
        <div className="col-span-3 row-span-6">
          <Image
            src={Rectangular40}
            alt="Dining Room"
            width={600}
            height={900}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        
        <div className="col-span-3 row-span-4">
          <Image
            src={Rectangular43}
            alt="Bedroom"
            width={400}
            height={600}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        
        <div className="col-span-3 row-span-2">
          <Image
            src={Rectangular39}
            alt="Chair"
            width={400}
            height={300}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        
        <div className="col-span-3 row-span-2">
          <Image
            src={Rectangular37}
            alt="Table Vase"
            width={400}
            height={600}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        
        <div className="col-span-3 row-span-2 grid grid-cols-2 gap-4">
          <div>
            <Image
              src={Rectangular41}
              alt="Frame"
              width={200}
              height={300}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <Image
              src={Rectangular44}
              alt="Kitchen"
              width={200}
              height={300}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;