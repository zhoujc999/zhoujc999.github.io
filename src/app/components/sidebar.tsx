"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="h-full bg-white p-16">
      <div className="h-16 w-32 py-8">
        <Link href="#">
          <Image
            className="inline-block"
            src="./next.svg"
            alt="Logo"
            width={96}
            height={48}
          />
        </Link>
      </div>
      <div className="py-8">
        <ol className="flex flex-col space-y-4">
          <li>
            <Link
              className={`hover:text-gray-500 ${
                pathname.substring(1) === "" ? "font-semibold" : ""
              }`}
              href="#"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-gray-500 ${
                pathname.substring(1) === "experience" ? "font-semibold" : ""
              }`}
              href="/experience"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-gray-500 ${
                pathname.substring(1) === "portfolio" ? "font-semibold" : ""
              }`}
              href="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-gray-500 ${
                pathname.substring(1) === "blog" ? "font-semibold" : ""
              }`}
              href="/blog"
            >
              Blog
            </Link>
          </li>
        </ol>
      </div>
    </nav>
  );
}
