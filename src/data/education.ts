export interface Education {
  slug: string;
  school: string;
  classOf: string;
  location: string;
  credentials: string[];
}

// Newest first.
export const education = [
  {
    slug: "uc-berkeley",
    school: "UC Berkeley",
    classOf: "Class of 2021",
    location: "Berkeley, CA",
    credentials: ["M.Eng. in EECS"],
  },
  {
    slug: "duke",
    school: "Duke University",
    classOf: "Class of 2020",
    location: "Durham, NC",
    credentials: ["B.S. in CS", "B.S. in Economics", "Minor in Math"],
  },
] satisfies Education[];
