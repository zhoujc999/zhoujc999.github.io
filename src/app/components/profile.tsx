"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";

export default function Profile() {
  return (
    <div className="flex w-96 flex-col">
      <div className="flex flex-row items-center justify-between bg-gray-200">
        <div className="flex flex-row">
          <div className="flex-none">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/keep_lifepieces/"
            >
              <Image
                src="https://dummyimage.com/320x320.jpg"
                alt="Logo"
                className="rounded-full border border-[#e6dfd8]"
                width={64}
                height={64}
              />
            </Link>
          </div>
          <div className="flex-col justify-center text-sm">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/keep_lifepieces/"
            >
              <p className="font-bold">keep_lifepieces</p>
            </Link>
            <p>🫕 and 📸</p>
            <p className="text-[#92898f]">Photographer</p>
          </div>
        </div>
        <div className="flex-none">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/"
          >
            <Image src="/instagram.png" alt="Logo" width={32} height={32} />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2">
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/keep_lifepieces/"
          >
            <Image
              src="https://dummyimage.com/320x320.jpg"
              alt="Logo"
              className="rounded-lg border border-[#e6dfd8]"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/keep_lifepieces/"
          >
            <Image
              src="https://dummyimage.com/320x320.jpg"
              alt="Logo"
              className="rounded-lg border border-[#e6dfd8]"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/keep_lifepieces/"
          >
            <Image
              src="https://dummyimage.com/320x320.jpg"
              alt="Logo"
              className="rounded-lg border border-[#e6dfd8]"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/keep_lifepieces/"
          >
            <Image
              src="https://dummyimage.com/320x320.jpg"
              alt="Logo"
              className="rounded-lg border border-[#e6dfd8]"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/keep_lifepieces/"
          >
            <Image
              src="https://dummyimage.com/320x320.jpg"
              alt="Logo"
              className="rounded-lg border border-[#e6dfd8]"
              width={256}
              height={256}
            />
          </Link>
        </div>
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/keep_lifepieces/"
          >
            <Image
              src="https://dummyimage.com/320x320.jpg"
              alt="Logo"
              className="rounded-lg border border-[#e6dfd8]"
              width={256}
              height={256}
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-stretch">
        <button className="grow rounded-md bg-blue-400">
          View full profile on Instagram
        </button>
      </div>
    </div>
  );
}
