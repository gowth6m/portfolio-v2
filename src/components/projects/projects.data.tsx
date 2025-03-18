type ProjectModel = {
    year: number;
    title: string;
    description: string;
    image: string;
    link?: string;
    github?: string;
    stack: string[];
    display: boolean;
};

const projects: ProjectModel[] = [
    {
        year: 2024,
        title: "Juris AI",
        description:
            "An AI-powered platform designed to streamline contract review by analysing individual clauses, assessing risk levels, and providing actionable improvement suggestions.",
        image: "./images/jurisai.png",
        link: "https://app.jurisai.uk",
        github: "https://github.com/gowth6m/juris-ai",
        stack: [
            "Python",
            "FastAPI",
            "AWS Services",
            "Open AI",
            "LLMs",
            "Fargate",
            "React",
            "Material UI",
            "TypeScript",
            "Grafana",
            "S3",
            "DynamoDB",
            "Docker",
        ],
        display: true,
    },
    {
        year: 2023,
        title: "NightBloom AI",
        description:
            "Search engine that locates AI-generated images. Allows users to filter, view, download and favourite AI-generated images from varying resolutions and quality.",
        image: "./images/nightbloom.webp",
        link: "https://nightbloom.ai",
        stack: [
            "Rust",
            "Axum",
            "React",
            "Framer Motion",
            "Material UI",
            "AWS Services",
            "S3",
            "Docker",
            "Kubernetes",
            "TypeScript",
            "DynamoDB",
        ],
        display: true,
    },
    {
        year: 2023,
        title: "Genie Cabs",
        description:
            "Car rental website for Genie Cabs, allowing customers to browse, book, and manage rentals with real-time availability and secure payments.",
        image: "./images/genie-cabs.webp",
        link: "https://geniefy-rentals.vercel.app/",
        stack: [
            "Next.js",
            "MUI",
            "Stripe",
            "MongoDB",
            "AWS",
            "Amplify",
            "CloudFront",
            "Route53",
            "CDK",
        ],
        display: true,
    },
    {
        year: 2023,
        title: "Tic-tac-toe Online",
        description: `A platform to invite friends to play Tic-tac-toe on a board of any size and winning condition over the internet!`,
        image: "./images/tictactoe.png",
        link: "https://online-tictactoe.vercel.app",
        github: "https://github.com/gowth6m/online-tictactoe-backend",
        stack: [
            "Golang",
            "Gin-Gonic",
            "MongoDB",
            "Pusher",
            "WebSockets",
            "Vercel",
            "React",
            "Tailwind",
            "Zustand",
            "Tanstack Query",
        ],
        display: true,
    },
    {
        year: 2022,
        title: "Neuraliser",
        description:
            "Application for visualising neural networks as directed graphs. Allows you to upload JSON files with data about layers, nodes and edges of the neural network then visualise, edit and export the updated neural network.",
        image: "./images/neuraliser.webp",
        link: "https://gowth6m.github.io/neuraliser",
        github: "https://github.com/gowth6m/neuraliser",
        stack: [
            "Next.js",
            "React",
            "Material UI",
            "Node.js",
            "TypeScript",
            "React Flow",
            "D3.js",
        ],
        display: true,
    },
    // {
    //     year: 2023,
    //     title: "Orsay AI",
    //     description:
    //         "A platform to view, respond and interact to leads on various platforms such as Instagram, WhatsApp, Slack, etc using AI agents. Also, talk to AI agents and configure them to respond to leads.",
    //     image: "./images/orsay.png",
    //     link: "https://app.orsay.ai",
    //     stack: [
    //         "Next.js",
    //         "React",
    //         "MUI",
    //         "Node.js",
    //         "TypeScript",
    //         "Zustand",
    //         "React Query",
    //         "AWS Services",
    //         "FastAPI",
    //         "Python",
    //         "LLM",
    //     ],
    //     display: true,
    // },
    // {
    //     year: 2022,
    //     title: "University of Exeter App",
    //     description:
    //         "University wide app used by over 20,000 students. Built with Flutter frontend - consuming a Node.js backend microservices architecture. Has features such as timetable, maps, events, news, and more.",
    //     image: "./images/uoe.webp",
    //     link: "https://m.exeter.ac.uk",
    //     stack: [
    //         "Flutter",
    //         "Providers",
    //         "BLoC",
    //         "Chopper",
    //         "AWS Services",
    //         "Node.js",
    //         "TypeScript",
    //         "MongoDB",
    //     ],
    //     display: true,
    // },
    {
        year: 2021,
        title: "Great Comcat Engineering",
        description:
            "E-commerce website for Great Comcat Engineering Ltd. Built with Next.js, Tailwind, Framer Motion and MongoDB. Has features such as Stripe and PayPal payments, and more.",
        image: "./images/gce.webp",
        link: "https://www.greatcomcatengineering.com/",
        stack: [
            "Next.js",
            "Tailwind",
            "Stripe",
            "Framer Motion",
            "PayPal",
            "MongoDB",
        ],
        display: false,
    },
    // {
    //     year: 2022,
    //     title: "Reddit Viewer",
    //     description:
    //         "A small Flutter application to search and view details about Reddit posts as such 'r/topics'. Built with Flutter and consuming the Reddit API. Uses Providers and BLoC for state management and Chopper for API calls.",
    //     image: "./images/reddit.webp",
    //     link: "https://gowth6m.github.io/reddit-viewer/",
    //     github: "https://github.com/gowth6m/reddit-viewer",
    //     stack: ["Flutter", "Providers", "BLoC", "Chopper", "AWS Services"],
    //     display: true,
    // },
    {
        year: 2019,
        title: "Zombie Maze",
        description:
            "A simple 2D top-down zombie shooting game created in Python using the PyGame library. The game uses a tilemap created in Tiled. The game has a main menu, game over screen, and a high score system.",
        image: "./images/zombie_maze.webp",
        github: "https://github.com/gowth6m/zombie-maze",
        stack: ["Python", "PyGame", "Tilemap", "Tiled"],
        display: false,
    },
    {
        year: 2021,
        title: "Stugether",
        description:
            "Web application built with Django to connect students together. Has features such as a chat system, events, and more. Deployed on Heroku.",
        image: "./images/stugether.webp",
        link: "https://stugether.herokuapp.com/",
        github: "https://github.com/gowth6m/stugether",
        stack: ["Django", "Bootstrap", "PostgreSQL", "Heroku", "Vue.js"],
        display: false,
    },
    {
        year: 2021,
        title: "Gravity Simulator",
        description:
            "Simulation of gravity between particles written in JavaScript. Uses HTML Canvas to render the particles. Has features such as changing the number of particles, and more.",
        image: "./images/gravitySim.webp",
        link: "https://gowth6m.github.io/gravity-simulator/",
        github: "https://github.com/gowth6m/gravity-simulator",
        stack: ["JavaScript", "HTML", "CSS"],
        display: true,
    },
    {
        year: 2020,
        title: "Lift Simulator",
        description:
            "A simulation of a lift system implemented in Java with GUI. Uses JavaFX for the GUI. Has features such as changing the number of floors, and more. Implemented using the MVC design pattern.",
        image: "./images/liftSim.webp",
        github: "https://github.com/gowth6m/lift-system",
        stack: ["Java", "JavaFX", "Maven"],
        display: false,
    },
    {
        year: 2022,
        title: "Human-Object Interaction Research",
        description:
            "Research project to investigate human-object interaction of various models to improve mAP scores. Built with Python and PyTorch. Uses YOLOv3, CNN, R-CNN, HICO, and COCO. Uses Jupyter Notebook for data analysis.",
        image: "./images/hoi.webp",
        link: "https://drive.google.com/file/d/1Al9_xuqENbQTCBpftxPDgjBnDaKR9nei/view?usp=sharing",
        github: "https://github.com/gowth6m/human-object-interaction",
        stack: [
            "Python",
            "PyTorch",
            "Jupyter",
            "YOLOv3",
            "CNN",
            "R-CNN",
            "HICO",
            "COCO",
        ],
        display: false,
    },
    {
        year: 2020,
        title: "Game of Life in Haskell",
        description:
            "Implementation of Conway's Game of Life in Haskell using an imperative approach. UI is created by printing to the terminal. Uses the HSpec testing framework.",
        image: "./images/gol.webp",
        github: "https://github.com/gowth6m/game-of-life-haskell",
        stack: ["Haskell"],
        display: false,
    },
    {
        year: 2020,
        title: "Solar System",
        description:
            "A 3D model of the solar system (3 Planets) built with Three.js. This project was created to learn Three.js.",
        image: "./images/solar.webp",
        github: "https://github.com/gowth6m/solar-system",
        link: "https://gowth6m.github.io/solar-system/",
        stack: [
            "Three.js",
            "JavaScript",
            "HTML",
            "CSS",
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind",
        ],
        display: false,
    },
];

export { projects };
export type { ProjectModel };
