import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col flex-wrap justify-between px-8 py-24 lg:flex-row">
      <div className="basis-1/2 px-4">
        <p>
          <span className=" text-xl block">Hi, I'm</span>
          <span className="py-2 text-3xl font-medium block">Yihan Shi</span>
          <span className="py-2">
            Based in Washington DC, I'm a software engineer by day, photographer
            by night. Prior to joining Mastercard, I graduated from Duke with a
            B.Sc in Statistics and minors in computer science and neuroscience.
            My other hobbies include playing the piano, cooking, and reading.
            Please feel free to contact me for any questions or comments!
          </span>
        </p>
        <div>
          <ul>
            <li>
              <Link
                className={`hover:text-gray-500`}
                href="https://www.instagram.com/keep_lifepieces/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-gray-500`}
                href="https://www.linkedin.com/in/yihan-shi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link
                className={`hover:text-gray-500`}
                href="https://github.com/ys262/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="basis-1/2 px-4">
        <p>blabla</p>
      </div>
    </main>
  );
}
