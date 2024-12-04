import "../styles/typingText.css";
import "../styles/globals.css";
import "../styles/side.css";
import "../styles/nav.css";
import { Metadata } from "next";
import { mainMetadata } from "./metadata";
import { Inter, Comfortaa, MuseoModerno } from "next/font/google";
import BackgroundAnimation from "@/components/misc/backgroundAnimation";

// ------------------------------------------------------------

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const comfortaa = Comfortaa({
    subsets: ["latin"],
    variable: "--font-comfortaa",
});
const museoModerno = MuseoModerno({
    subsets: ["latin"],
    variable: "--font-museo-moderno",
});

// ------------------------------------------------------------

export const metadata: Metadata = { ...mainMetadata };

// ------------------------------------------------------------

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${comfortaa.variable} ${museoModerno.variable}`}
        >
            <head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                ></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            </head>
            <body>
                <BackgroundAnimation color={"white"} />
                {/* <BackgroundHover /> */}
                {children}
            </body>
        </html>
    );
}
