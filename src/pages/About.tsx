import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users, Lightbulb, Target, Eye, CheckCircle } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import heroRefinery from "@/assets/hero-refinery.jpg";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize safety in every design and engineering decision, ensuring compliance with international standards and regulations.",
  },
  {
    icon: Award,
    title: "Engineering Excellence",
    description: "Our commitment to precision and quality ensures that every project meets the highest engineering standards.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work closely with our clients as strategic partners, understanding their unique challenges and delivering tailored solutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously adopt new technologies and methodologies to provide cutting-edge engineering solutions.",
  },
];

const capabilities = [
  "Piping & Instrumentation Diagrams (P&ID)",
  "3D Piping Modeling & Design",
  "Piping Stress Analysis",
  "Isometric Drawing Generation",
  "Process Flow Diagrams",
  "CAD Automation & Customization",
  "Greenfield & Brownfield Projects",
  "Fire Evacuation Drawings",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Port AI Technologies - Engineering Excellence</title>
        <meta
          name="description"
          content="Learn about Port AI Technologies Pvt. Ltd. - a technology-driven engineering and CAD services company delivering precision-focused solutions for complex industrial projects."
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
              About Port AI Technologies
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              A technology-driven engineering company delivering precision-focused 
              solutions for complex industrial projects worldwide.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section-padding bg-background">
          <div className="container-industrial">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Who We Are
                </span>
                <h2 className="section-title mb-6">
                  Engineering Solutions Built on Expertise & Innovation
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Port AI Technologies Pvt. Ltd. is a technology-driven engineering and CAD services 
                  company delivering precision-focused solutions for complex industrial projects. 
                  With a strong foundation in plant engineering, design automation, and industrial 
                  drafting, we support global industries with safe, scalable, and cost-effective 
                  engineering outcomes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our team of experienced engineers and CAD specialists brings together decades 
                  of combined experience in Oil & Gas, Petrochemical, Power, and Process Industries. 
                  We are committed to delivering engineering excellence through innovation, 
                  precision, and unwavering commitment to quality.
                </p>
                <Button variant="accent" size="lg" asChild>
                  <Link to="/services">
                    Explore Our Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={aboutTeam}
                    alt="Engineering team"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted">
          <div className="container-industrial">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-industrial p-8 md:p-10">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver world-class engineering and CAD solutions that enable our clients 
                  to build safer, more efficient, and sustainable industrial facilities. We are 
                  committed to excellence in every project, ensuring precision, compliance, 
                  and innovation in all our deliverables.
                </p>
              </div>
              <div className="card-industrial p-8 md:p-10">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a globally recognized leader in engineering and CAD services, known 
                  for our technical expertise, innovative solutions, and unwavering commitment 
                  to client success. We aspire to shape the future of industrial infrastructure 
                  through technology-driven engineering excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-background">
          <div className="container-industrial">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                What Drives Us
              </span>
              <h2 className="section-title mb-4">Our Core Values</h2>
              <p className="section-subtitle mx-auto">
                The principles that guide our work and define our commitment to excellence.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="card-industrial p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-industrial">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Engineering Capabilities
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Our comprehensive range of engineering and CAD services covers the complete 
                  lifecycle of industrial projects, from conceptual design to detailed engineering 
                  and construction support.
                </p>
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{capability}</span>
                  </div>
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

export default About;
