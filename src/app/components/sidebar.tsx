import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="h-full bg-white p-16">
      <div className="py-8 w-32 h-16">
        <Link href="#">
          <Image src="./next.svg" alt="Logo" width={96} height={48} />
        </Link>
      </div>
      <div className="py-8">
        <ul className="flex flex-col space-y-4">
          <li>
            <Link className="hover:text-gray-500" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-500" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-500" href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-500" href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
