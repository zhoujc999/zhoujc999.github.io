"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white px-4 py-2 text-base text-black">
      <div>
        <ul className="flex flex-row place-content-between items-center p-4">
          <li>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href="#"
            >
              <Image src="./next.svg" alt="Logo" width={96} height={48} />
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? (
                <MdClose className="h-6 w-6 hover:text-gray-500" />
              ) : (
                <MdMenu className="h-6 w-6 hover:text-gray-500" />
              )}
            </button>
          </li>
        </ul>
      </div>
      <div className={`${isOpen ? "" : "hidden"} pb-2 pt-6`}>
        <ul className="flex flex-col space-y-4">
          <li className="text-center">
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              className={`hover:text-gray-500 ${
                pathname.substring(1) === "about" ? "font-semibold" : ""
              }`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="text-center">
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              className={`hover:text-gray-500 ${
                pathname.substring(1) === "portfolio" ? "font-semibold" : ""
              }`}
              href="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-center"
          >
            <Link className={`hover:text-gray-500 ${
                pathname.substring(1) === "blog" ? "font-semibold" : ""
              }`} href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
