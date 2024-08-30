import Image from "next/image";
import { FaBriefcase, FaAt } from "react-icons/fa6";
import Markdown from "react-markdown";

export interface ExperienceContent {
  readonly imageSrc: string;
  readonly position: string;
  readonly company: string;
  readonly description: string;
  readonly details: string[];
}

export default function ExperienceCard({
  imageSrc,
  position,
  company,
  description,
  details,
}: ExperienceContent) {
  return (
    <div className="rounded bg-white px-6 py-4 shadow-lg">
      <div className="flex flex-row items-center py-2">
        <Image
          className="mx-2 h-max rounded"
          src={imageSrc}
          alt={company}
          width={64}
          height={64}
        />
        <ul className="p-2 leading-tight">
          <li className="flex flex-row items-center gap-2">
            <FaBriefcase />
            <h4 className="font-semibold">{position}</h4>
          </li>
          <li className="flex flex-row items-center gap-2">
            <FaAt />
            <h5 className="font-medium">{company}</h5>
          </li>
          <li className="text-[#5f5f5f]">{description}</li>
        </ul>
      </div>
      <ul className="list-disc space-y-1 pl-6 text-sm">
        {details.map((detail, index) => (
          <li key={index}>
            <Markdown>{detail}</Markdown>
          </li>
        ))}
      </ul>
    </div>
  );
}
