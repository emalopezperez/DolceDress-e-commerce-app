"use client";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import { fcCapitalizeFirstLetter } from "@/helpers/fcCapitalizeFirstLetter";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname.split("/").slice(1);

  const pages = segments.map((path, index) => {
    return {
      name: path,
      url: "/" + segments.slice(0, index + 1).join("/"),
    };
  });

  return (
    <nav className="flex pt-6">
      <ol role="list" className="flex items-center space-x-1">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <span>Inicio</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" />
              {pathname === page.url ? (
                <span className="ml-1 text-sm font-medium text-gray-700">
                  {fcCapitalizeFirstLetter(page.name)}
                </span>
              ) : (
                <Link
                  href={page.url}
                  className="ml-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                  {fcCapitalizeFirstLetter(page.name)}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
