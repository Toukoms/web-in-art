import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../button";
import NavItems from "./NavItems";
import MobileNavItems from "./MobileNavItems";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="WebInArt logo"
          />
        </Link>

        <SignedIn>
          <nav className="md:flex hidden max-w-xs w-full">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton />
            <MobileNavItems />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full">
              <Link href="/sign-in">LogIn</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
