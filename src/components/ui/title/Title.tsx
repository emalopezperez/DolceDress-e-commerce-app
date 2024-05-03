interface PropsTitle {
  name?: string;
  title?: string;
  subtitle?: string;
}

const Title = ({ name, subtitle, title }: PropsTitle) => {
  return (
    <div className="mt-2 ">
      <div className="mx-auto ">
        <div className="">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl antialiased">
            {name === "men"
              ? "Hombres"
              : name === "women"
              ? "Mujeres"
              : name === "accessories" && "Accesorios"}
          </h1>
          {subtitle && (
            <h3 className="mt-4 text-sm text-gray-500">{subtitle}</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Title;
