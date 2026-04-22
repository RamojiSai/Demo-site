import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroRefinery from "@/assets/hero-refinery.jpg";
import cadServices from "@/assets/cad-services.jpg";

const divisions = [
  {
    title: "Plant Engineering Division",
    description: "Our Plant Engineering Division provides end-to-end engineering solutions for industrial facilities, from conceptual design through detailed engineering and construction support.",
    services: [
      "Process Engineering & Simulation",
      "Piping Engineering & Design",
      "Instrumentation & Control Systems",
      "Structural Engineering",
      "Electrical Engineering",
      "Project Management",
    ],
    image: heroRefinery,
  },
  {
    title: "CAD Services Division",
    description: "Our CAD Services Division delivers precision drafting and design services using industry-leading software tools for all types of industrial documentation.",
    services: [
      "P&ID Development",
      "Piping Isometric Drawings",
      "3D Modeling Services",
      "CAD Conversion",
      "CAD Training & Support",
      "Design Automation",
    ],
    image: cadServices,
  },
];

const Division = () => {
  return (
    <>
      <Helmet>
        <title>Our Divisions | Port AI Technologies</title>
        <meta
          name="description"
          content="Explore Port AI Technologies' specialized divisions: Plant Engineering and CAD Services, delivering comprehensive solutions for industrial projects."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroRefinery}
              alt="Industrial facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/85" />
          </div>
          <div className="relative container-industrial text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Divisions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Specialized engineering divisions delivering comprehensive solutions 
              for complex industrial projects.
            </p>
          </div>
        </section>

        {/* Divisions */}
        <section className="section-padding bg-background">
          <div className="container-industrial space-y-24">
            {divisions.map((division, index) => (
              <div
                key={division.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={division.image}
                      alt={division.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="section-title mb-6">{division.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {division.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {division.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="accent" size="lg" asChild>
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Division;
