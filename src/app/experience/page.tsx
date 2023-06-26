import {} from "react-icons/fa";
import Link from "next/link";
import { MdWork, MdAlternateEmail } from "react-icons/md";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="lg:w-2/3 2xl:w-1/2">
      <ol className="space-y-4">
        <li className="bg-[#e6dfd8]">
          <div className="w-auto px-6 py-4">
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
                <li className="text-[#756770]">
                  <span className="mr-1">May 2022 – Aug 2022</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">San Mateo, CA</span>
                </li>
              </ol>
            </div>
            <div className="my-2">
              <ol className="list-inside list-disc space-y-1">
                <li className="">
                  Defined and developed key metrics in data visualization
                  dashboards
                </li>
                <li className="">
                  Collaborated with Product and Sales team to present dashboards
                  at a client-facing Product Demo
                </li>
                <li className="">
                  Implemented comprehensive & robust data cleaning process to
                  reduce platform test errors systematically, reducing 30% of
                  the time bioinformaticians spent on housekeeping tasks
                </li>
                <li className="">
                  Built, maintained, debugged infrastructure that streamlined
                  and scaled 100x patient profile simulation based on real-world
                  distribution to reduce manual labor
                </li>
                <li className="">
                  Designed SQLAlchemy wrappers to scalably query OLAP
                  multi-dimensional array of data in PostgreSQL databases
                </li>
                <li className="">
                  Integrated FreeMarker API with machine learning pipeline to
                  auto-generate free-text notes for NLP pre-training preparation
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li className="bg-[#e6dfd8]">
          <div className="w-auto px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image src="/nuro.jpg" alt="Logo" width={64} height={64} />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-6 w-6 align-bottom" />
                  Summer Data Science Fellow
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-6 w-6 align-bottom" />
                  Duke University, School of Medicine
                </li>
                <li className="text-[#756770]">
                  <span className="mr-1">Jun 2021 – Aug 2021</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">Durham, NC</span>
                </li>
              </ol>
            </div>
            <div className="my-2">
              <ol className="list-inside list-disc space-y-1">
                <li className="">
                  Led a team of 3 undergraduate and postdoc students to craft a
                  rare disease genomic data science project end-to-end
                </li>
                <li className="">
                  Identified 20 significant genes out of 35,000 using
                  generalized linear model and effect size shrinkage
                </li>
                <li className="">
                  Publishing a manuscript (in review) and designing future
                  research projects with clinical researchers and pediatricians
                </li>
                <li className="">
                  Mentored 2 incoming first-year researchers and drafted
                  biomedical data science starter projects
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li className="bg-[#e6dfd8]">
          <div className="w-auto px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image src="/nuro.jpg" alt="Logo" width={64} height={64} />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-6 w-6 align-bottom" />
                  Research & Teaching Assistant
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-6 w-6 align-bottom" />
                  Duke University
                </li>
                <li className="text-[#756770]">
                  <span className="mr-1">Aug 2021 – Aug 2023</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">Durham, NC</span>
                </li>
              </ol>
            </div>
            <div className="my-2">
              <ol className="list-inside list-disc space-y-1">
                <li className="">
                  Authored technical tutorial for doctors on recurrent event
                  survival analysis methods to examine large claim datasets
                </li>
                <li className="">
                  Authored manuscript (in review) on the impact of confounding
                  medical interventions in electronic health records data
                </li>
              </ol>
            </div>
          </div>
        </li>
      </ol>
      <button className="mx-3 my-6">View Full Résumé</button>
    </div>
  );
}
