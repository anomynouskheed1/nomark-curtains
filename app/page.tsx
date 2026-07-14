
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ShopCurtains from "@/components/home/ShopCurtains";
import Collections from "@/components/home/Collections";
import Projects from "@/components/home/Projects";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function Home() {
  return (
    <>

      <AnnouncementBar />
      <Navbar />
      <Hero />
      {/* MONEY SECTION 💰 */}
      <ShopCurtains />

      {/* INSPIRATION */}
      <Collections />

      {/* TRUST / PROOF */}
      <Projects />
      <About />

      {/* SOCIAL PROOF */}
      <Testimonials />

      {/* ACTION */}
      <Contact />

      <Footer />

      <WhatsAppButton />
    </>
  );
}