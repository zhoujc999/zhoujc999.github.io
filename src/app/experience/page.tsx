import { MdWork, MdAlternateEmail } from "react-icons/md";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="lg:w-2/3 2xl:w-1/2">
      <span className="text-3xl font-medium">Experience</span>
      <ol className="space-y-4 pt-6 text-sm">
        <li className="rounded-md bg-white">
          <div className="w-auto px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image
                src="/icons/mastercard.jpg"
                alt="Logo"
                width={64}
                height={64}
              />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-5 w-5 align-bottom" />
                  <span className="font-semibold">Software Engineer</span>
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-5 w-5 align-bottom" />
                  Mastercard Data & Services
                </li>
                <li className="text-[#737373]">
                  <span className="mr-1">Aug 2023 – Present</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">Arlington, VA</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  Developing new web app features using .NET framework, such as
                  document controller, which is a central location for users to
                  look up, sort, edit, upload, and delete documents
                </li>
                <li className="px-1">
                  Implementing client-facing web front-end with React, directly
                  serving enterprise customers such as McDonald’s, Walmart, and
                  BofA
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li className="rounded-md bg-white">
          <div className="w-auto px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image
                src="/icons/carta_healthcare.jpg"
                alt="Logo"
                width={64}
                height={64}
              />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-5 w-5 align-bottom" />
                  <span className="font-semibold">
                    Data Science & Engineering Intern
                  </span>
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-5 w-5 align-bottom" />
                  Carta Healthcare
                </li>
                <li className="text-[#737373]">
                  <span className="mr-1">May 2022 – Aug 2022</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">San Mateo, CA</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  Defined and developed key metrics in data visualization
                  dashboards
                </li>
                <li className="px-1">
                  Collaborated with Product and Sales team to present dashboards
                  at a client-facing Product Demo
                </li>
                <li className="px-1">
                  Implemented comprehensive & robust data cleaning process to
                  reduce platform test errors systematically, reducing 30% of
                  the time bioinformaticians spent on housekeeping tasks
                </li>
                <li className="px-1">
                  Built, maintained, debugged infrastructure that streamlined
                  and scaled 100x patient profile simulation based on real-world
                  distribution to reduce manual labor
                </li>
                <li className="px-1">
                  Designed SQLAlchemy wrappers to scalably query OLAP
                  multi-dimensional array of data in PostgreSQL databases
                </li>
                <li className="px-1">
                  Integrated FreeMarker API with machine learning pipeline to
                  auto-generate free-text notes for NLP pre-training preparation
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li className="rounded-md bg-white">
          <div className="w-auto px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image
                src="/icons/duke_medicine.jpg"
                alt="Logo"
                width={64}
                height={64}
              />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-5 w-5 align-bottom" />
                  <span className="font-semibold">
                    Summer Data Science Fellow
                  </span>
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-5 w-5 align-bottom" />
                  Duke University, School of Medicine
                </li>
                <li className="text-[#737373]">
                  <span className="mr-1">Jun 2021 – Aug 2021</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">Durham, NC</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  Led a team of 3 undergraduate and postdoc students to craft a
                  rare disease genomic data science project end-to-end
                </li>
                <li className="px-1">
                  Identified 20 significant genes out of 35,000 using
                  generalized linear model and effect size shrinkage
                </li>
                <li className="px-1">
                  Publishing a manuscript (in review) and designing future
                  research projects with clinical researchers and pediatricians
                </li>
                <li className="px-1">
                  Mentored 2 incoming first-year researchers and drafted
                  biomedical data science starter projects
                </li>
              </ol>
            </div>
          </div>
        </li>
        <li className="rounded-md bg-white">
          <div className="w-auto px-6 py-4">
            <div className="my-2 flex shrink-0 flex-row items-center">
              <Image src="/icons/duke.jpg" alt="Logo" width={64} height={64} />
              <ol className="px-4">
                <li>
                  <MdWork className="mr-1 inline-block h-5 w-5 align-bottom" />
                  <span className="font-semibold">
                    Research & Teaching Assistant
                  </span>
                </li>
                <li>
                  <MdAlternateEmail className="mr-1 inline-block h-5 w-5 align-bottom" />
                  Duke University
                </li>
                <li className="text-[#737373]">
                  <span className="mr-1">Aug 2021 – Aug 2023</span>
                  <span className="mx-1 max-lg:hidden">|</span>
                  <span className="mx-1 max-lg:hidden">Durham, NC</span>
                </li>
              </ol>
            </div>
            <div className="my-1">
              <ol className="list-outside list-disc space-y-1 px-3">
                <li className="px-1">
                  Authored technical tutorial for doctors on recurrent event
                  survival analysis methods to examine large claim datasets
                </li>
                <li className="px-1">
                  Authored manuscript (in review) on the impact of confounding
                  medical interventions in electronic health records data
                </li>
              </ol>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}
