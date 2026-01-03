import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import cadServices from "@/assets/cad-services.jpg";

const plantEngineeringServices = [
  { name: "Engineering Services", slug: "engineering-services" },
  { name: "Process Engineering", slug: "process-engineering" },
  { name: "3D Piping Design Services", slug: "3d-piping-design" },
  { name: "Piping Engineering Services", slug: "piping-engineering" },
  { name: "Instrumentation & Control Engineering", slug: "instrumentation-control" },
  { name: "Piping Stress Analysis", slug: "piping-stress-analysis" },
  { name: "Greenfield Projects", slug: "greenfield-projects" },
  { name: "Brownfield Projects", slug: "brownfield-projects" },
];

const cadServicesList = [
  { name: "Process Flow Diagram – CAD Services", slug: "process-flow-diagram" },
  { name: "Piping & Instrumentation Drawings (P&ID)", slug: "pid-drawings" },
  { name: "Piping Isometric Drawings", slug: "piping-isometric" },
  { name: "Piping General Arrangement Drawings", slug: "general-arrangement" },
  { name: "CAD Conversion Services", slug: "cad-conversion" },
  { name: "CAD Training & Consulting", slug: "cad-training" },
  { name: "CAD Automation & Customization", slug: "cad-automation" },
  { name: "Fire Evacuation Drawings", slug: "fire-evacuation" },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-muted" id="services">
      <div className="container-industrial">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 className="section-title mb-4">Our Services</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive engineering and CAD solutions for industrial projects across 
            Oil & Gas, Petrochemical, Power, and Process Industries.
          </p>
        </div>

        {/* Plant Engineering Services */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h3 className="font-heading text-2xl font-bold text-primary">
              Plant Engineering Services
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {plantEngineeringServices.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group card-industrial p-6 flex items-center justify-between"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                  {service.name}
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        {/* CAD Services */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-accent rounded-full" />
            <h3 className="font-heading text-2xl font-bold text-primary">
              CAD Services
            </h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* CAD Image */}
            <div className="lg:col-span-1">
              <div className="card-industrial overflow-hidden h-full">
                <img
                  src={cadServices}
                  alt="CAD Engineering Services"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
            </div>
            {/* CAD Services List */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {cadServicesList.map((service, index) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group card-industrial p-5 flex items-center justify-between"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-medium text-foreground group-hover:text-accent transition-colors text-sm">
                    {service.name}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
