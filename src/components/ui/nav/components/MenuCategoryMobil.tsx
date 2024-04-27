import { Disclosure } from "@headlessui/react";
import { PropsMenuItems } from "../interfaces/nav";

const MenuCategoryMobil = ({ menuItems, currentPath }: PropsMenuItems) => {
  return (
    <div className="space-y-1 px-2 pb-3 pt-2">
      {menuItems.map((item) => (
        <Disclosure.Button
          as="a"
          href={item.path}
          className={`
            w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 text-slate-200
            ${currentPath === item.path ? " bg-gray-800 text-white" : ""}
          `}
          key={item.title}>
          {item.title}
        </Disclosure.Button>
      ))}
    </div>
  );
};

export default MenuCategoryMobil;
