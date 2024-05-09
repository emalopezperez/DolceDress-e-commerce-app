import { useState } from "react";
import { PropsMenuMobil } from "../interfaces/nav";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const MenuCategoryMobil = ({
  menuItems,
  currentPath,
  categoryProducts,
  setOpenMenuMobil,
}: PropsMenuMobil) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  return (
    <div className="space-y-1  pb-3  bg-100">
      {menuItems.map((item) => (
        <div key={item.title}>
          {item.subMenu ? (
            <div className="">
              <div className="flex gap-3 items-center border-b border-gray-400 pl-1 pr-1 hover:bg-gray-100">
                <Link
                  href={item.path}
                  onClick={() => setOpenMenuMobil(false)}
                  className="w-full  text-gray-700 inline-flex space-x-2 py-3  "
                  key={item.title}>
                  {item.title}
                </Link>

                <button
                  onClick={() => setOpenSubMenu(!openSubMenu)}
                  className="text-gray-700 py-3">
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {openSubMenu
                ? categoryProducts.map((item) => (
                    <Link
                      href={item.path}
                      onClick={() => setOpenMenuMobil(false)}
                      className="w-full  inline-flex space-x-2 items-center 
 py-3 hover:bg-white/5 transition
  ease-linear duration-150  border-b border-gray-400  text-gray-700 bg-gray-50 pl-5"
                      key={item.title}>
                      {item.title}
                    </Link>
                  ))
                : ""}
            </div>
          ) : (
            <Link
              href={item.path}
              onClick={() => setOpenMenuMobil(false)}
              className="w-full inline-flex space-x-2 items-center  py-3  transition ease-linear duration-150 text-gray-700 border-b border-gray-400 hover:bg-gray-100 pl-1 "
              key={item.title}>
              {item.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuCategoryMobil;
