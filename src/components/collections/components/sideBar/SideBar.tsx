import { ComponentType } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/shadcn-ui/sheet";

interface PropsSidebar {
  direction: "top" | "right" | "bottom" | "left" | null | undefined;
  title: string;
  description?: string;
  Icon: ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

export function SideBar({
  direction,
  title,
  description,
  Icon,
  children,
}: PropsSidebar) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="ml-1 p-2 text-gray-600 hover:text-gray-500  ">
          <Icon className="h-4 w-4" />
        </button>
      </SheetTrigger>
      <SheetContent side={direction}>
        <div className="">
          <SheetHeader className="mt-6 mb-8">
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
}
