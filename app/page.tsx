import Benefits from "@/components/Landing/Benefits";
import Hero from "@/components/Landing/Hero";
import NavBar from "@/components/Landing/NavBar";
import Collaboration from "@/components/Landing/Collaboration";
import Services from "@/components/Landing/Services";
import Price from "@/components/Landing/Price";
import Roadmap from "@/components/Landing/Roadmap";
import Footer from "@/components/Landing/Footer";

export default function Home() {
  return (
    <section>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <NavBar />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Price />
        <Roadmap />
        <Footer />
      </div>
    </section>
  );
}
