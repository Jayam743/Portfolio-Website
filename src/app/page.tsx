import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { SyndicateSection } from "@/components/syndicate-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { GuestbookSection } from "@/components/guestbook-section";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SyndicateSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <GuestbookSection />
      </main>
      <Footer />
    </>
  );
}
