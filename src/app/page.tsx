import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="md:h-screen w-full z-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-2 md:min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-24 lg:px-24">
        {/* Left */}
        <div className="text-xl md:sticky md:self-start md:top-24 md:bottom-24 md:w-1/2 md:h-[calc(100vh-12rem)]">
          <Hero />
        </div>

        {/* Right */}
        <div className="md:w-1/2 md:ml-auto flex flex-col gap-y-20 md:gap-y-28">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
}
