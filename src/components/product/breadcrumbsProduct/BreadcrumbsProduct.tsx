import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { fcCapitalizeFirstLetter } from "@/helpers/fcCapitalizeFirstLetter";
import { truncateToWords } from "@/helpers/fcTruncateToTwoWords";

interface PropsBreadcrumbs {
  type: string;
  name: string;
}

export default function BreadcrumbsProduct({ type, name }: PropsBreadcrumbs) {
  return (
    <nav className="flex pt-6">
      <ol role="list" className="flex items-center space-x-1">
        <li className="flex gap-1 items-center">
          <div>
            <Link href="/" className="text-gray-700 hover:text-gray-500">
              <span>Inicio</span>
            </Link>
          </div>
          <div className="flex items-center">
            <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" />
            <Link
              href={`/collections/${type}`}
              className=" ml-1 text-sm font-medium text-gray-700 hover:text-gray-500">
              {fcCapitalizeFirstLetter(type)}
            </Link>
          </div>
          <div className="flex items-center">
            <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" />
            <span className=" ml-1 text-sm font-medium text-gray-400 ">
              {truncateToWords(name, 3)}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
