"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="h-full px-8 py-20 xl:px-16">
      <div className="w-full shrink-0 px-2">
        <Link href="/">
          <Image
            className=""
            src="/yihan_shi.svg"
            alt="Logo"
            width={96}
            height={64}
          />
        </Link>
      </div>
      <div className="py-8">
        <ol className="flex flex-col space-y-4">
          {[
            ["Home", "/"],
            ["Experience", "/experience"],
            ["Portfolio", "/portfolio"],
            // ["Shop", "/shop"],
          ].map(([title, url]) => (
            <li key={title}>
              <Link
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
