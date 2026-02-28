import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import heroRefinery from "@/assets/hero-refinery.jpg";
import cadServices from "@/assets/cad-services.jpg";

const plantEngineeringServices = [
  {
    name: "Engineering Services",
    slug: "engineering-services",
    description: "Comprehensive engineering solutions covering conceptual, basic, and detailed engineering phases.",
  },
  {
    name: "Process Engineering",
    slug: "process-engineering",
    description: "Process design, simulation, and optimization for chemical and industrial processes.",
  },
  {
    name: "3D Piping Design Services",
    slug: "3d-piping-design",
    description: "Advanced 3D modeling for complex piping systems using industry-standard software.",
  },
  {
    name: "Piping Engineering Services",
    slug: "piping-engineering",
    description: "Complete piping system design, routing, and specification development.",
  },
  {
    name: "Instrumentation & Control Engineering",
    slug: "instrumentation-control",
    description: "Control system design, instrumentation selection, and automation solutions.",
  },
  {
    name: "Piping Stress Analysis",
    slug: "piping-stress-analysis",
    description: "Structural analysis ensuring piping systems withstand operational conditions.",
  },
  {
    name: "Greenfield Projects",
    slug: "greenfield-projects",
    description: "End-to-end engineering support for new facility development from concept to commissioning.",
  },
  {
    name: "Brownfield Projects",
    slug: "brownfield-projects",
    description: "Modification, expansion, and revamp engineering for existing facilities.",
  },
];

const cadServicesList = [
  {
    name: "Process Flow Diagram – CAD Services",
    slug: "process-flow-diagram",
    description: "Creation and modification of PFDs showing process flow sequences and equipment.",
  },
  {
    name: "Piping & Instrumentation Drawings (P&ID)",
    slug: "pid-drawings",
    description: "Detailed P&IDs showing piping, instrumentation, and control systems.",
  },
  {
    name: "Piping Isometric Drawings",
    slug: "piping-isometric",
    description: "Accurate isometric drawings for fabrication and construction.",
  },
  {
    name: "Piping General Arrangement Drawings",
    slug: "general-arrangement",
    description: "Layout drawings showing equipment and piping positions.",
  },
  {
    name: "CAD Conversion Services",
    slug: "cad-conversion",
    description: "Converting paper drawings and legacy formats to modern CAD formats.",
  },
  {
    name: "CAD Training & Consulting",
    slug: "cad-training",
    description: "Professional CAD training and consulting services for engineering teams.",
  },
  {
    name: "CAD Automation & Customization",
    slug: "cad-automation",
    description: "Custom CAD tools and automation scripts to improve productivity.",
  },
  {
    name: "Fire Evacuation Drawings",
    slug: "fire-evacuation",
    description: "Safety-compliant evacuation plans and fire protection layouts.",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Port AI Technologies - Engineering & CAD Solutions</title>
        <meta
          name="description"
          content="Comprehensive plant engineering and CAD services including 3D piping design, P&ID drawings, process engineering, and more for Oil & Gas, Petrochemical, and Power industries."
        />
      </Helmet>

      <Header />

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
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Comprehensive engineering and CAD solutions tailored for 
              Oil & Gas, Petrochemical, Power, and Process Industries.
            </p>
          </div>
        </section>

        {/* Plant Engineering Services */}
        <section className="section-padding bg-background" id="plant-engineering">
          <div className="container-industrial">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1 h-10 bg-accent rounded-full" />
              <div>
                <h2 className="font-heading text-3xl font-bold text-primary">
                  Plant Engineering Services
                </h2>
                <p className="text-muted-foreground mt-2">
                  End-to-end engineering solutions for industrial plant projects
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plantEngineeringServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group card-industrial p-6 flex flex-col h-full"
                >
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-accent font-medium text-sm">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CAD Services */}
        <section className="section-padding bg-muted" id="cad-services">
          <div className="container-industrial">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1 h-10 bg-accent rounded-full" />
              <div>
                <h2 className="font-heading text-3xl font-bold text-primary">
                  CAD Services
                </h2>
                <p className="text-muted-foreground mt-2">
                  Professional CAD drafting and design services for industrial applications
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="card-industrial overflow-hidden h-full sticky top-24">
                  <img
                    src={cadServices}
                    alt="CAD Engineering Services"
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {cadServicesList.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="group card-industrial p-5 flex flex-col"
                  >
                    <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-accent font-medium text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
