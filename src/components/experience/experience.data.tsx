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
            "Jest",
            "Postgres",
            "Docker",
            "Kubernetes",
            "SQS",
            "SNS",
            "RDS",
        ],
        projects: [],
    },
    {
        display: true,
        role: "Senior Software Engineer",
        company: "Orsay AI",
        link: "https://orsay.ai",
        dates: "Jan 2024 - May 2024",
        description:
            "Lead a team of 4 engineers to build an AI-driven engagement platform that consolidates leads from multiple channels, including Instagram, WhatsApp, and Slack. Designed to facilitate interaction with leads through AI agents, the platform allows users to view, respond, and manage conversations efficiently",
        descriptions: [],
        technologies: [
            "FastAPI",
            "Python",
            "AWS Services",
            "DynamoDB",
            "S3",
            "Lambda",
            "API Gateway",
            "CloudFront",
            "AWS CDK",
            "Fargate",
            "GitHub",
            "Grafana faro",
            "React",
            "Tanstack Query",
            "Framer Motion",
            "Typescript",
            "Zustand",
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
            "S3",
            "Lambda",
            "CloudFront",
            "API Gateway",
            "SQS",
            "SNS",
            "EC2",
            "AWS IaC",
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
        display: true,
        role: "Software Engineer",
        company: "University of Exeter",
        link: "https://www.exeter.ac.uk/",
        dates: "Jan 2022 - Jan 2023",
        description:
            "Work on a variety of microservices used within the university. Work with Flutter for mobile apps and React for web apps.",
        descriptions: [],
        technologies: [
            "S3",
            "Lambda",
            "Step Functions",
            "Serverless architecture",
            "CloudFront",
            "API Gateway",
            "SQS",
            "SNS",
            "Grafana",
            "Node.js",
            "TypeScript",
            "AWS Services",
            "DynamoDB",
            "Cognito",
            "CDK",
            "Flutter",
        ],
        projects: [
            {
                title: "Student App",
                link: "https://m.exeter.ac.uk",
            },
        ],
    },
    {
        display: true,
        role: "Backend Engineer",
        company: "European Space Agency (ESA)",
        link: "https://www.esa.int/",
        dates: "Jun 2021 - Jan 2022",
        description:
            "Led backend development for the interactive virtual tour software for ESA's New Norcia Ground Station in Australia to help ESA staff visualise and operate the site remotely from Europe.",
        descriptions: [],
        technologies: [
            "Python",
            "FastAPI",
            "AWS",
            "Fargate",
            "RDS",
            "VPC",
            "Route53",
            "DynamoDB",
            "IAM",
            "TypeScript",
            "CDK",
            "Postgres",
            "Docker",
            "Kubernetes",
            "SQS",
            "SNS",
            "RDS",
        ],
        projects: [],
    },
    {
        display: false,
        role: "Software Engineer",
        company: "Hatless Studios",
        link: "https://www.linkedin.com/company/hatless-studios",
        dates: "Oct 2019 - Jun 2021",
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
            "Postgres",
            "Docker",
            "Kubernetes",
            "SQS",
            "SNS",
            "RDS",
        ],
    },
    {
        display: false,
        role: "Full Stack Developer",
        company: "Swmstudios",
        link: "https://swmstudios.com/",
        dates: "Mar 2019 - Dec 2020",
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
];

export { experience };
export type { ExperienceModel };
