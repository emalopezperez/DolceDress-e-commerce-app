import { Search } from "lucide-react";
import Link from "next/link";

export const SearchComponent = () => {
  return (
    <Link href="/search" className="text-gray-700">
      <Search className="w-5 h-5" />
    </Link>
  );
};
