import type { ImageMetadata } from "astro";

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
}

// Newest first. The page renders entries in this order.
// Roles, dates, and bullets match the résumé PDF; change both together.
export const experiences = [
  {
    slug: "ramp",
    role: "Senior Software Engineer",
    company: "Ramp",
    period: "Aug 2024 – Present",
    location: "New York, NY",
    logo: rampLogo,
    details: [
      "Led decomposition of Ramp’s Python monolith into 300+ modules with enforced dependency boundaries, laying the foundation for teams to independently build, test, and release code",
      "Wrote a static-analysis tool that maps intermodule dependencies and blocks changes that violate boundaries in pre-commit and CI checks on every change",
      "Built payment features using Temporal workflows, including bulk payouts and business onboarding in Australia and Singapore",
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
    details: [
      "Ran cross-functional analysis with operations, hardware, and autonomy teams to improve vehicle startup speed and reliability",
      "Architected and implemented an ETL pipeline using Google Pub/Sub to process 1M+ raw vehicle events daily and generate fleet reliability and performance metrics",
      "Created and deployed a fault-injection framework to scalably test 70K+ failure modes across the autonomy stack in simulation, supporting risk assessment and mitigation",
      "Developed a framework for runtime performance analysis of autonomy modules in cloud-based simulation, reducing turnaround time by 50% through parallel processing",
      "Revamped weekly onboard systems reporting with Kubernetes and Retool, reducing preparation time by 60%",
    ],
  },
  {
    slug: "mastercard",
    role: "Software Engineering Intern",
    company: "Mastercard Data & Services",
    period: "Jun 2020 – Aug 2020",
    location: "Arlington, VA",
    logo: mastercardLogo,
    details: [
      "Improved Test & Learn’s flexibility in matching test and control groups and added a new analysis method in the test simulator",
      "Implemented usability improvements including front-end redesign for the test simulator in React and TypeScript",
      "Set up a workflow that uses Splunk to query for persistent unit test failures in Jenkins logs and notifies teams through Slack",
    ],
  },
  {
    slug: "nutanix",
    role: "Software Engineering Intern",
    company: "Nutanix",
    period: "May 2019 – Aug 2019",
    location: "San Jose, CA",
    logo: nutanixLogo,
    details: [
      "Developed a gRPC-based microservice for virtual machine (VM) backup management, enabling asynchronous backup scheduling between VM hypervisors and the central backup service",
      "Redesigned the backup workflow to clone VMs into images, improving data integrity over traditional immutable snapshots",
    ],
  },
] satisfies Experience[];
