import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";

interface PropsHeaderCategorys {
  name?: string;
}

const HeaderCategorys = ({ name }: PropsHeaderCategorys) => {
  return (
    <div className="pt-8 pb-0 lg:pt-20  lg:pb-20 block lg:flex flex-col justify-center items-center bg-white lg:bg-gradient-to-b from-gray-900 to-gray-600 mb-8 mt-16 shadow-none lg:shadow-sm rounded-b-md">
      <h1 className="md:text-6xl  tracking-tight-6 text-gray-800 lg:text-gray-50 text-2xl antialiased ">
        {name === "shirts"
          ? "Remeras"
          : name === "jackets"
          ? "Camperas"
          : name === "pants"
          ? "Pantalones"
          : name === "accessories"
          ? "Accessorios"
          : name}
      </h1>
      <Breadcrumbs />
    </div>
  );
};

export default HeaderCategorys;
