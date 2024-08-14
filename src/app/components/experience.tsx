import ExperienceCard from "./experience-card";
import { Experiences } from "../content/experience";

export default function Experience() {
  return (
    <div className="m-12">
      <h1 className="my-2 text-2xl font-normal">Experience</h1>
      <div className="my-4 grid grid-cols-1 gap-6 xl:grid-cols-2">
        {Experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            imageSrc={experience.imageSrc}
            position={experience.position}
            company={experience.company}
            description={experience.description}
            details={experience.details}
          />
        ))}
      </div>
    </div>
  );
}
