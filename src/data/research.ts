import type { ImageMetadata } from "astro";

import berkeleyLogo from "../assets/logos/berkeley.jpg";
import dukeLogo from "../assets/logos/duke.jpg";

export interface Publication {
  title: string;
  venue: string;
  href: string;
}

export interface Research {
  slug: string;
  role: string;
  institution: string;
  period: string;
  location: string;
  logo: ImageMetadata;
  details: string[];
  publication?: Publication;
}

// Newest first. The page renders entries in this order.
export const research = [
  {
    slug: "berkeley-eecs",
    role: "Graduate Researcher",
    institution: "Berkeley EECS Department",
    period: "Oct 2020 – May 2021",
    location: "Berkeley, CA",
    logo: berkeleyLogo,
    publication: {
      title: "WIP: The Cyber-Physical Immune System",
      venue: "Proceedings of the 2021 International Conference on Embedded Software (EMSOFT ’21)",
      href: "https://doi.org/10.1145/3477244.3477621",
    },
    details: [
      "Proposed a conceptual approach to secure Cyber-Physical Systems (CPSs) by deploying an independent network of monitoring components that adapts to the changing environment and reports threats or anomalies",
      "Validated CPIS in the case of a vehicular cruise control system by developing a simulation of the interaction between the vehicular controllers and the physical environment",
    ],
  },
  {
    slug: "duke-i3t-lab",
    role: "Undergraduate Researcher",
    institution: "Duke University I³T Lab",
    period: "Aug 2019 – May 2020",
    location: "Durham, NC",
    logo: dukeLogo,
    details: [
      "Developed a system that enables multiple edge-connected devices to collaborate on image recognition tasks using Google’s ARCore and Firebase platforms",
      "Implemented a module that determines whether the fields-of-view of multiple cameras collide using ARCore’s CloudAnchors",
      "Investigated the spatial and temporal correlations in the images captured by devices from different positions and of heterogeneous quality to improve recognition accuracy",
    ],
  },
] satisfies Research[];
