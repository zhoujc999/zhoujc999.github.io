import {} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <ol>
        <li>
          <div className="my-2 h-24 bg-blue-500">
            <div className="flex flex-row place-content-between items-center p-4">
              <Image src="./next.svg" alt="Logo" width={48} height={48} />
            </div>
          </div>
        </li>
        <li className="my-2 h-24 bg-red-500">2</li>
        <li className="my-2 h-24 bg-blue-500">3</li>
        <li className="my-2 h-24 bg-red-500">4</li>
      </ol>
    </div>
  );
}
