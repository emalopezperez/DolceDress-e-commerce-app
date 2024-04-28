import Link from "next/link";

const PromoSection = () => {
  return (
    <section className=" w-full  py-4">
      <div className="  w-full h-full  flex justify-between gap-4 flex-col lg:flex-row">
        <div className=" w-full flex flex-col gap-4 h-[100%] ">
          <div className=" w-full relative">
            <img
              src="https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-01.jpg?v=1679034110&width=940"
              className="w-full h-full object-cover"
            />

            <div className=" absolute top-5 md:top-16 right-0 md:w-[33%] w-[38%] h-[58%] ">
              <div className="flex flex-col gap-6 h-full">
                <h5 className="text-gray-600 font-bold">Descuentos de 50%</h5>
                <h3 className="md:text-4xl text-2xl">Summer Collection</h3>
                <Link
                  href="/category/men"
                  className="hidden md:flex w-[75%] px-2 py-3 text-md font-semibold leading-6 text-black ring-1 ring-gray-600 hover:ring-white/20">
                  Shop collection{" "}
                  <span aria-hidden="true" className="text-xl pl-1">
                    {" "}
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row  gap-4 h-full lg:h-[46%]">
            <div className=" w-full relative">
              <img
                src="https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-03.jpg?v=1672923495"
                className="w-full h-full object-cover"
              />

              <div className=" absolute top-8 md:top-16 left-3 md:left-5 w-[70%] h-[75%] ">
                <div className="flex flex-col gap-6 h-full">
                  <h5 className="text-gray-600 font-bold">Fashion</h5>
                  <h3 className="md:text-4xl text-2xl">Mens Collection</h3>
                  <Link
                    href="/category/men"
                    className="md:flex hidden w-[75%] px-2 py-3 text-md font-semibold leading-6 text-black ring-1 ring-gray-600 hover:ring-white/20">
                    Shop collection{" "}
                    <span aria-hidden="true" className="text-xl pl-1">
                      {" "}
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" w-full ">
              <img
                src="https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-04.jpg?v=1660279624&width=535"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className=" w-full lg:h-full h-[50%] relative">
          <img
            src="https://hongotheme.myshopify.com/cdn/shop/files/demo-home-fashion-02.jpg?v=1679034111&width=940"
            className="w-full h-full object-cover"
          />

          <div className=" absolute top-5 md:top-[30%] right-0 md:w-[33%] w-[38%] h-[68%] ">
            <div className="flex flex-col gap-6 h-full">
              <h5 className="text-gray-600 font-bold">Descuentos de 50%</h5>
              <h3 className="md:text-4xl text-2xl">Women Collection</h3>
              <Link
                href="/category/women"
                className="hidden md:flex w-[75%] px-2 py-3 text-md font-semibold leading-6 text-black ring-1 ring-gray-600 hover:ring-white/20">
                Shop collection{" "}
                <span aria-hidden="true" className="text-xl pl-1">
                  {" "}
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
