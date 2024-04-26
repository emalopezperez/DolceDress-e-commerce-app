import { Disclosure } from "@headlessui/react";
import MenuCategoryMobil from "./MenuCategoryMobil";
import { PropsMenuItems } from "../interfaces/nav";
import { SearchComponent } from "./Search";
import Cart from "./Cart";
import Profile from "./Profile";

const MenuMobil = ({ menuItems }: PropsMenuItems) => {
  return (
    <>
      <Disclosure.Panel className="sm:hidden bg-black">
        <MenuCategoryMobil menuItems={menuItems} />

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
          <div className="gap-6 flex  px-5 pt-3 pb-2">
            <SearchComponent />
            <Cart />
          </div>
        </div>
      </Disclosure.Panel>
    </>
  );
};

export default MenuMobil;
