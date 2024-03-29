const research1 = {
  researchHeader: {
    avatarUrl: "/static/berkeley.jpg",
    position: "Graduate Researcher",
    company: "Berkeley EECS Department",
    duration: "October 2020 – May 2021",
    location: "Berkeley, CA",
  },
  researchBody: [
    'Co-authored and published "WIP: The Cyber-Physical Immune System" in Proceedings of the 2021 International Conference on Embedded Software (EMSOFT \'21)',
    "Proposed a conceptual approach to secure Cyber-Physical Systems (CPSs) by deploying an independent network of monitoring components that adapts to the changing environment and reports threats or anomalies",
    "Validated CPIS in the case of a vehicular cruise control system by developing a simulation of the interaction between the vehicular controllers and the physical environment",
  ],
};

const research2 = {
  researchHeader: {
    avatarUrl: "/static/duke.jpg",
    position: "Undergraduate Researcher",
    company: "Duke University I³T Lab",
    duration: "August 2019 – May 2020",
    location: "Durham, NC",
  },
  researchBody: [
    "Worked on a system that enables multiple edge-connected devices to collaborate on image recognition tasks using Google’s ARCore and Firebase platforms",
    "Implemented a module that determines whether the fields-of-view of multiple cameras collide using ARCore’s CloudAnchors",
    "Investigated the spatial and temporal correlations in the images captured by devices from different positions and of heterogeneous quality to improve recognition accuracy",
  ],
};

export const research = [research1, research2];
