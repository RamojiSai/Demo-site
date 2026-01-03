import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Flame, Zap, Factory, Pill, Cog, UtensilsCrossed } from "lucide-react";

const industries = [
  {
    icon: Droplets,
    name: "Oil & Gas",
    slug: "oil-gas",
    description: "Comprehensive engineering solutions for upstream, midstream, and downstream oil & gas operations.",
  },
  {
    icon: Flame,
    name: "Petrochemical",
    slug: "petrochemical",
    description: "Advanced process engineering and CAD services for petrochemical plants and refineries.",
  },
  {
    icon: Zap,
    name: "Power Plants",
    slug: "power-plants",
    description: "Engineering expertise for thermal, combined cycle, and renewable power generation facilities.",
  },
  {
    icon: Factory,
    name: "Oil Terminals",
    slug: "oil-terminals",
    description: "Design and engineering support for storage terminals and distribution infrastructure.",
  },
  {
    icon: Pill,
    name: "Pharmaceutical",
    slug: "pharmaceutical",
    description: "GMP-compliant engineering solutions for pharmaceutical manufacturing facilities.",
  },
  {
    icon: Cog,
    name: "Processing Industries",
    slug: "processing",
    description: "Engineering services for chemical, mineral, and material processing operations.",
  },
  {
    icon: UtensilsCrossed,
    name: "Food & Beverage",
    slug: "food-beverage",
    description: "HACCP-compliant plant design and CAD services for food processing facilities.",
  },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-industrial">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Industries We Serve
          </span>
          <h2 className="section-title mb-4">Our Industry Expertise</h2>
          <p className="section-subtitle mx-auto">
            Delivering specialized engineering solutions tailored to the unique 
            requirements of diverse industrial sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map(({ icon: Icon, name, slug, description }, index) => (
            <Link
              key={slug}
              to={`/industries/${slug}`}
              className="group card-industrial p-6 flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-3 group-hover:text-accent transition-colors">
                {name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {description}
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
  );
}
