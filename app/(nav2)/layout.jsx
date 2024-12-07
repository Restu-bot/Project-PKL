"use client";
import React from "react";
import Link from "next/link";
import logo from "@/public/assets/logo-furni-1.png";
import { Icon } from "@iconify/react";

export default function ShopLayout({ children }) {
  return (
    <section className="w-full min-h-screen">
      <header className="container mx-auto h-20 px-4 flex justify-between items-center bg-green-800 fixed top-0 rounded-b-[2rem] z-50">
        <div>
          <Link href="/">
            <img src={logo.src} alt="Logo Furni" width={70} />
          </Link>
        </div>
        <nav className="flex space-x-6 items-center">
          <Icon
            icon="icon-park-solid:shopping"
            className="text-white text-xl"
          />
          <Icon icon="mdi:bell-outline" className="text-white text-xl" />
          <button className="bg-transparent border border-white py-1 px-4 rounded-full hover:bg-yellow-400 hover:text-green-800 text-white">
            Login
          </button>
        </nav>
      </header>
      {children}
    </section>
  );
}
