import Link from "next/link";
import { PropsMenuItems } from "../interfaces/nav";

const MenuCategory = ({ menuItems, currentPath, color }: PropsMenuItems) => {
  return (
    <div className="flex items-center">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className={`
            w-full px-2 inline-flex space-x-2 items-center  py-3 hover:bg-white/5 transition ease-linear duration-150  text-sm ${
              currentPath === "/" &&
              color === false &&
              currentPath !== item.path
                ? "text-white"
                : "text-gray-700"
            }
            ${currentPath === item.path && "bg-gray-100 text-black "}
          `}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
