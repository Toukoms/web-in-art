"use client";

import { headerLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = link.route === pathname;
        return (
          <li
            key={"nav_links_" + link.label}
            className={cn(
              {
                "text-primary":isActive,
              },
              "flex-center p-medium-16 whitespace-nowrap"
            )}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
