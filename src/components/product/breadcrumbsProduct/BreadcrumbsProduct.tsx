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
import { getCollectionProducts } from "@/services/shopify/collections";

interface PropsBreadcrumbs {
  type: string;
  name: string;
  id: string;
}

export default async function BreadcrumbsProduct({
  type,
  name,
  id,
}: PropsBreadcrumbs) {
  const collection = await getCollectionProducts(id);

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
              {type}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
}
