"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryFilters = () => {
  const pathname = usePathname();

  return (
    <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
      <li>
        <Link href={""} className={`text-gray-800 }`}>
          hola
        </Link>
      </li>
    </ul>
  );
};

export default CategoryFilters;
