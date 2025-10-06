"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

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
                { "bg-blue-100": isActive }
              )}
            >
              <Image src={link.icon} alt={link.name} width={24} height={24} />

              <p className="text-lg font-semibold max-lg:hidden">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
