import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaRegClock,
  FaRegEnvelope,
} from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div>
        <p>
          <span className="block text-xl">Hi, I'm</span>
          <span className="block py-2 text-3xl font-medium">Yihan Shi!</span>
          <span className="py-2">
            Based in Washington DC, I'm a software engineer by day, photographer
            by night. Prior to joining Mastercard, I graduated from Duke with a
            B.Sc in Statistics and minors in computer science and neuroscience.
            My other hobbies include playing the piano, cooking, and reading.
            Please feel free to contact me for any questions or comments!
          </span>
        </p>
        <div className="py-4">
          <div className="py-2">
            <button className="mr-1 rounded-full border-2 border-black px-2 py-1 hover:border-gray-500 hover:text-gray-500">
              <FaRegClock className="mx-1 inline-block align-middle " />
              <span className="align-middle">Book My Time</span>
            </button>
            <button className="ml-1 rounded-full border-2 border-black px-2 py-1 hover:border-gray-500 hover:text-gray-500">
              <FaRegEnvelope className="mx-1 inline-block align-middle" />
              <span className="align-middle">Email Me</span>
            </button>
          </div>
          <div className="py-4">
            <ul>
              <li className="mx-1 inline-block">
                <Link
                  href="https://www.instagram.com/keep_lifepieces/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-6 w-6 hover:text-gray-500" />
                </Link>
              </li>
              <li className="mx-2 inline-block">
                <Link
                  href="https://www.linkedin.com/in/yihan-shi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-6 w-6 hover:text-gray-500" />
                </Link>
              </li>
              <li className="mx-1 inline-block">
                <Link
                  href="https://github.com/ys262/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-6 w-6 hover:text-gray-500" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-32">
        <p>blabla</p>
      </div>
    </div>
  );
}
