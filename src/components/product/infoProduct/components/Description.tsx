import { TabsContent } from "@/components/ui/shadcn-ui/tabs";
import Image from "next/image";

interface PropsDescription {
  text: string;
}

const Description = ({ text }: PropsDescription) => {
  return (
    <TabsContent
      value="descript"
      className="grid grid-cols-1 md:grid-cols-5 w-full h-full gap-14">
      <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
        <h3>Product info</h3>
        <p className="text-gray-700 text-sm font-light tracking-widest leading-relaxed">
          {text}
        </p>
        <p className="text-gray-700 text-sm font-light tracking-widest leading-relaxed">
          {text}
        </p>
        <p className="text-gray-700 text-sm font-light tracking-widest leading-relaxed">
          {text}
        </p>
      </div>
      <div className="col-span-3 ">
        <div className="w-full h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="TODO"
            fill
            className="h-full w-full object-cover object-center rounded-md"
          />
        </div>
      </div>
    </TabsContent>
  );
};

export default Description;
