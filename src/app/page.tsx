import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="container mx-auto flex flex-col md:flex-row gap-2 min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-24 lg:px-24">
        {/* Left */}
        <div className="text-xl md:sticky md:self-start md:top-24 md:w-1/2">
          <Hero />
        </div>

        {/* Right */}
        <div className="md:w-1/2 md:ml-auto">
          <About />
          <Projects />
        </div>
      </div>
    </main>
  );
}
