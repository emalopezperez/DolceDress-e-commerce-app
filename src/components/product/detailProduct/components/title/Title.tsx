interface PropsTitle {
  name?: string;
  subtitle?: string;
}

const Title = ({ name, subtitle }: PropsTitle) => {
  return (
    <div className="">
      <h1 className="md:text-4xl  tracking-tight-4 text-2xl antialiased ">
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
      {subtitle && (
        <h3 className=" mt-1 md:mt-2 text-sm text-gray-400">{subtitle}</h3>
      )}
    </div>
  );
};

export default Title;
