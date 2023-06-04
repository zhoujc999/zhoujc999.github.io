"use client";

import { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white px-4 py-2 text-base text-black">
      <div className="">
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
                <Image
                  src="/close.svg"
                  alt="Close"
                  className="dark:invert"
                  width={24}
                  height={24}
                  priority
                />
              ) : (
                <Image
                  src="/menu.svg"
                  alt="Menu"
                  className="dark:invert"
                  width={24}
                  height={24}
                  priority
                />
              )}
            </button>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="pb-2 pt-6">
          <ul className="flex flex-col space-y-4">
            <li className="text-center">
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                className="hover:text-gray-500"
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
                className="hover:text-gray-500"
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
              <Link className="hover:text-gray-500" href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
