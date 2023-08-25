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
    <nav className="px-4 text-base">
      <div>
        <ol className="flex flex-row place-content-between items-center p-4">
          <li>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href="/"
            >
              <Image src="/yihan_shi.svg" alt="Logo" width={72} height={48} />
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? (
                <MdClose className="h-6 w-6 transition hover:text-[#978d94]" />
              ) : (
                <MdMenu className="h-6 w-6 transition hover:text-[#978d94]" />
              )}
            </button>
          </li>
        </ol>
      </div>
      <div className={`${isOpen ? "" : "hidden"} pb-2 pt-6`}>
        <ol className="flex flex-col space-y-4">
          {[
            ["Home", "/"],
            ["Experience", "/experience"],
            ["Portfolio", "/portfolio"],
            // ["Shop", "/shop"],
          ].map(([title, url]) => (
            <li className="text-center" key={title}>
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                className={`transition hover:text-[#978d94] ${
                  pathname === url ? "font-semibold" : ""
                }`}
                href={url}
              >
                {title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
