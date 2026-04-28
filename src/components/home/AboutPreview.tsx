import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";

const highlights = [
  { icon: Shield, label: "Safety & Compliance" },
  { icon: Award, label: "Engineering Excellence" },
  { icon: Users, label: "Industry Experience" },
  { icon: Lightbulb, label: "Innovation & Accuracy" },
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-industrial">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutTeam}
                alt="Engineering team reviewing plant designs"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-accent text-accent-foreground p-6 rounded-2xl shadow-glow">
              <div className="text-center">
                {/* <span className="block text-4xl font-heading font-bold"></span> */}
                <span className="text-sm font-medium">Delivering<br />with Excellence</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="section-title mb-6">
              Engineering Solutions for Complex Industrial Projects
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Port AI Technologies Pvt. Ltd. is a technology-driven engineering and CAD services 
              company delivering precision-focused solutions for complex industrial projects. 
              With a strong foundation in plant engineering, design automation, and industrial 
              drafting, we support global industries with safe, scalable, and cost-effective 
              engineering outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our expertise spans across Oil & Gas, Petrochemical, Power, and Process Industries, 
              where we provide comprehensive engineering services that meet the highest standards 
              of quality and safety compliance.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-sm">{label}</span>
                </div>
              ))}
            </div>

            <Button variant="accent" size="lg" asChild>
              <Link to="/about">
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
