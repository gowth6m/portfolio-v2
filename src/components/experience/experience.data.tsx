type ExperienceModel = {
  role: string;
  company: string;
  link: string;
  dates: string;
  description: string;
  descriptions: string[];
  technologies: string[];
  projects?: {
    title: string;
    link: string;
  }[];
};

const experience: ExperienceModel[] = [
  {
    role: "Frontend Developer",
    company: "Pollen Technologies",
    link: "https://www.pollentechnologies.com/",
    dates: "Jun 2023 - Present",
    description:
      "Offer modern banking for businesses by taking lead on frontend development at Pollen Technologies. Create software for both external clients and internal use at Pollen Technologies.",
    descriptions: [],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Spring",
      "AWS Services",
      "Material UI",
      "Java",
    ],
    projects: [],
  },
  {
    role: "Frontend Developer",
    company: "HIVED",
    link: "https://hived.space",
    dates: "Feb 2023 - Jun 2023",
    description:
      "Lead frontend development at HIVED. Create frontend solutions for a variety of microservices used by HIVED. Create applications used by around 20,000 customers daily and in-house apps used by our drivers and staff.",
    descriptions: [
      "Lead frontend development at HIVED",
      "Create and implement solutions for a variety of microservices used by HIVED",
      "Create applications used by around 20,000 customers daily",
      "Create in-house apps used by our drivers and staff",
    ],
    technologies: [
      "Flutter",
      "React",
      "Node.js",
      "TypeScript",
      "Golang",
      "AWS Services",
    ],
    projects: [
      {
        title: "Tracking Page",
        link: "https://track.hived.space",
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "University of Exeter",
    link: "https://www.exeter.ac.uk/",
    dates: "May 2022 - Feb 2023",
    description:
      "Work on the University of Exeter app that is used by around 22,000 students, create chatbot API microservice used in various applications, create virtual tour app to help students navigate campus and work on online programes website.",
    descriptions: [
      "Work on the University of Exeter app that is used by around 22,000 students",
      "Create chatbot API microservice used in various applications",
      "Create virtual tour app and mini games for freshers events",
    ],
    technologies: [
      "React",
      "Flutter",
      "Node.js",
      "TypeScript",
      "AWS Services",
      "DynamoDB",
      "Cognito",
      "CDK",
    ],
    projects: [
      {
        title: "Student App",
        link: "https://m.exeter.ac.uk",
      },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Swmstudios",
    link: "https://swmstudios.com/",
    dates: "Mar 2021 - Nov 2021",
    description:
      "Design and develop website for Swmstudios and clients, develop and maintain internal tools. New website increased traffic by 200%. Developed internal tools to help manage clients and projects.",
    descriptions: [
      "Design and develop websites for customers",
      "Develop and maintain internal tools",
    ],
    technologies: ["React", "Next", "Framer motion", "TypeScript"],
  },
  {
    role: "Frontend Developer",
    company: "Nocxa",
    link: "https://nocxa.com/",
    dates: "Sep 2019 - Sep 2021",
    description:
      "Lead frontend development, develop e-commerce websites for clients such as Great Comcat Engineering Ltd, Di-tea and Sai Kung Cafe. Increased sales by 300% and increased traffic by 200% on average. Also created and setup Google business profiles for clients.",
    descriptions: [
      "Design and develop websites and web apps for clients",
      "Develop apps for clients",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Flutter",
      "Next",
      "Express",
      "MongoDB",
    ],
    projects: [
      {
        title: "GCE",
        link: "https://greatcomcatengineering.com",
      },
    ],
  },
];

export { experience };
export type { ExperienceModel };
