"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./components/Logo";
import Profile from "./components/Profile";
import MenuMobil from "./components/MenuMobil";
import { AlignJustify, X, ShoppingCart, Search } from "lucide-react";
import { useUIStore } from "@/store/ui/ui-store";
import ButtonCart from "./components/ButtonCart";
import { MenuCategory } from "./components/MenuCategory";
import { Collection } from "@/models/Collection";

const menuItems = [
  { id: 1, path: "/", title: "Inicio" },
  {
    id: 6,
    path: "/collections",
    title: "Tienda",
    subMenu: true,
  },
  {
    id: 3,
    path: "/about",
    title: "Nosotros",
  },

  {
    id: 2,
    path: "/contact",
    title: "Contacto",
  },
];

interface PropsNav {
  categories: Collection[];
}

export default function Header({ categories }: PropsNav) {
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
          </div>

          <div className=" sm:flex hidden  ">
            <Logo />
          </div>

          <div className="sm:flex hidden pr-10">
            <MenuCategory categories={categories} />
          </div>
        </div>
      </div>

      <MenuMobil
        openMenuMobil={openMenuMobil}
        setOpenMenuMobil={setOpenMenuMobil}
        menuItems={menuItems}
        currentPath={currentPath}
        categories={categories}
      />
    </div>
  );
}
