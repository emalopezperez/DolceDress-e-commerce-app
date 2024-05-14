interface PropsTitle {
  name?: string;
  subtitle?: string;
}

const Title = ({ name, subtitle }: PropsTitle) => {
  return (
    <div className="pt-6 pb-6 block lg:flex flex-col justify-center items-center">
      <h1 className="md:text-4xl font-bold tracking-tight-4  text-2xl antialiased text-gray-800">
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
