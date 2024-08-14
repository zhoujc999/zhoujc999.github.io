import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <span className="text-sm">
        Powered by&nbsp;
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
          href="https://nextjs.org/"
        >
          Next.js
        </Link>
        &nbsp;&&nbsp;
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
          href="https://tailwindcss.com/"
        >
          Tailwind CSS
        </Link>
        .
      </span>
    </div>
  );
}
