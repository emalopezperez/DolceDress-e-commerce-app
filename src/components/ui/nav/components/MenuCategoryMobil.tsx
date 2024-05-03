import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { PropsMenuItems } from "../interfaces/nav";
import { ChevronDown } from "lucide-react";

const MenuCategoryMobil = ({
  menuItems,
  currentPath,
  subMenuCategorys,
}: PropsMenuItems) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  return (
    <div className="space-y-1 px-2 pb-3 pt-2">
      {menuItems.map((item) => (
        <div key={item.title}>
          {item.subMenu ? (
            <div className="">
              <div className="flex gap-3 items-center">
                <Disclosure.Button
                  as="a"
                  href={item.path}
                  className={`
          w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 text-slate-200
          ${currentPath === item.path && " bg-gray-800 text-white"}
        `}
                  key={item.title}>
                  {item.title}
                </Disclosure.Button>

                <button
                  onClick={() => setOpenSubMenu(!openSubMenu)}
                  className="text-white">
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

              {openSubMenu &&
                subMenuCategorys.map((item) => (
                  <Disclosure.Button
                    as="a"
                    href={item.path}
                    className={`
w-full px-6 inline-flex space-x-2 items-center border-b
 border-slate-700 py-3 hover:bg-white/5 transition
  ease-linear duration-150 text-slate-200
${currentPath === item.path && " bg-gray-800 text-white"}
`}
                    key={item.title}>
                    {item.title}
                  </Disclosure.Button>
                ))}
            </div>
          ) : (
            <Disclosure.Button
              as="a"
              href={item.path}
              className={`
            w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 text-slate-200
            ${currentPath === item.path && " bg-gray-800 text-white"}
          `}
              key={item.title}>
              {item.title}
            </Disclosure.Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuCategoryMobil;
