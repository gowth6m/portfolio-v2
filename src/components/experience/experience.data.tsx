type ExperienceModel = {
    display: boolean;
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
        display: true,
        role: "Senior Frontend Developer",
        company: "Pollen Technologies",
        link: "https://www.pollentechnologies.com/",
        dates: "Jul 2023 - Present",
        description:
            "Lead frontend development at Pollen Technologies. Create analytics dashboard to view and track large amounts of transactions. Decrease Pollen platform's loading times by around 63% across the application with various rendering optimisations.",
        descriptions: [],
        technologies: [
            "React",
            "Next.js",
            "Node.js",
            "Redux",
            "TypeScript",
            "Spring Boot",
            "AWS Services",
            "Material UI",
            "Java",
            "AWS Services",
        ],
        projects: [],
    },
    {
        display: true,
        role: "Software Engineer",
        company: "Orsay AI",
        link: "https://orsay.ai",
        dates: "Jan 2024 - May 2024",
        description:
            "Lead frontend development at Orsay. Create platform to view, respond and interact to leads on various platforms such as Instagram, WhatsApp, Slack, etc using AI agents. Create messaging platform to interact, configure and test AI agents.",
        descriptions: [],
        technologies: [
            "React",
            "FastAPI",
            "Zustand",
            "TypeScript",
            "Python",
            "LLM",
            "Machine Learning",
            "AWS Services",
            "Grafana",
        ],
        projects: [
            {
                title: "Orsay dashboard",
                link: "https://app.orsay.ai",
            },
        ],
    },
    {
        display: true,
        role: "Frontend Developer",
        company: "HIVED",
        link: "https://hived.space",
        dates: "Jan 2023 - Jul 2023",
        description:
            "Lead frontend development at HIVED - create and implement frontend solutions for a variety of services used by HIVED. Worked on customer tracking page, warehouse sortation app and driver delivery app. Decrease customer tracking page's FCP by 40% on desktop and 70% on mobile.",
        descriptions: [
            "Lead frontend development at HIVED",
            "Create and implement solutions for a variety of microservices used by HIVED",
            "Create applications used by around 20,000 customers daily",
            "Create in-house apps used by our drivers and staff",
        ],
        technologies: [
            "Flutter",
            "React",
            "Redux",
            "Tailwind CSS",
            "Node.js",
            "TypeScript",
            "Golang",
            "MongoDB",
            "EC2",
            "AWS IaC",
            "AWS Services",
            "Grafana Faro",
        ],
        projects: [
            {
                title: "Tracking Page",
                link: "https://track.hived.space",
            },
        ],
    },
    {
        display: true,
        role: "Software Engineer",
        company: "University of Exeter",
        link: "https://www.exeter.ac.uk/",
        dates: "Mar 2022 - Jan 2023",
        description:
            "Work on the University of Exeter app that is used by around 22,000 students, create chatbot API microservice used in various applications, create virtual tour app to help students navigate campus and work on online programmes website.",
        descriptions: [
            "Work on the University of Exeter app that is used by around 22,000 students",
            "Create chatbot API microservice used in various applications",
            "Create virtual tour app and mini games for freshers events",
        ],
        technologies: [
            "React",
            "Flutter",
            "Redux",
            "MUI",
            "Serverless",
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
        display: false,
        role: "Software Engineer",
        company: "Hatless Studios",
        link: "https://www.linkedin.com/company/hatless-studios",
        dates: "Jan 2020 - Feb 2022",
        description: `Work on a variety of projects on both frontend and backend in various industries such as education, health and finance. Worked on inventory management system, student app for university and internal tools and analytics dashboards for agencies.`,
        descriptions: [],
        technologies: [
            "React",
            "Next.js",
            "Redux",
            "Django",
            "Framer motion",
            "TypeScript",
            "Vercel",
            "MongoDB",
            "Gin Gonic",
            "PostgreSQL",
            "AWS Services",
        ],
    },
    {
        display: false,
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
        technologies: [
            "React",
            "Next.js",
            "Redux",
            "Django",
            "Framer motion",
            "TypeScript",
            "Vercel",
            "MongoDB",
            "Go Gin Gonic",
        ],
    },
    {
        display: false,
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
            "Next.js",
            "Express",
            "Netlify",
            "Serverless",
            "Go Gin Gonic",
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
