import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import LogoWall from "@/components/LogoWall/LogoWall";
import About from "@/components/About/About";
import Growth from "@/components/Growth/Growth";
import TechSolutions from "@/components/TechSolutions/TechSolutions";
import Industries from "@/components/Industries/Industries";
import Brands from "@/components/Brands/Brands";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Workflow from "@/components/Workflow/Workflow";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import Testimonials from "@/components/Testimonials/Testimonials";
import CompetitiveEdge from "@/components/CompetitiveEdge/CompetitiveEdge";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoWall />
        <About />
        <TechSolutions />
        <Growth />
        <Industries />
        <Brands />
        <WhyChooseUs />
        <Workflow />
        <CtaBanner />
        <Testimonials />
        <CompetitiveEdge />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
