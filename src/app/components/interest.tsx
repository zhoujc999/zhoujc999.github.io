import InterestCard from "./interest-card";
import { Interests } from "../content/interest";

export default function Interest() {
  return (
    <div className="m-12">
      <h1 className="my-2 text-2xl font-normal">Interests</h1>
      <div className="my-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {Interests.map((interest, index) => (
          <InterestCard
            key={index}
            imageSrc={interest.imageSrc}
            title={interest.title}
          />
        ))}
      </div>
    </div>
  );
}
