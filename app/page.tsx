import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturedApps from "@/components/FeaturedApps";
import ProjectGrid from "@/components/ProjectGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedApps />
        <ProjectGrid username={site.githubUsername} />
        <About />
      </main>
      <Footer />
    </>
  );
}
