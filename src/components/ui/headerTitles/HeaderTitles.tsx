import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";

interface PropsHeaderTitles {
  name?: string;
}

const HeaderTitles = ({ name }: PropsHeaderTitles) => {
  return (
    <div className="pt-8 pb-0 lg:pt-20 lg:pb-20 block lg:flex flex-col justify-center items-center bg-white  lg:bg-gradient-to-b from-gray-900 to-gray-600 mb-8 mt-16 shadow-none lg:shadow-sm rounded-b-md">
      <h1 className="md:text-6xl  tracking-tight-6 text-gray-800 lg:text-gray-50 text-2xl antialiased ">
        {name}
      </h1>
      <Breadcrumbs />
    </div>
  );
};

export default HeaderTitles;
