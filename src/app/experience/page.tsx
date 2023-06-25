import {} from "react-icons/fa";
import Link from "next/link";
import { MdWork, MdAlternateEmail } from "react-icons/md";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="">
      <ol>
        <li className="my-4 first:mt-0 last:mb-0">
          <div className="w-auto bg-blue-100 px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image src="/nuro.jpg" alt="Logo" width={64} height={64} />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-6 w-6 align-bottom" />
                  Data Science & Engineering Intern
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-6 w-6 align-bottom" />
                  Carta Healthcare
                </li>
                <li>
                  <span className="mr-1 text-gray-500">
                    May 2022 – Aug 2022
                  </span>
                  <span className="mx-1 text-gray-500 max-lg:hidden">|</span>
                  <span className="mx-1 text-gray-500 max-lg:hidden">
                    San Mateo, CA
                  </span>
                </li>
              </ol>
            </div>
            <div className="mx-3 my-2">
              <ol className="list-disc">
                <li className="py-0.5 first:pt-0 last:pb-0">
                  Defined and developed key metrics in data visualization
                  dashboards
                </li>
                <li className="py-0.5 first:pt-0 last:pb-0">
                  Collaborated with Product and Sales team to present dashboards
                  at a client-facing Product Demo
                </li>
                <li className="py-0.5 first:pt-0 last:pb-0">
                  Implemented comprehensive & robust data cleaning process to
                  reduce platform test errors systematically, reducing 30% of
                  the time bioinformaticians spent on housekeeping tasks
                </li>
                <li className="py-0.5 first:pt-0 last:pb-0">
                  Built, maintained, debugged infrastructure that streamlined
                  and scaled 100x patient profile simulation based on real-world
                  distribution to reduce manual labor
                </li>
                <li className="py-0.5 first:pt-0 last:pb-0">
                  Designed SQLAlchemy wrappers to scalably query OLAP
                  multi-dimensional array of data in PostgreSQL databases
                </li>
                <li className="py-0.5 first:pt-0 last:pb-0">
                  Integrated FreeMarker API with machine learning pipeline to
                  auto-generate free-text notes for NLP pre-training preparation
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li className="my-4 first:mt-0 last:mb-0">
          <div className="w-auto bg-blue-100 px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image src="/nuro.jpg" alt="Logo" width={64} height={64} />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-6 w-6 align-bottom" />
                  Summer Data Science Fellow
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-6 w-6 align-bottom" />
                  Carta Healthcare
                </li>
                <li>
                  <span className="mr-1 text-gray-500">
                    May 2022 – Aug 2022
                  </span>
                  <span className="mx-1 text-gray-500 max-lg:hidden">|</span>
                  <span className="mx-1 text-gray-500 max-lg:hidden">
                    San Mateo, CA
                  </span>
                </li>
              </ol>
            </div>
            <div className="mx-3 my-2">
              <ol className="list-disc">
                <li className="py-0.5 first:pt-0 last:pb-0">
                  Defined and developed key metrics in data visualization
                  dashboards
                </li>
                <li className="py-0.5 first:pt-0 last:pb-0">
                  Collaborated with Product and Sales team to present dashboards
                  at a client-facing Product Demo
                </li>
                <li className="py-0.5 first:pt-0 last:pb-0">
                  Implemented comprehensive & robust data cleaning process to
                  reduce platform test errors systematically, reducing 30% of
                  the time bioinformaticians spent on housekeeping tasks
                </li>
                <li className="py-0.5 first:pt-0 last:pb-0">
                  Built, maintained, debugged infrastructure that streamlined
                  and scaled 100x patient profile simulation based on real-world
                  distribution to reduce manual labor
                </li>
                <li className="py-0.5 first:pt-0 last:pb-0">
                  Designed SQLAlchemy wrappers to scalably query OLAP
                  multi-dimensional array of data in PostgreSQL databases
                </li>
                <li className="py-0.5 first:pt-0 last:pb-0">
                  Integrated FreeMarker API with machine learning pipeline to
                  auto-generate free-text notes for NLP pre-training preparation
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li className="my-4 bg-blue-500 first:mt-0 last:mb-0">3</li>
        <li className="my-4 bg-red-500 first:mt-0 last:mb-0">4</li>
      </ol>
    </div>
  );
}
