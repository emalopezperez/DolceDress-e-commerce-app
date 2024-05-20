interface PropsTitles {
  name?: string;
}

const Titles = ({ name }: PropsTitles) => {
  return (
    <div className="pt-8 pb-0 lg:pt-16  lg:pb-12 block lg:flex flex-col justify-center items-center bg-white  mb-4 mt-16 ">
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
    </div>
  );
};

export default Titles;
