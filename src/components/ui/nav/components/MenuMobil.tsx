import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import MenuCategoryMobil from "./MenuCategoryMobil";
import { PropsMenuItems } from "../interfaces/nav";
import { Search, ShoppingCart } from "lucide-react";

const MenuMobil = ({
  menuItems,
  currentPath,
  openSideMenu,
  subMenuCategorys,
}: PropsMenuItems) => {
  return (
    <>
      <Disclosure.Panel className="sm:hidden bg-black">
        <MenuCategoryMobil
          menuItems={menuItems}
          currentPath={currentPath}
          subMenuCategorys={subMenuCategorys}
        />
        <div className="border-t border-gray-700 pb-3 pt-4">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">Tom Cook</div>
              <div className="text-sm font-medium text-gray-400">
                tom@example.com
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2">
            <Disclosure.Button
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
              Your Profile
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
              Settings
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
              Sign out
            </Disclosure.Button>
          </div>
          <div className="flex gap-3 items-center px-4 mt-3 ">
            <Link href="/search" className="text-white">
              <Search className="w-5 h-5" />
            </Link>
            <button onClick={openSideMenu}>
              <div className="text-white relative">
                <ShoppingCart className=" w-5 h-5 " />
                <span className="absolute -top-3 text-[10px] ml-2 bg-red-900 rounded-full px-1 text-white">
                  3
                </span>
              </div>
            </button>
          </div>
        </div>
      </Disclosure.Panel>
    </>
  );
};

export default MenuMobil;
