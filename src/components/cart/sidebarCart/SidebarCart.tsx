"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Product } from "@/interfaces/product.interface";
import { X } from "lucide-react";
import { useUIStore } from "@/store/ui/ui-store";
import SelectorQuantity from "@/components/cart/selectorQuantity/SelectorQuantity";
import EmptyCart from "../emptyCart/EmptyCart";

interface PropsSidebar {
  data: Product[];
}

export default function SidebarCart({ data }: PropsSidebar) {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  const [quantity, setQuantity] = useState(1);

  return (
    <Transition.Root show={isSideMenuOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeMenu}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-45 transition-opacity backdrop:filter backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0 lg:pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-400 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-400 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full">
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl mt-16">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-2xl font-medium text-gray-800">
                          Carrito de compras
                        </Dialog.Title>
                        <div className=" flex  items-center">
                          <button
                            type="button"
                            className="relative  text-black hover:text-gray-500"
                            onClick={() => closeMenu()}>
                            <X className="h-5 w-5 " />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200">
                            {data.map((product) => (
                              <li key={product.slug} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Link href={`/product/${product.slug}`}>
                                    <Image
                                      src={`/products/${product.images[0]}`}
                                      alt={product.title}
                                      className="h-full w-full object-cover object-center"
                                      width={100}
                                      height={100}
                                    />
                                  </Link>
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <Link href={`/product/${product.slug}`}>
                                          {product.title}
                                        </Link>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      Blue
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="pt-1 ">
                                      <SelectorQuantity
                                        quantity={quantity}
                                        setQuantity={setQuantity}
                                        stock={product.inStock}
                                      />
                                    </div>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-red-600 hover:text-red-900">
                                        Eliminar
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-4 ">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>

                        <div className="mt-6 mb-2">
                          <Link
                            onClick={() => closeMenu()}
                            href="/cart"
                            className="flex items-center justify-center rounded-md border border-gray-500  px-6 py-3 text-base font-medium text-gray-900 b shadow-sm hover:bg-gray-100 ">
                            Ver carrito
                          </Link>
                        </div>
                        <div className=" mb-8">
                          <Link
                            onClick={() => closeMenu()}
                            href="/checkout/address"
                            className="flex items-center justify-center rounded-md border border-transparent bg-[#373f39]/90 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#373f39]/80 ">
                            Checkout
                          </Link>
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
