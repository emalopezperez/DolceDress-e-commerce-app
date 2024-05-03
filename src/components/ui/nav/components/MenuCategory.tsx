import Link from "next/link";
import { PropsMenuItems } from "../interfaces/nav";
import FlyoutMenus from "../../flyoutMenus/FlyoutMenus";

const MenuCategory = ({
  menuItems,
  currentPath,
  color,
  subMenuCategorys,
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
            w-full px-2 inline-flex space-x-2 items-center  py-1 hover:bg-white/5 transition ease-linear duration-150  text-sm  ${
              currentPath === "/" &&
              color === false &&
              currentPath !== item.path
                ? "text-white"
                : "text-gray-700"
            }
            ${
              currentPath === item.path &&
              "bg-gray-100 text-black hover:bg-gray-100"
            }
          `}>
                <span>{item.title} </span>
              </Link>

              {item.subMenu && (
                <FlyoutMenus
                  subMenuCategorys={subMenuCategorys}
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
