import { Link } from "next-view-transitions";
import { ChevronDown } from "lucide-react";
import { Fragment } from "react";
import { SubMenu } from "../nav/interfaces/nav";
import { Popover, Transition } from "@headlessui/react";

interface PropsFlyoutMenu {
  categoryProducts: SubMenu[];
  currentPath?: string;
}

const FlyoutMenus = ({ categoryProducts, currentPath }: PropsFlyoutMenu) => {
  return (
    <Popover className="relative">
      <Popover.Button className="mt-2 ml-2 ">
        <ChevronDown
          className="text-[#373f39] hover:text-[#373f39]/90 w-4 h-4"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition as={Fragment}>
        <Popover.Panel className="absolute top-5 -left-[65px] z-10 mt-4 flex w-screen max-w-max  px-4 ">
          <div className="w-[210px] flex-auto bg-white p-4 rounded-lg  text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 ">
            {categoryProducts.map((item) => (
              <div
                key={item.id}
                className="relative   hover:bg-gray-100 rounded-lg">
                <Link
                  key={item.title}
                  href={item.path}
                  className={`
                    w-full px-2 inline-flex space-x-2 items-center   py-3 hover:bg-white/5 transition ease-linear duration-150  text-sm   border-gray-100 border-b
                    ${
                      currentPath === item.path &&
                      "bg-gray-100 text-gray-800 rounded-lg"
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
