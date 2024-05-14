import Breadcrumbs from "@/components/ui/breadcrumbs/Breadcrumbs";

interface PropsHeaderTitles {
  name?: string;
}

const HeaderTitles = ({ name }: PropsHeaderTitles) => {
  return (
    <div className="pt-8 pb-0 lg:pt-16 lg:pb-16 block lg:flex flex-col justify-center items-center bg-white  lg:bg-gray-900 mb-8 mt-16">
      <h1 className="md:text-6xl  tracking-tight-6 text-gray-700 lg:text-white text-3xl antialiased ">
        {name}
      </h1>
      <Breadcrumbs />
    </div>
  );
};

export default HeaderTitles;
