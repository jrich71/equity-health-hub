import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FrameworksSection from "@/components/FrameworksSection";
import ResearchSection from "@/components/ResearchSection";
import NewsSection from "@/components/NewsSection";
import MultimediaSection from "@/components/MultimediaSection";
import PeopleSection from "@/components/PeopleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen smooth-scroll">
      <Navigation />
      <main>
        <Hero />
        <FrameworksSection />
        <ResearchSection />
        <NewsSection />
        <MultimediaSection />
        <PeopleSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
