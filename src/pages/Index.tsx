import { Helmet } from "react-helmet-async";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/home/HeroSlider";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WorkPlatformsSection } from "@/components/home/WorkPlatformsSection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Port AI Technologies | Plant Engineering & CAD Services</title>
        <meta
          name="description"
          content="Port AI Technologies Pvt. Ltd. delivers precision-focused engineering and CAD solutions for Oil & Gas, Petrochemical, Power, and Process Industries. Expert plant engineering services in Hyderabad, India."
        />
        <meta
          name="keywords"
          content="plant engineering, CAD services, piping design, oil and gas engineering, petrochemical, power plant engineering, Hyderabad, India"
        />
        <link rel="canonical" href="https://portaitechnologies.com" />
      </Helmet>

      <main>
        <HeroSlider />
        <AboutPreview />
        <ServicesSection />
        <IndustriesSection />
        <WorkPlatformsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
