import AnnouncementBar from "../components/AnnouncementBar";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import EpisodeRecap from "../components/EpisodeRecap";
import ProofStrip from "../components/ProofStrip";
import Benefits from "../components/Benefits";
import Doctors from "../components/Doctors";
import Testimonials from "../components/Testimonials";
import MidCta from "../components/MidCta";
import ConsultSection from "../components/ConsultSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <Hero />
      <EpisodeRecap />
      <ProofStrip />
      <Benefits />
      <Doctors />
      <Testimonials />
      <MidCta />
      <ConsultSection />
      <Footer />
    </>
  );
}
