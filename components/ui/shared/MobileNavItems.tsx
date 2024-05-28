import {
  Sheet,
  SheetContent,
  SheetOverlay,
  SheetPortal,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from "./NavItems";

const MobileNavItems = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src={"/assets/icons/menu.svg"}
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetPortal>
          <SheetOverlay className="bg-white/35 backdrop-blur-sm md:hidden md:bg-opacity-0"></SheetOverlay>
          <SheetContent className="flex flex-col w-full gap-6 bg-white max-w-64 md:hidden">
            <Image
              src="/assets/images/logo.svg"
              width={128}
              height={38}
              alt="WebInArt logo"
            />
            <Separator className="border border-gray-50" />
            <NavItems />
          </SheetContent>
        </SheetPortal>
      </Sheet>
    </nav>
  );
};

export default MobileNavItems;
