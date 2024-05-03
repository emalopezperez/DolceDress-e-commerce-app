import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";
import { SubMenu } from "../nav/interfaces/nav";
import { Popover, Transition } from "@headlessui/react";

interface PropsFlyoutMenu {
  subMenuCategorys: SubMenu[];
  currentPath?: string;
  color?: boolean;
}

const FlyoutMenus = ({
  subMenuCategorys,
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
              : "text-gray-700 relative hover:text-gray-400 w-4 h-4"
          }
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1">
        <Popover.Panel className="absolute top-5 -left-[70px] z-10 mt-4 flex w-screen max-w-max  px-2 ">
          <div className="w-[240px] flex-auto rounded-b-md bg-white p-3 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            {subMenuCategorys.map((item) => (
              <div
                key={item.id}
                className="relative rounded-lg  hover:bg-gray-50">
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
