interface PropsTitle {
  name?: string;
  subtitle?: string;
}

const Title = ({ name, subtitle }: PropsTitle) => {
  return (
    <div className="pt-10 pb-10 block lg:flex flex-col justify-center items-center bg-slate-50 pl-4 lg:pl-0 rounded-md shadow-sm">
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
        <h3 className=" pt-1 md:pt-4 text-sm text-gray-400">{subtitle}</h3>
      )}
    </div>
  );
};

export default Title;
