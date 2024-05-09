import { Link } from "next-view-transitions";

const Logo = () => {
  return (
    <Link href="/" className="">
      <h2 className=" md:text-4xl text-2xl bg-gradient-to-r from-teal-900 via-slate-700 to-teal-500 bg-clip-text text-transparent">
        DolceDress
      </h2>
    </Link>
  );
};

export default Logo;
