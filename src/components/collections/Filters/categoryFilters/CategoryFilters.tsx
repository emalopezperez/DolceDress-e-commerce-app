import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProposCategoryFilters {
  subCategory: SubCategory[];
}

export interface SubCategory {
  id: number;
  path: string;
  title: string;
}

const CategoryFilters = ({ subCategory }: ProposCategoryFilters) => {
  const pathname = usePathname();

  return (
    <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
      {subCategory.map((category) => (
        <li key={category.title}>
          <Link href={category.path} className={`text-gray-800 }`}>
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryFilters;
