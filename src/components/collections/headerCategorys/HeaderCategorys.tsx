import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";

interface PropsHeaderCategorys {
  name?: string;
}

const HeaderCategorys = ({ name }: PropsHeaderCategorys) => {
  return (
    <div className="pt-8 pb-0 lg:pt-12  lg:pb-12 block lg:flex flex-col justify-center items-center bg-white  mb-8 mt-16 ">
      <h1 className="md:text-6xl  tracking-tight-6 text-gray-800  text-2xl antialiased ">
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

      <div className="pt-4">
        <Breadcrumbs />
      </div>
    </div>
  );
};

export default HeaderCategorys;
