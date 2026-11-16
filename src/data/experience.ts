import type { ImageMetadata } from "astro";

import dcusLogo from "../assets/logos/dcus.jpg";
import dukeCsLogo from "../assets/logos/duke_cs.jpg";
import imreLogo from "../assets/logos/imre.jpg";
import mastercardLogo from "../assets/logos/mastercard.jpg";
import nuroLogo from "../assets/logos/nuro.jpg";
import nutanixLogo from "../assets/logos/nutanix.jpg";
import rampLogo from "../assets/logos/ramp.jpg";

export interface Experience {
  slug: string;
  role: string;
  company: string;
  period: string;
  location: string;
  logo: ImageMetadata;
  details: string[];
  featured?: boolean;
}

// Newest first. The page renders entries in this order.
export const experiences = [
  {
    slug: "ramp",
    role: "Senior Software Engineer",
    company: "Ramp",
    period: "Aug 2024 – Present",
    location: "New York, NY",
    logo: rampLogo,
    featured: true,
    details: [
      "Led decomposition of Ramp’s Python monolith into 300+ modules with enforced dependency boundaries, laying the foundation for teams to independently build, test, and release code",
      "Wrote a static-analysis tool that maps intermodule dependencies and blocks changes that violate boundaries in pre-commit and CI checks on every change",
      "Built payment features on Temporal workflows, including bulk payouts and onboarding for businesses in Australia and Singapore",
      "Rebuilt the on-demand test environments engineers use before release, using AWS with Terraform, Temporal, and Kafka",
    ],
  },
  {
    slug: "nuro",
    role: "Software Engineer",
    company: "Nuro",
    period: "Jun 2021 – Aug 2024",
    location: "Mountain View, CA",
    logo: nuroLogo,
    featured: true,
    details: [
      "Ran cross-functional analysis with operations, hardware, and autonomy teams to improve vehicle startup speed and reliability",
      "Architected and implemented an ETL pipeline that processes 1M+ raw vehicle events daily from the fleet through Google Pub/Sub into reliability and performance metrics",
      "Created and deployed a fault-injection framework to scalably test 70K+ failure modes across the autonomy stack in the simulation environment, instrumental in risk assessment and mitigation",
      "Productionized and maintained a framework to enable runtime performance analysis of autonomy modules in cloud-based simulation, achieving a 50% reduction in turnaround time through process parallelization",
      "Revamped the weekly onboard systems report, cutting preparation time by 60% with Kubernetes and ReTool for enhanced process efficiency",
    ],
  },
  {
    slug: "mastercard",
    role: "Software Engineer Intern",
    company: "Mastercard Data & Services",
    period: "Jun 2020 – Aug 2020",
    location: "Arlington, VA",
    logo: mastercardLogo,
    details: [
      "Improved the Test & Learn software’s flexibility in matching test and control groups and added a new analysis method in the test simulator",
      "Implemented usability improvements including front-end redesign for the test simulator in React and TypeScript",
      "Set up a workflow that uses Splunk to query for persistent unit test failures in Jenkins logs and notifies teams through Slack",
    ],
  },
  {
    slug: "nutanix",
    role: "Software Engineer Intern",
    company: "Nutanix",
    period: "May 2019 – Aug 2019",
    location: "San Jose, CA",
    logo: nutanixLogo,
    details: [
      "Engineered a gRPC-based microservice to streamline Virtual Machine (VM) backup management, facilitating asynchronous backup scheduling among VM hypervisors and the central backup service",
      "Revised the backup process by implementing a new workflow that clones VM instances to images, improving data integrity compared to traditional immutable snapshots",
    ],
  },
  {
    slug: "duke-cs-ta",
    role: "Undergraduate TA",
    company: "Duke University Dept. of CS",
    period: "May 2018 – Dec 2019",
    location: "Durham, NC",
    logo: dukeCsLogo,
    details: [
      "Assisted in teaching CS 250: Computer Architecture and CS 230: Discrete Mathematics for CS",
      "Duties include: grading homework assignments and exams; leading out of class recitation sections with 25 students; holding office hours; preparing study materials; responding to student questions",
      "Topics covered include: C, assembly (MIPS), processor design, memory and I/O",
    ],
  },
  {
    slug: "duke-china-us-summit",
    role: "Head of Technology",
    company: "Duke China-US Summit",
    period: "May 2018 – Sep 2018",
    location: "Durham, NC",
    logo: dcusLogo,
    details: [
      "Invited more than 5 academics and industry experts to serve as guest panelists for the annual summit, which focused on opportunities and challenges in the age of big data",
      "Continued maintenance and improvement of the summit website, which was developed with Bootstrap framework and deployed on Netlify platform",
    ],
  },
  {
    slug: "imre",
    role: "Research Assistant",
    company: "IMRE",
    period: "Jan 2015 – Apr 2015",
    location: "Singapore",
    logo: imreLogo,
    details: [
      "Devised a novel approach to synthesize a group of related compounds with AIE properties and characterized them using UV-Vis and IR spectroscopy",
      "Investigated the prospects of developing such compounds for trace explosive detection and fabricated a film-based prototype to evaluate the efficacy of such applications",
    ],
  },
] satisfies Experience[];
