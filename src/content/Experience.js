const experience1 = {
  experienceHeader: {
    avatarUrl: "/static/nuro.jpg",
    position: "Software Engineer",
    company: "Nuro",
    duration: "June 2021 – Present",
    location: "Mountain View, CA",
  },
  experienceBody: [
    "Worked cross-team with TPMs and TLs to reduce bot boot-up time, utilizing data-driven approaches to discover and resolve issues from on-road operations",
    "Built and productionized a streaming data pipeline that ingests real-time telemetry messages from individual bots through Google Pub/Sub and uploads the processed and fleet-aggregated data to Google BigQuery",
    "Created and deployed a service to run large-scale (70k+ parallel workloads) simulation testing and evaluation of failure modes across the autonomy stack, using Nuro's proprietary batch task execution service",
    "Designed and implemented a framework to enable runtime performance analysis of autonomy modules in cloud-based simulation",
    "Revamped the weekly onboard systems report and reduced the time spent generating the report by 60+%, leveraging ReTool dashboards and Kubernetes",
],
};
const experience2 = {
  experienceHeader: {
    avatarUrl: "/static/mastercard.jpg",
    position: "Software Engineer Intern",
    company: "Mastercard Data & Services",
    duration: "June 2020 – August 2020",
    location: "Arlington, VA",
  },
  experienceBody: [
    "Improved the Test & Learn software’s flexibility in matching test and control groups and added a new analysis method in the test simulator",
    "Implemented usability improvements including front-end redesign for the test simulator in React and TypeScript",
    "Set up a workflow that uses Splunk to query for persistent unit test failures in Jenkins logs and notifies teams through Slack",
  ],
};

const experience3 = {
  experienceHeader: {
    avatarUrl: "/static/nutanix.jpg",
    position: "Software Engineer Intern",
    company: "Nutanix",
    duration: "May 2019 – August 2019",
    location: "San Jose, CA",
  },
  experienceBody: [
    "Developed a microservice using gRPC to manage VM backups and enable asynchronous backup scheduling between VM hypervisors and the backup service",
    "Implemented a new backup workflow that clones a VM instance as an image instead of taking an immutable snapshot",
  ],
};

const experience4 = {
  experienceHeader: {
    avatarUrl: "/static/duke_cs.jpg",
    position: "Undergraduate Teaching Assistant",
    company: "Duke University Department of CS",
    duration: "May 2018 – December 2019",
    location: "Durham, NC",
  },
  experienceBody: [
    "Assisted in teaching CS 250: Computer Architecture and CS 230: Discrete Mathematics for CS",
    "Duties include: grading homework assignments and exams; leading out of class recitation sections with 25 students; holding office hours; preparing study materials; responding to student questions",
    "Topics covered include: C, assembly (MIPS), processor design, memory and I/O",
  ],
};

const experience5 = {
  experienceHeader: {
    avatarUrl: "/static/dcus.jpg",
    position: "Head of Technology",
    company: "Duke China-US Summit",
    duration: "May 2018 – September 2018",
    location: "Durham, NC",
  },
  experienceBody: [
    "Invited more than 5 academics and industry experts to serve as guest panelists for the annual summit, which focused on opportunities and challenges in the age of big data",
    "Continued maintenance and improvement of the summit website, which was developed with Bootstrap framework and deployed on Netlify platform",
  ],
};

const experience6 = {
  experienceHeader: {
    avatarUrl: "/static/imre.jpg",
    position: "Research Assistant",
    company: "Institute of Materials Research and Engineering",
    duration: "January 2015 – April 2015",
    location: "Singapore",
  },
  experienceBody: [
    "Devised a novel approach to synthesize a group of related compounds with AIE properties and characterized them using UV-Vis and IR spectroscopy",
    "Investigated the prospects of developing such compounds for trace explosive detection and fabricated a film-based prototype to evaluate the efficacy of such applications",
  ],
};

export const experiences = [
  experience1,
  experience2,
  experience3,
  experience4,
  experience5,
  experience6,
];
