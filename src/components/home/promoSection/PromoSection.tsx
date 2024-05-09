import Image from "next/image";
import { placeholderImage } from "@/helpers/placeholderImage";

const PromoSection = () => {
  return (
    <div className=" w-full mt-2 grid grid-cols-1 lg:grid-rows-1 grid-rows-2 lg:grid-cols-2 gap-2 lg:gap-4 mb-6 ">
      <div className=" grid col-span-1  grid-rows-2 gap-2 lg:gap-4">
        <div className="cols-span-2 row-span-1 w-full relative">
          <div className="w-full h-full">
            <Image
              alt="Moda"
              src="https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-01.jpg?v=1679034110&width=940"
              className="w-full h-full object-cover shadow-md rounded-lg"
              fill
              placeholder="blur"
              blurDataURL={placeholderImage}
            />
          </div>

          <div className=" absolute top-0 md:top-16 right-0 md:w-[33%] w-[38%] h-[58%] ">
            <div className="flex flex-col gap-6 h-full">
              <h2 className="text-gray-600 font-bold">Descuentos de 50%</h2>
              <h3 className="md:text-4xl text-xl">Summer Collection</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:gap-4">
          <div className=" w-full relative">
            <Image
              alt="Moda"
              src="https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-03.jpg?v=1672923495"
              className="w-full h-full object-cover shadow-md rounded-lg"
              fill
              placeholder="blur"
              blurDataURL={placeholderImage}
            />

            <div className=" absolute top-5 md:top-16 left-3 md:left-5 w-[70%] h-[75%] ">
              <div className="flex flex-col gap-6 h-full">
                <h2 className="text-gray-600 font-bold">Fashion</h2>
                <h3 className="md:text-4xl text-xl">Mens Collection</h3>
              </div>
            </div>
          </div>
          <div className=" w-full h-full">
            <Image
              alt="Moda"
              src="https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-04.jpg?v=1660279624&width=535"
              className="w-full h-full object-cover shadow-md rounded-lg"
              width={400}
              height={400}
              placeholder="blur"
              blurDataURL={placeholderImage}
            />
          </div>
        </div>
      </div>

      <div className="relative col-span-1  row-span-1">
        <div className="w-full h-full">
          <Image
            alt="Moda"
            src="https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-02.jpg?v=1679034111&width=940"
            className="w-full h-full object-cover shadow-md rounded-lg"
            fill
            placeholder="blur"
            blurDataURL={placeholderImage}
          />
        </div>

        <div className=" absolute top-5 md:top-[30%] right-0 md:w-[33%] w-[38%] h-[68%] ">
          <div className="flex flex-col gap-6 h-full">
            <h2 className="text-gray-600 font-bold">Descuentos de 50%</h2>
            <h3 className="md:text-4xl text-xl">Women Collection</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
