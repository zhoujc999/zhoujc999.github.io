import Image from "next/image";

export interface InterestContent {
  readonly imageSrc: string;
  readonly title: string;
}

export default function InterestCard({ imageSrc, title }: InterestContent) {
  return (
    <div className="rounded bg-white px-6 py-4 shadow-lg">
      <div className="flex flex-col items-center py-2">
        <Image
          className="mx-2 mb-1 h-max rounded"
          src={imageSrc}
          alt={title}
          width={64}
          height={64}
        />
        <div className="mt-1 text-center font-medium">{title}</div>
      </div>
    </div>
  );
}
