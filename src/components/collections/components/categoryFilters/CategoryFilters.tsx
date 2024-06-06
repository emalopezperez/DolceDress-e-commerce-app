import { Collection } from "@/models/Collection";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PropsCategoryFilters {
  collectionsCategory: Collection[];
}

const CategoryFilters = ({ collectionsCategory }: PropsCategoryFilters) => {
  const pathname = usePathname();

  return (
    <ul className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
      {collectionsCategory.map((collection, index) => (
        <li key={index}>
          <Link
            href={`/collections/${collection.title}`}
            className="text-gray-800">
            {collection.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryFilters;
