import {} from "react-icons/fa";
import Link from "next/link";
import { MdWork, MdAlternateEmail } from "react-icons/md";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="">
      <ol>
        <li>
          <div className="my-2 bg-blue-100">
            <div className="flex flex-row items-center p-4 shrink-0">
              <Image src="/nuro.jpg" alt="Logo" width={64} height={64} />
              <ol className="px-2">
                <li><MdWork className="h-6 w-6 mx-1 inline-block align-bottom" />Software Engineer</li>
                <li><MdAlternateEmail className="h-6 w-6 mx-1 inline-block align-bottom" />Mastercard</li>
                <li><span className="text-gray-500 mx-1">June 2021 – Present</span><span className="text-gray-500 mx-1 max-lg:hidden">|</span><span className="text-gray-500 mx-1 max-lg:hidden">Mountain View, CA</span></li>
              </ol>
            </div>
            <p>Defined and developed key metrics in data visualization dashboards; Collaborated with Product and Sales team to present dashboards at a client-facing Product Demo</p>
          </div>
        </li>
        <li className="my-2 h-24 bg-red-500">2</li>
        <li className="my-2 h-24 bg-blue-500">3</li>
        <li className="my-2 h-24 bg-red-500">4</li>
      </ol>
    </div>
  );
}
