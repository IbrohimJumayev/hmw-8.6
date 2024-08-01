"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="max-w-7xl m-auto flex justify-between mt-9 items-center">
      <div>
        <Link href="/">
          <img className="cursor-pointer" src="/navlogo.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-7">
        <ul className="flex items-center gap-12 font-bold">
          <Link href="/">
            <li
              className={`${
                pathname == "/"
                  ? "text-buttonColor font-bold scale-110 duration-300"
                  : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`${
                pathname == "/about"
                  ? "text-buttonColor font-bold scale-110 duration-300"
                  : ""
              }`}
            >
              About
            </li>
          </Link>
          <Link href="/services">
            <li
              className={`${
                pathname == "/services"
                  ? "text-buttonColor font-bold scale-110 duration-300"
                  : ""
              }`}
            >
              Services
            </li>
          </Link>
          <Link href="/system">
            <li
              className={`${
                pathname == "/system"
                  ? "text-buttonColor font-bold scale-110 duration-300"
                  : ""
              }`}
            >
              Systems
            </li>
          </Link>
        </ul>
        <button className="text-buttonColor font-boldd border-2 px-4 py-4 rounded-full border-buttonColor hover:bg-buttonColor hover:text-white duration-500">
          Contact us
        </button>
      </div>
    </div>
  );
}
