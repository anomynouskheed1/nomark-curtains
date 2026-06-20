import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShopCurtains from "@/components/ShopCurtains";
import Collections from "@/components/Collections";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
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