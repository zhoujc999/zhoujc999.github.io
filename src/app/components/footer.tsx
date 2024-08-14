import Link from "next/link";

export default function Footer() {
  const linkStyle: string =
    "text-blue-600 hover:underline focus:underline hover:text-blue-700 focus:text-blue-700 active:text-blue-800";
  return (
    <div>
      <span className="text-sm">
        Powered by&nbsp;
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyle}
          href="https://nextjs.org/"
        >
          Next.js
        </Link>
        &nbsp;&&nbsp;
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyle}
          href="https://tailwindcss.com/"
        >
          Tailwind CSS
        </Link>
        .
      </span>
    </div>
  );
}
