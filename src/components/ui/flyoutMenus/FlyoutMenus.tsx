import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";
import { SubMenu } from "../nav/interfaces/nav";
import { Popover, Transition } from "@headlessui/react";

interface PropsFlyoutMenu {
  categoryProducts: SubMenu[];
  currentPath?: string;
  color?: boolean;
}

const FlyoutMenus = ({
  categoryProducts,
  currentPath,
  color,
}: PropsFlyoutMenu) => {
  return (
    <Popover className="relative">
      <Popover.Button className="mt-2 ">
        <ChevronDown
          className={
            currentPath === "/" && color === false
              ? "text-white relative hover:text-gray-500 w-4 h-4"
              : "text-[#373f39] hover:text-[#373f39]/90 w-4 h-4"
          }
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition as={Fragment}>
        <Popover.Panel className="absolute top-5 -left-[65px] z-10 mt-4 flex w-screen max-w-max  px-2 ">
          <div className="w-[210px] flex-auto bg-white p-1 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            {categoryProducts.map((item) => (
              <div key={item.id} className="relative  hover:bg-gray-50 ">
                <Link
                  key={item.title}
                  href={item.path}
                  className={`
                    w-full px-2 inline-flex space-x-2 items-center text-black  py-3 hover:bg-white/5 transition ease-linear duration-150  text-sm  
                    ${
                      currentPath === item.path &&
                      "bg-gray-100 text-black rounded-lg"
                    }
                  `}>
                  {item.title}

                  <span className="absolute inset-0" />
                </Link>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default FlyoutMenus;
