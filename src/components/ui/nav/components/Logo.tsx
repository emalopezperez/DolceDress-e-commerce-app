import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="">
      <h2 className="text-3xl bg-gradient-to-r from-pink-500 to-teal-300 bg-clip-text text-transparent">
        DolceDress
      </h2>
    </Link>
  );
};

export default Logo;
