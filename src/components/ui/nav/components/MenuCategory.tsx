import Link from "next/link";
import { PropsMenuItems } from "../interfaces/nav";
import FlyoutMenus from "../../flyoutMenus/FlyoutMenus";

const MenuCategory = ({
  menuItems,
  currentPath,
  color,
  categoryProducts,
}: PropsMenuItems) => {
  return (
    <div className="flex items-center">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {menuItems.map((item) => (
            <div className="flex items-center" key={item.id}>
              <Link
                href={item.path}
                className={`
            w-full px-2 inline-flex space-x-2 items-center  py-1 transition ease-linear duration-150  text-sm hover:bg-gray-100 hover:text-[#373f39] ${
              currentPath === "/" &&
              color === false &&
              currentPath !== item.path
                ? "text-white"
                : "text-gray-700 "
            }
            ${currentPath === item.path && "bg-gray-100 text-black "}
          `}>
                <span>{item.title} </span>
              </Link>

              {item.subMenu && (
                <FlyoutMenus
                  categoryProducts={categoryProducts}
                  currentPath={currentPath}
                  color={color}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
