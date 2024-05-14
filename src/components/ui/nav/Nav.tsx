"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./components/Logo";
import MenuCategory from "./components/MenuCategory";
import Profile from "./components/Profile";
import MenuMobil from "./components/MenuMobil";
import { AlignJustify, X, ShoppingCart, Search } from "lucide-react";
import { useUIStore } from "@/store/ui/ui-store";
import { SubMenu } from "./interfaces/nav";
import ButtonCart from "./components/ButtonCart";
import { useState } from "react";

const menuItems = [
  { id: 1, path: "/", title: "Inicio" },
  {
    id: 6,
    path: "/collections",
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

interface PropsNav {
  categoryProducts: SubMenu[];
}

export default function Header({ categoryProducts }: PropsNav) {
  const currentPath = usePathname();
  const [openMenuMobil, setOpenMenuMobil] = useState(false);
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <div className="w-full fixed top-0 z-50 transition duration-300 ease-in-out bg-white shadow-md ">
      <div className=" mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between ">
          <div className="flex sm:hidden  w-full h-full items-center justify-between">
            <div className="flex sm:hidden gap-2 ">
              <div className="relative   text-gray-700  hover:text-gray-400 ">
                {openMenuMobil ? (
                  <X
                    className=" h-5 w-5 "
                    onClick={() => setOpenMenuMobil(false)}
                    aria-hidden="true"
                  />
                ) : (
                  <AlignJustify
                    className=" h-5 w-5 cursor-pointer"
                    aria-hidden="true"
                    onClick={() => {
                      setOpenMenuMobil(!openMenuMobil);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="flex sm:hidden pr-1">
              <ButtonCart openSideMenu={openSideMenu} />
            </div>
          </div>

          <MenuCategory
            menuItems={menuItems}
            currentPath={currentPath}
            categoryProducts={categoryProducts}
          />

          <div className=" sm:flex hidden pr-0 lg:pr-36 ">
            <Logo />
          </div>

          <div className="gap-6 items-center hidden  sm:flex">
            <Link href="/search" className="text-gray-700">
              <Search className="w-5 h-5" />
            </Link>
            <button onClick={openSideMenu}>
              <div className="text-gray-700 relative hover:text-gray-400">
                <ShoppingCart className=" w-5 h-5 " />
                <span className="absolute -top-3 text-[10px] ml-2 bg-red-900 rounded-full px-1 text-white">
                  3
                </span>
              </div>
            </button>
            <Profile />
          </div>
        </div>
      </div>

      <MenuMobil
        openMenuMobil={openMenuMobil}
        setOpenMenuMobil={setOpenMenuMobil}
        menuItems={menuItems}
        currentPath={currentPath}
        categoryProducts={categoryProducts}
      />
    </div>
  );
}
