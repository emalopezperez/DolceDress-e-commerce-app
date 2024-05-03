"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import Logo from "./components/Logo";
import MenuCategory from "./components/MenuCategory";
import Profile from "./components/Profile";
import MenuMobil from "./components/MenuMobil";
import { AlignJustify, X, ShoppingCart, Search } from "lucide-react";
import { useUIStore } from "@/store/ui/ui-store";

const menuItems = [
  { id: 1, path: "/", title: "Inicio" },
  {
    id: 6,
    path: "/products",
    title: "Tienda",
    subMenu: true,
  },

  {
    id: 2,
    path: "/contacto",
    title: "Contacto",
  },
  {
    id: 3,
    path: "/about",
    title: "Nosotros",
  },
];

const subMenuCategorys = [
  {
    id: 1,
    path: "/category/men",
    title: "Hombres",
  },
  {
    id: 2,
    path: "/category/women",
    title: "Mujeres",
  },
  { id: 3, path: "/category/accessories", title: "Accesorios", subMenu: true },
];

export default function Header() {
  const currentPath = usePathname();
  const openSideMenu = useUIStore((state) => state.openSideMenu);

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
          className={`w-full fixed top-0 z-10 transition duration-600 ease-in-out  ${
            color ? "bg-gray-50  " : "bg-transparent"
          }`}>
          <div className=" mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-shrink-0 ">
                <Logo />
              </div>
              <MenuCategory
                menuItems={menuItems}
                currentPath={currentPath}
                color={color}
                subMenuCategorys={subMenuCategorys}
              />

              <div className="gap-6 items-center hidden  sm:flex">
                <Link
                  href="/search"
                  className={
                    currentPath === "/" && color === false
                      ? "text-white"
                      : "text-gray-700"
                  }>
                  <Search className="w-5 h-5" />
                </Link>
                <button onClick={openSideMenu}>
                  <div
                    className={
                      currentPath === "/" && color === false
                        ? "text-white relative hover:text-gray-500"
                        : "text-gray-700 relative hover:text-gray-400"
                    }>
                    <ShoppingCart className=" w-5 h-5 " />
                    <span className="absolute -top-3 text-[10px] ml-2 bg-red-900 rounded-full px-1 text-white">
                      3
                    </span>
                  </div>
                </button>
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

          <MenuMobil
            menuItems={menuItems}
            currentPath={currentPath}
            openSideMenu={openSideMenu}
            subMenuCategorys={subMenuCategorys}
          />
        </div>
      )}
    </Disclosure>
  );
}
