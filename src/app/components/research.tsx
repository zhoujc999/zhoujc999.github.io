import ResearchCard from "./research-card";
import { Researches } from "../content/research";

export default function Research() {
  return (
    <div className="m-12">
      <h1 className="my-2 text-2xl font-normal">Research</h1>
      <div className="my-4 grid grid-cols-1 gap-6 xl:grid-cols-2">
        {Researches.map((research, index) => (
          <ResearchCard
            key={index}
            imageSrc={research.imageSrc}
            position={research.position}
            company={research.company}
            description={research.description}
            details={research.details}
          />
        ))}
      </div>
    </div>
  );
}
