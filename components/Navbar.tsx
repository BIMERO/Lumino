import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex fixed z-50 w-full bg-white px-6 py-4 lg:px-10">
      <Link className="flex items-center gap-1" href="/">
        <Image
          src={"/icons/logo.svg"}
          alt="Lumino"
          width={32}
          height={32}
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold max-sm:hidden">Lumino</p>
      </Link>

      <div className="flex justify-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
