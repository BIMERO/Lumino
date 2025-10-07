"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-[#ffffff] p-6 pt-28 text-black max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              key={link.name}
              href={link.route}
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg justify-start",
                { "bg-[#3fa065]": isActive }
              )}
            >
              <span className={cn(
                "text-[#09180f] text-xl",
                { "text-white": isActive }
              )}> {link.icon} </span>

              <p  className={cn(
                "text-lg text-[#09180f] font-semibold max-lg:hidden",
                { "text-white": isActive }
              )}>{link.name}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
