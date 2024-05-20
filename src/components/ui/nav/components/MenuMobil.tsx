import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import MenuCategoryMobil from "./MenuCategoryMobil";
import { PropsMenuMobil } from "../interfaces/nav";
import Link from "next/link";

export default function MenuMobil({
  openMenuMobil,
  setOpenMenuMobil,
  menuItems,
  currentPath,
  categoryProducts,
}: PropsMenuMobil) {
  return (
    <Transition.Root show={openMenuMobil} as={Fragment}>
      <Dialog className="relative z-10" onClose={() => setOpenMenuMobil}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-400"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-400"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0  bg-black/35 opacity-35" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full h-full">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-500 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-500 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full">
                <Dialog.Panel className="pointer-events-auto w-screen ">
                  <div className="flex flex-col overflow-y-scroll bg-white py-4 shadow-xl h-full ">
                    <div className="px-4">
                      <button
                        type="button"
                        className=" text-gray-700 hover:text-gray-500 "
                        onClick={() => setOpenMenuMobil(false)}>
                        <X className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="relative mt-7 flex-1 px-4 ">
                      <MenuCategoryMobil
                        menuItems={menuItems}
                        currentPath={currentPath}
                        categoryProducts={categoryProducts}
                        setOpenMenuMobil={setOpenMenuMobil}
                      />
                      <div className="pl-1 mt-2">
                        <div className="flex items-center py-3">
                          <div className="">
                            <div className="flex gap-4  pl-1 border-b border-gray-400 items-center py-3">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />

                              <div className="">
                                <div className="text-base font-medium text-gray-700">
                                  Tom Cook
                                </div>
                                <div className="text-sm font-medium text-gray-400">
                                  tom@example.com
                                </div>
                              </div>
                            </div>

                            <Link
                              href="/"
                              className="w-full inline-flex space-x-2 items-center  py-3  transition ease-linear duration-150 text-gray-700 border-b border-gray-400 hover:bg-gray-100 pl-1 ">
                              Mi perfil
                            </Link>
                            <Link
                              href="/"
                              className="w-full inline-flex space-x-2 items-center  py-3  transition ease-linear duration-150 text-gray-700 border-b border-gray-400 hover:bg-gray-100 pl-1 ">
                              Configuraciones
                            </Link>
                            <Link
                              href="/"
                              className="w-full inline-flex space-x-2 items-center  py-3  transition ease-linear duration-150 text-gray-700 border-b border-gray-400 hover:bg-gray-100 pl-1 ">
                              Salir de la cuenta
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
