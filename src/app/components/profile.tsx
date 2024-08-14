import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaFileLines,
  FaLinkedin,
  FaWalkieTalkie,
  FaCity,
} from "react-icons/fa6";

export default function Profile() {
  const linkStyle: string =
    "text-blue-600 visited:text-purple-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-900";
  return (
    <div className="items-left p-6 flex h-full flex-col">
      <Image
        className="my-4 self-center rounded-full"
        src="/photos/profile.jpg"
        alt="Profile"
        width={160}
        height={160}
      />

      <h1 className="my-2 self-center text-3xl font-medium">Jingchao Zhou</h1>

      <ol className=" my-4 flex flex-col gap-4">
        <li className="flex flex-row items-center gap-4">
          <FaGithub className="h-6 w-6 fill-gray-500" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
            href="https://github.com/zhoujc999"
          >
            @zhoujc999
          </Link>
        </li>
        <li className="flex flex-row items-center gap-4">
          <FaCity className="h-6 w-6 fill-gray-500" />
          Mountain View, CA
        </li>
        <li className="flex flex-row items-center gap-4">
          <FaFileLines className="h-6 w-6 fill-gray-500" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
            href="/documents/resume.pdf"
          >
            Résumé
          </Link>
        </li>
        <li className="flex flex-row items-center gap-4">
          <FaLinkedin className="h-6 w-6 fill-gray-500" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
            href="https://www.linkedin.com/in/jingchaozhou/"
          >
            jingchaozhou
          </Link>
        </li>
        <li className="flex flex-row items-center gap-4">
          <FaWalkieTalkie className="h-6 w-6 fill-gray-500" />
          KO4FUI
        </li>
      </ol>

      <div className="my-2">
        <div className="my-2">
          <h2 className="my-1 text-lg font-medium">UC Berkeley</h2>
          <ul className="list-inside list-disc">
            <li>Class of 2021</li>
            <li>M.Eng. in EECS</li>
            <li>Berkeley, CA</li>
          </ul>
        </div>

        <div className="my-4">
          <h2 className="my-1 text-lg font-medium">Duke University</h2>
          <ul className="list-inside list-disc">
            <li>Class of 2020</li>
            <li>B.S. in CS</li>
            <li>B.S. in Economics</li>
            <li>Minor in Math</li>
            <li>Durham, NC</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
