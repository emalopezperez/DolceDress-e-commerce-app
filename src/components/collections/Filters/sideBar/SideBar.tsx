import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/shadcn-ui/sheet";
import { Filter } from "lucide-react";

interface PropsSidebar {
  direction: "top" | "right" | "bottom" | "left" | null | undefined;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function SideBar({
  direction,
  title,
  description,
  children,
}: PropsSidebar) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="ml-1 p-2 text-gray-600 hover:text-gray-500  lg:hidden">
          <Filter className="h-4 w-4" />
        </button>
      </SheetTrigger>
      <SheetContent side={direction}>
        <SheetHeader className="mt-4">
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        <div className="mt-5">{children}</div>
      </SheetContent>
    </Sheet>
  );
}
