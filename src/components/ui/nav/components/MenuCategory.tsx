import { Link } from "next-view-transitions";
import { PropsMenuItems } from "../interfaces/nav";
import FlyoutMenus from "../../flyoutMenus/FlyoutMenus";

const MenuCategory = ({
  menuItems,
  currentPath,
  categoryProducts,
}: PropsMenuItems) => {
  return (
    <div className="flex items-center">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-5">
          {menuItems.map((item) => (
            <div className="flex items-center" key={item.id}>
              <Link
                href={item.path}
                className={`
             relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 w-full text-gray-800 
            ${
              currentPath === item.path &&
              " relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right hover:after:origin-bottom-left after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            }
          `}>
                <span>{item.title} </span>
              </Link>

              {item.subMenu && (
                <FlyoutMenus
                  categoryProducts={categoryProducts}
                  currentPath={currentPath}
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
