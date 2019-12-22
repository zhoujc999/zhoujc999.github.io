const experience1 = {
  experienceHeader: {
    avatarUrl: "../assets/duke.jpg",
    position: "Undergraduate Researcher",
    company: "Duke University I^3 Lab",
    duration: "August 2019 – Present",
    location: "Durham, NC",
  },
  experienceBody: [
    "Developing systems that allow multiple edge-connected devices to collaborate on image recognition tasks using ARCore platform",
    "Investigating the spatial and temporal correlations in the images captured by devices from different positions and of heterogeneous quality to improve recognition accuracy"
  ],
}

const experience2 = {
  experienceHeader: {
    avatarUrl: "../assets/nutanix.jpg",
    position: "Software Engineer Intern",
    company: "Nutanix (Backup and DR)",
    duration: "May 2019 – August 2019",
    location: "San Jose, CA",
  },
  experienceBody: [
    "Created a new workflow to manage clones of VM images via REST APIs as part of the transition to Backup-as-a-Service model while reducing space usage by 80%",
    "Set up a secure channel for RPCs between VM hypervisor and storage services to enable asynchronous backup scheduling using Google's gRPC framework and Protobuf language"
  ],
}

const experience3 = {
  experienceHeader: {
    avatarUrl: "../assets/duke_cs.jpg",
    position: "Undergraduate Teaching Assistant",
    company: "Duke University Department of CS",
    duration: "May 2018 – December 2019",
    location: "Durham, NC",
  },
  experienceBody: [
    "Assisted in teaching CS 250: Computer Architecture and CS 230: Discrete Mathematics for CS",
    "Duties include: grading homework assignments and exams; leading out of class recitation sections with 25 students; holding office hours; preparing study materials; responding to student questions"
  ],
}

const experience4 = {
  experienceHeader: {
    avatarUrl: "../assets/dcus.jpg",
    position: "Head of Technology",
    company: "Duke China-US Summit",
    duration: "May 2018 – September 2018",
    location: "Durham, NC",
  },
  experienceBody: [
    "Invited more than 5 academics and industry experts to serve as guest panelists for the annual summit, which focused on opportunities and challenges in the age of big data",
    "Built summit website with GatsbyJS and Bootstrap before deploying it on Netlify platform"
  ],
}

export const experiences = [
  experience1, experience2, experience3, experience4
]

