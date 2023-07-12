"use client";

import { FaRegClock } from "react-icons/fa";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
      });
      cal("preload", {
        calLink: "yihan-shi",
      });
    })();
  }, []);
  return (
    <button
      data-cal-link="yihan-shi"
      className="mr-1 rounded-full border-2 border-[#52414c] px-2 py-1 transition hover:border-[#978d94] hover:text-[#978d94]"
    >
      <FaRegClock className="mr-1 inline-block align-middle " />
      <span className="pointer-events-none align-middle">Book My Time</span>
    </button>
  );
}
