"use client";

import Navbar from "./components/navbar";
import Profile from "./components/profile";
import About from "./components/about";
import Experience from "./components/experience";
import Research from "./components/research";
import Footer from "./components/footer";
import Interest from "./components/interest";
import { Dispatch, SetStateAction, useState } from "react";

export default function Home() {
  const pages: JSX.Element[] = [
    <Profile key="profile" />,
    <About key="about" />,
    <Experience key="experience" />,
    <Research key="research" />,
    <Interest key="interest" />,
  ];

  const [currentIndex, setCurrentIndex]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(0);

  const handlePrevPage: () => void = () => {
    const isFirstSection: boolean = currentIndex === 0;
    const newIndex: number = isFirstSection ? currentIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextPage: () => void = () => {
    const isLastSection: boolean = currentIndex === 4;
    const newIndex: number = isLastSection ? currentIndex : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="absolute z-10 w-screen items-center bg-blue-700 md:hidden">
        <Navbar
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          pageIndex={currentIndex}
        />
      </header>
      <div className="flex flex-grow max-md:hidden">
        <header className="w-80 border-r bg-white px-12 lg:w-96">
          <Profile />
        </header>
        <main className="flex-auto bg-[#f0f5f9]">
          <About />
          <Experience />
          <Research />
          <Interest />
        </main>
      </div>
      <div className="min-h-screen bg-[#f0f5f9] px-2 py-12 md:hidden">
        {pages[currentIndex]}
      </div>
      <footer className="mt-auto w-full bg-[#eeeeee] text-center text-[#5f5f5f]">
        <Footer />
      </footer>
    </div>
  );
}
