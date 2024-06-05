import { PropsMenuMobil } from "../interfaces/nav";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../shadcn-ui/accordion";

import React from "react";

const MenuCategoryMobil = ({
  menuItems,
  categories,
  setOpenMenuMobil,
}: PropsMenuMobil) => {
  return (
    <ul className="space-y-1">
      {menuItems.map((item) =>
        item.subMenu ? (
          <Accordion
            type="multiple"
            className="animate-none block lg:hidden w-full"
            key={item.title}>
            <AccordionItem value="tienda">
              <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-md text-gray-900 pl-2">
                  {item.title}
                </span>
              </AccordionTrigger>

              <AccordionContent className="animate-none flex flex-col pl-6">
                <ul className="">
                  {categories.map((category) => (
                    <li key={category.id} className="">
                      <Link
                        onClick={() => setOpenMenuMobil(false)}
                        href={`/collections/${category.title}`}
                        className="w-full inline-flex space-x-2 items-center py-3 transition ease-linear duration-150 text-gray-700 pl-1">
                        {category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <li key={item.title}>
            <Link
              href={item.path}
              onClick={() => setOpenMenuMobil(false)}
              className="w-full inline-flex space-x-2 items-center py-3 border-b border-gray-200 text-gray-900 pl-2">
              {item.title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default MenuCategoryMobil;
