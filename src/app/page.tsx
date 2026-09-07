import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
