"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <IoMenu size={36} className="cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-[#f5f5f5]">
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

          <div className="flex flex-col h-[calc(100vh-72px)] justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-black">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route;

                  return (
                    <SheetClose asChild key={link.name}>
                      <Link
                        href={link.route}
                        className={cn(
                          "flex items-center p-4 gap-2 rounded-lg w-full max-w-60",
                          { "bg-blue-100": isActive }
                        )}
                      >
                        <Image
                          src={link.icon}
                          alt={link.name}
                          width={20}
                          height={20}
                        />

                        <p className="font-semibold">{link.name}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
