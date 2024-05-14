"use client";
import SelectorQuantity from "@/components/cart/selectorQuantity/SelectorQuantity";
import Container from "@/components/ui/container/Container";

import { placeholderImage } from "@/helpers/placeholderImage";
import { initialData } from "@/seed/seed";
import { CheckIcon, ClockIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const data = initialData.products.slice(0, 3);

export default function CartPage() {
  return (
    <div className=" pt-24  w-full">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 mt-5  md:mt-10 mb-10 gap-2 lg:gap-16">
          <section className="col-span-3 ">
            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {data.map((product, productIdx) => (
                <li key={product.slug} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <Image
                      src={`/products/${product.images[0]}`}
                      alt={product.title}
                      width={150}
                      height={150}
                      className="rounded-md object-cover object-center w-full h-full "
                      placeholder="blur"
                      blurDataURL={placeholderImage}
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a
                              href={product.slug}
                              className="font-medium text-gray-700 hover:text-gray-800">
                              {product.title}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">azul</p>
                          {product.sizes ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              {product.sizes[0]}
                            </p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          {product.price}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label
                          htmlFor={`quantity-${productIdx}`}
                          className="sr-only">
                          Quantity, {product.title}
                        </label>
                        <select
                          id={`quantity-${productIdx}`}
                          name={`quantity-${productIdx}`}
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                        </select>

                        <div className="absolute right-0 top-0">
                          <button
                            type="button"
                            className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Remove</span>
                            <X className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                      {product.inStock ? (
                        <CheckIcon
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ClockIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-300"
                          aria-hidden="true"
                        />
                      )}

                      <span>
                        {product.inStock ? "In stock" : `No hay stock`}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <div className="col-span-2 ">
            <section
              aria-labelledby="summary-heading"
              className=" rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900">
                Order summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">$99.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                    <a
                      href="#"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">
                        Learn more about how shipping is calculated
                      </span>
                      <div className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                    <a
                      href="#"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">
                        Learn more about how tax is calculated
                      </span>
                      <div className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$8.32</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    $112.32
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <div className="mt-6 mb-14">
                  <Link
                    href="/checkout/address"
                    className="flex items-center justify-center rounded-md border border-transparent bg-[#373f39]/90 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#373f39]/80 ">
                    Checkout
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
