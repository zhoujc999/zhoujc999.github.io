export interface ImpactMetric {
  /** The headline figure, e.g. "300+". */
  value: string;
  /** What the figure counts, e.g. "modules". */
  unit: string;
  caption: string;
}

export interface Profile {
  name: string;
  role: string;
  employer: string;
  location: string;
  roleLabel: string;
  introduction: string;
  portraitAlt: string;
  metaDescription: string;
  socialRoleLine: string;
  callsign: string;
  links: {
    github: string;
    linkedin: string;
    resume: string;
  };
  metrics: ImpactMetric[];
  about: string;
  interests: {
    technical: string[];
    personal: string[];
  };
}

// This module is also imported by scripts/generate-og.mjs through Node's
// type stripping, so keep it free of image imports and non-erasable syntax.
export const profile: Profile = {
  name: "Jingchao Zhou",
  role: "Senior Software Engineer",
  employer: "Ramp",
  location: "New York, NY",
  roleLabel: "Senior Software Engineer at Ramp · New York, NY",
  introduction:
    "I build the infrastructure that lets engineering teams ship independently. At Ramp, I led the decomposition of a Python monolith into 300+ modules with enforced dependency boundaries. Before that, I built data pipelines and simulation testing for autonomous vehicles at Nuro.",
  portraitAlt: "Portrait of Jingchao Zhou",
  metaDescription:
    "Jingchao Zhou is a Senior Software Engineer at Ramp in New York, building developer infrastructure and payment systems. Previously at Nuro. M.Eng., UC Berkeley.",
  socialRoleLine: "Senior Software Engineer at Ramp",
  callsign: "KO4FUI",
  links: {
    github: "https://github.com/zhoujc999",
    linkedin: "https://www.linkedin.com/in/jingchaozhou/",
    resume: "/jingchao-zhou-resume.pdf",
  },
  metrics: [
    {
      value: "300+",
      unit: "modules",
      caption: "Carved out of Ramp’s Python monolith, with dependency boundaries enforced in CI.",
    },
    {
      value: "1M+",
      unit: "vehicle events processed daily",
      caption: "By the ETL pipeline behind Nuro’s fleet reliability and performance metrics.",
    },
    {
      value: "70K+",
      unit: "failure modes tested",
      caption: "Across Nuro’s autonomy stack in simulation, using a fault-injection framework.",
    },
  ],
  about:
    "Hi, my name is Jingchao Zhou and I’m currently a senior software engineer at Ramp. Prior to joining Ramp, I have worked at Nuro, Mastercard and Nutanix. I graduated from UC Berkeley with an M.Eng. degree in EECS. As an undergraduate, I majored in computer science and economics, and minored in mathematics at Duke University. Some of my areas of interest in CS include IoT, machine learning, augmented reality, and distributed systems. When I’m not busy with work, I enjoy a number of other hobbies and activities in my free time — especially skiing, cooking, and traveling. For any questions or comments, please feel free to contact me!",
  interests: {
    technical: [
      "Machine Learning",
      "Augmented Reality",
      "Distributed Systems",
      "Computer Architecture",
    ],
    personal: ["Skiing", "Cooking", "Traveling"],
  },
};
