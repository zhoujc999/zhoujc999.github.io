import { ResearchContent } from "../components/research-card";

const research1: ResearchContent = {
  imageSrc: "/icons/berkeley.jpg",
  position: "Graduate Researcher",
  company: "Berkeley EECS Department",
  description: "October 2020 – May 2021 | Berkeley, CA",
  details: [
    "Co-authored and published “WIP: The Cyber-Physical Immune \
      System” in Proceedings of the 2021 International Conference \
      on Embedded Software (EMSOFT ’21)",
    "Proposed a conceptual approach to secure Cyber-Physical Systems \
      (CPSs) by deploying an independent network of monitoring components \
      that adapts to the changing environment and reports threats or \
      anomalies",
    "Validated CPIS in the case of a vehicular cruise control system by \
      developing a simulation of the interaction between the vehicular \
      controllers and the physical environment",
  ],
};

const research2: ResearchContent = {
  imageSrc: "/icons/duke.jpg",
  position: "Undergraduate Researcher",
  company: "Duke University I³T Lab",
  description: "Jun 2020 – Aug 2020 | Arlington, VA",
  details: [
    "Developed a system that enables multiple edge-connected devices \
      to collaborate on image recognition tasks using Google’s ARCore \
      and Firebase platforms",
    "Implemented a module that determines whether the fields-of-view of \
      multiple cameras collide using ARCore’s CloudAnchors",
    "Investigated the spatial and temporal correlations in the images \
      captured by devices from different positions and of heterogeneous \
      quality to improve recognition accuracy",
  ],
};

export const Researches: ResearchContent[] = [research1, research2];
