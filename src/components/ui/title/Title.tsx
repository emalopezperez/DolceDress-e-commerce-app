interface PropsTitle {
  name: string;
  subtitle?: string;
}

const Title = ({ name, subtitle }: PropsTitle) => {
  return (
    <div className="mt-4 mb-5">
      <div className="mx-auto ">
        <div className="">
          <h1 className="text-4xl font-semi-bold tracking-tight text-gray-900 sm:text-3xl antialiased">
            {name === "men" ? "Hombres" : name === "women" && "Mujeres"}
          </h1>
          {subtitle && (
            <h3 className="mt-2 text-sm text-gray-500">{subtitle}</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Title;
