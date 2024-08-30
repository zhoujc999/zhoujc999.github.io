import { ExperienceContent } from "../components/experience-card";

const experience1: ExperienceContent = {
  imageSrc: "/icons/nuro.jpg",
  position: "Software Engineer",
  company: "Nuro",
  description: "Jun 2021 – Aug 2024 | Mountain View, CA",
  details: [
    "Led the analysis efforts for improving the speed and \
      reliability of the vehicle start-up process, which \
      involved cross-functional collaboration with stakeholders \
      from operations, hardware, and autonomy teams",
    "Architected and implemented an Extract, Transform, Load (ETL) \
      pipeline that processes 1M+ raw vehicle data daily from the \
      fleet through **Google Pub/Sub** into reliability and performance \
      metrics",
    "Created and deployed a fault-injection framework to scalably \
      test 70K+ failure modes across the autonomy stack in the \
      simulation environment, instrumental in risk assessment and \
      mitigation",
    "Productionized and maintained a framework to enable runtime \
      performance analysis of autonomy modules in cloud-based \
      simulation, achieving a 50% reduction in turnaround time \
      through process parallelization",
    "Revamped the weekly onboard systems report, cutting preparation \
      time by 60% with **Kubernetes** and **ReTool** for enhanced \
      process efficiency",
  ],
};

const experience2: ExperienceContent = {
  imageSrc: "/icons/mastercard.jpg",
  position: "Software Engineer Intern",
  company: "Mastercard Data & Services",
  description: "Jun 2020 – Aug 2020 | Arlington, VA",
  details: [
    "Improved the Test & Learn software’s flexibility in matching \
      test and control groups and added a new analysis method in the \
      test simulator",
    "Implemented usability improvements including front-end redesign \
      for the test simulator in **React** and **TypeScript**",
    "Set up a workflow that uses **Splunk** to query for persistent unit \
      test failures in Jenkins logs and notifies teams through Slack",
  ],
};

const experience3: ExperienceContent = {
  imageSrc: "/icons/nutanix.jpg",
  position: "Software Engineer Intern",
  company: "Nutanix",
  description: "May 2019 – Aug 2019 | San Jose, CA",
  details: [
    " Engineered a **gRPC**-based microservice to streamline Virtual \
      Machine (VM) backup management, facilitating asynchronous backup \
      scheduling among VM hypervisors and the central backup service",
    "Revised the backup process by implementing a new workflow that clones \
      VM instances to images, improving data integrity compared to \
      traditional immutable snapshots",
  ],
};

const experience4: ExperienceContent = {
  imageSrc: "/icons/duke_cs.jpg",
  position: "Undergraduate TA",
  company: "Duke University Dept. of CS",
  description: "May 2018 – Dec 2019 | Durham, NC",
  details: [
    "Assisted in teaching *CS 250: Computer Architecture* and \
      *CS 230: Discrete Mathematics for CS*",
    "Duties include: grading homework assignments and exams; leading \
      out of class recitation sections with 25 students; holding office \
      hours; preparing study materials; responding to student questions",
    "Topics covered include: C, assembly (MIPS), processor design, memory \
      and I/O",
  ],
};

const experience5: ExperienceContent = {
  imageSrc: "/icons/dcus.jpg",
  position: "Head of Technology",
  company: "Duke China-US Summit",
  description: "May 2018 – Sep 2018 | Durham, NC",
  details: [
    "Invited more than 5 academics and industry experts to serve as \
      guest panelists for the annual summit, which focused on opportunities \
      and challenges in the age of big data",
    "Continued maintenance and improvement of the summit website, which \
      was developed with Bootstrap framework and deployed on Netlify platform",
  ],
};

const experience6: ExperienceContent = {
  imageSrc: "/icons/imre.jpg",
  position: "Research Assistant",
  company: "IMRE",
  description: "Jan 2015 – Apr 2015 | Singapore",
  details: [
    "Devised a novel approach to synthesize a group of related \
      compounds with AIE properties and characterized them using \
      UV-Vis and IR spectroscopy",
    "Investigated the prospects of developing such compounds for \
      trace explosive detection and fabricated a film-based prototype \
      to evaluate the efficacy of such applications",
  ],
};

export const Experiences: ExperienceContent[] = [
  experience1,
  experience2,
  experience3,
  experience4,
  experience5,
  experience6,
];
