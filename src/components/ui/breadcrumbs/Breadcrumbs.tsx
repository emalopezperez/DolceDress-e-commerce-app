"use client";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/shadcn-ui/breadcrumb";

const Breadcrumbs = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").slice(1);

  const pages = segments.map((path, index) => {
    return {
      name: path,
      url: "/" + segments.slice(0, index + 1).join("/"),
    };
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        {pages.map((page, index) => (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {pathname === page.url ? (
                <span>{page.name}</span>
              ) : (
                <BreadcrumbLink href={page.url}>{page.name}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
