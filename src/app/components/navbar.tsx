"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export default function Navbar() {
  const sectionHeaders = ["Profile", "About", "Experience"];
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSection = () => {
    const isFirstSection = currentIndex === 0;
    const newIndex = isFirstSection ? currentIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSection = () => {
    const isLastSection = currentIndex === sectionHeaders.length - 1;
    const newIndex = isLastSection ? currentIndex : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <nav className="flex h-12 items-center px-8">
      <ul className="flex flex-grow flex-row place-content-between items-center text-white">
        <button className="rounded-full p-2" onClick={prevSection}>
          <MdArrowBackIos />
        </button>
        <li>{sectionHeaders.at(currentIndex)}</li>
        <MdArrowForwardIos onClick={nextSection}>z</MdArrowForwardIos>
      </ul>
    </nav>
  );
}
