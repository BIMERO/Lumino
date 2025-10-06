import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "LUMINO",
  description: "A Video Calling App",
  icons: {
    icon: "./icons/logo.svg",
  },
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-8 pt-28 max-md:pb-14 sm:px-14">
          <div>{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
