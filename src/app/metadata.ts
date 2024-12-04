import { Metadata } from "next";
import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";

export const mainMetadata: Metadata = {
    title: "Gowthaman Ravindrathas - Software Engineer based in London, UK",
    description:
        "Portfolio of Gowthaman Ravindrathas - Software Engineer based in London, UK",
    applicationName: "Gowtham's Portfolio",
    keywords: [
        "Gowthaman Ravindrathas",
        "Software Engineer London",
        "Frontend Developer",
        "Backend Developer",
        "Fullstack Developer",
        "Web Development Portfolio",
        "React Developer",
        "Node.js Developer",
        "Gowtham Portfolio",
        "gowth6m",
        "Wavelink",
        "Gowthaman",
        "Ravindrathas",
        "Gowtham",
    ],
    creator: "Gowthaman Ravindrathas",
    publisher: "Gowthaman Ravindrathas",
    alternates: {
        canonical: "https://gowtham.io",
    },
    openGraph: {
        title: "Gowthaman Ravindrathas - Software Engineer Portfolio",
        description:
            "Portfolio of Gowthaman Ravindrathas - Software Engineer based in London, UK",
        url: "https://gowtham.io",
        type: "website",
        locale: "en_GB",
        images: [
            {
                url: "/logo/logo.png",
                width: 1200,
                height: 630,
                alt: "Gowtham Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@gowth6m",
        creator: "@gowth6m",
        title: "Gowthaman Ravindrathas - Software Engineer based in London, UK",
        description:
            "Portfolio of Gowthaman Ravindrathas - Software Engineer based in London, UK",
        images: ["/logo/logo.png"],
    },
    icons: {
        icon: [
            { url: "/logo/logo.svg", type: "image/svg+xml" },
            { url: "/logo/logo.png", sizes: "180x180" },
        ],
        apple: "/logo/logo.png",
    },
    themeColor: "#0a192f",
    viewport: "width=device-width, initial-scale=1",
    category: "portfolio",
    robots: "index, follow",
    metadataBase: new URL('http://gowtham.io'),
};