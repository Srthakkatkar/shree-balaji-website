import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Services from "@/components/Services";
import Reels from "@/components/Reels";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      {/* ── Premium cinematic transition ── */}
      <div
        aria-hidden
        style={{
          height: "120px",
          background:
            "linear-gradient(to bottom, #040404 0%, #060606 100%)",
          marginTop: "-1px",
        }}
      />
      <Gallery />
      <About />
      <Services />
      <Reels />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
