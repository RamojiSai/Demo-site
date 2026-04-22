import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Droplets, Flame, Zap, Factory, Pill, Cog, UtensilsCrossed } from "lucide-react";
import heroPetrochemical from "@/assets/hero-petrochemical.jpg";

const industries = [
  {
    icon: Droplets,
    name: "Oil & Gas",
    slug: "oil-gas",
    description: "Comprehensive engineering solutions for upstream, midstream, and downstream oil & gas operations.",
    details: [
      "Offshore and onshore facility design",
      "Pipeline engineering and design",
      "Gas processing plant engineering",
      "Tank farm and terminal design",
    ],
  },
  {
    icon: Flame,
    name: "Petrochemical",
    slug: "petrochemical",
    description: "Advanced process engineering and CAD services for petrochemical plants and refineries.",
    details: [
      "Refinery unit design and revamp",
      "Chemical plant engineering",
      "Process optimization studies",
      "Safety system design",
    ],
  },
  {
    icon: Zap,
    name: "Power Plants",
    slug: "power-plants",
    description: "Engineering expertise for thermal, combined cycle, and renewable power generation facilities.",
    details: [
      "Thermal power plant design",
      "Combined cycle power plants",
      "Balance of plant engineering",
      "Cooling water system design",
    ],
  },
  {
    icon: Factory,
    name: "Oil Terminals",
    slug: "oil-terminals",
    description: "Design and engineering support for storage terminals and distribution infrastructure.",
    details: [
      "Tank farm design and layout",
      "Loading/unloading systems",
      "Metering and custody transfer",
      "Fire protection systems",
    ],
  },
  {
    icon: Pill,
    name: "Pharmaceutical",
    slug: "pharmaceutical",
    description: "GMP-compliant engineering solutions for pharmaceutical manufacturing facilities.",
    details: [
      "Clean room facility design",
      "HVAC system engineering",
      "Utility system design",
      "Process equipment layout",
    ],
  },
  {
    icon: Cog,
    name: "Processing Industries",
    slug: "processing",
    description: "Engineering services for chemical, mineral, and material processing operations.",
    details: [
      "Chemical processing plants",
      "Mineral processing facilities",
      "Water treatment plants",
      "Material handling systems",
    ],
  },
  {
    icon: UtensilsCrossed,
    name: "Food & Beverage",
    slug: "food-beverage",
    description: "HACCP-compliant plant design and CAD services for food processing facilities.",
    details: [
      "Food processing plant design",
      "Beverage manufacturing facilities",
      "Hygienic piping design",
      "Cold storage facility design",
    ],
  },
];

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>Industries We Serve | Port AI Technologies</title>
        <meta
          name="description"
          content="Port AI Technologies serves Oil & Gas, Petrochemical, Power, Pharmaceutical, and Food & Beverage industries with specialized engineering and CAD services."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroPetrochemical}
              alt="Industrial facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/85" />
          </div>
          <div className="relative container-industrial text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Delivering specialized engineering solutions tailored to the unique 
              requirements of diverse industrial sectors.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="section-padding bg-background">
          <div className="container-industrial">
            <div className="grid md:grid-cols-2 gap-8">
              {industries.map(({ icon: Icon, name, slug, description, details }) => (
                <div
                  key={slug}
                  className="card-industrial p-8 group hover:border-accent/20 border border-transparent transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-all">
                      <Icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div className="flex-grow">
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {name}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={`/industries/${slug}`}
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Industries;
