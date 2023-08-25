"use client";

import Image from "next/image";
import { SetStateAction, useState } from "react";
import {
  RxDot,
  RxDotFilled,
  RxChevronLeft,
  RxChevronRight,
} from "react-icons/rx";

export default function Carousel() {
  const slides = [
    {
      url: "https://dummyimage.com/1280x720.jpg",
    },
    {
      url: "https://dummyimage.com/1280x720.jpg",
    },
    {
      url: "https://dummyimage.com/1280x720.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="group relative m-auto h-80 w-full py-4">
      <div className="m-auto h-full w-full rounded-2xl duration-500">
        <Image src={slides[currentIndex].url} alt="Photo" fill />
      </div>
      <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <RxChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <RxChevronRight onClick={nextSlide} size={30} />
      </div>
      <div className="top-4 flex justify-center py-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl"
          >
            {slideIndex == currentIndex ? <RxDotFilled /> : <RxDot />}
          </div>
        ))}
      </div>
    </div>
  );
}
