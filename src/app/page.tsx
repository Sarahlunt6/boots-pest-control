import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OurWork from "@/components/OurWork";
import TrustSection from "@/components/TrustSection";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <OurWork />
        <TrustSection />
        <Reviews />
        <ServiceArea />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
