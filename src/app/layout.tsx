import "../styles/globals.css";
import "../styles/typingText.css";
import "../styles/side.css";
import "../styles/nav.css";
import { Inter } from "next/font/google";
import Head from "./head";
import BackgroundAnimation from "@/components/misc/backgroundAnimation";
import BackgroundHover from "@/components/misc/backgroundHover";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <Head />

      <body>
        <BackgroundAnimation color={"white"} />
        <BackgroundHover />
        {children}
      </body>
    </html>
  );
}
