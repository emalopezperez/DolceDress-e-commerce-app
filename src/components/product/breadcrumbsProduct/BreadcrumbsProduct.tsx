import { fcCapitalizeFirstLetter } from "@/helpers/fcCapitalizeFirstLetter";
import { truncateToWords } from "@/helpers/fcTruncateToTwoWords";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/shadcn-ui/breadcrumb";

interface PropsBreadcrumbs {
  type: string;
  name: string;
}

export default function BreadcrumbsProduct({ type, name }: PropsBreadcrumbs) {
  return (
    <nav className="flex pt-6 pb-1">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/collections/${type}`}>
              {fcCapitalizeFirstLetter(type)}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{truncateToWords(name, 2)}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
}
