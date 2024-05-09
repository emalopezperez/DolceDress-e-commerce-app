interface PropsTitle {
  name?: string;
  subtitle?: string;
}

const Title = ({ name, subtitle }: PropsTitle) => {
  return (
    <div className="">
      <h1 className="md:text-4xl font-bold tracking-tight-4 text-gray-900 text-2xl antialiased">
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
        <h3 className=" mt-1 md:mt-2 text-sm text-gray-500">{subtitle}</h3>
      )}
    </div>
  );
};

export default Title;
