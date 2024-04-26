"use client";
import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import Logo from "./components/Logo";
import MenuCategory from "./components/MenuCategory";
import Profile from "./components/Profile";
import MenuMobil from "./components/MenuMobil";

import { AlignJustify, X } from "lucide-react";
import { SearchComponent } from "./components/Search";
import Cart from "./components/Cart";

const menuItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/category/men",
    title: "Hombre",
  },
  {
    path: "/category/woman",
    title: "Mujer",
  },
];

export default function Header() {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY > 5) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <div
          className={`w-full fixed top-0 z-50 transition duration-500 ease-in-out  ${
            color ? "bg-gray-50 " : "bg-transparent"
          }`}>
          <div className=" mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-shrink-0">
                <Logo />
              </div>
              <MenuCategory menuItems={menuItems} />

              <div className="gap-6 items-center hidden  sm:flex">
                <SearchComponent />
                <Cart />
                <Profile />
              </div>

              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-5 w-5" aria-hidden="true" />
                  ) : (
                    <AlignJustify
                      className="block h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <MenuMobil menuItems={menuItems} />
        </div>
      )}
    </Disclosure>
  );
}
