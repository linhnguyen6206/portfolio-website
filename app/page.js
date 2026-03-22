import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";
import ContactMe from "./Components/ContactMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactMe />
      </div>
    </main>
  );
}
