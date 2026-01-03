import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Clock, Briefcase } from "lucide-react";
import heroPowerplant from "@/assets/hero-powerplant.jpg";

const openPositions = [
  {
    title: "Senior Piping Engineer",
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "We're looking for an experienced piping engineer to lead complex industrial projects.",
  },
  {
    title: "CAD Designer",
    department: "Design",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Join our CAD team to create detailed engineering drawings for industrial facilities.",
  },
  {
    title: "Process Engineer",
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Design and optimize industrial processes for oil & gas and petrochemical clients.",
  },
];

const Career = () => {
  return (
    <>
      <Helmet>
        <title>Careers | Port AI Technologies - Join Our Team</title>
        <meta
          name="description"
          content="Join Port AI Technologies and build your career in engineering and CAD services. Explore current openings in Hyderabad, India."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroPowerplant}
              alt="Industrial facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/85" />
          </div>
          <div className="relative container-industrial text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Build your career with Port AI Technologies. We're always looking 
              for talented engineers and designers to join our growing team.
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="section-padding bg-background">
          <div className="container-industrial">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Why Join Us
              </span>
              <h2 className="section-title mb-4">Work on Challenging Projects</h2>
              <p className="section-subtitle mx-auto">
                At Port AI Technologies, you'll work on complex industrial projects 
                for leading companies in Oil & Gas, Petrochemical, and Power industries.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-industrial p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <Building2 className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">
                  Impactful Work
                </h3>
                <p className="text-muted-foreground text-sm">
                  Contribute to projects that shape industrial infrastructure worldwide.
                </p>
              </div>
              <div className="card-industrial p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <Briefcase className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">
                  Growth Opportunities
                </h3>
                <p className="text-muted-foreground text-sm">
                  Continuous learning and advancement in your engineering career.
                </p>
              </div>
              <div className="card-industrial p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">
                  Work-Life Balance
                </h3>
                <p className="text-muted-foreground text-sm">
                  Flexible working arrangements and supportive team environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding bg-muted">
          <div className="container-industrial">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Open Positions</h2>
              <p className="section-subtitle mx-auto">
                Explore our current openings and find the right opportunity for you.
              </p>
            </div>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <div
                  key={position.title}
                  className="card-industrial p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      {position.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-foreground">{position.department}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-foreground">{position.location}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-accent font-medium">{position.type}</span>
                    </div>
                  </div>
                  <Button variant="accent" asChild className="flex-shrink-0">
                    <Link to="/contact">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Don't see a position that fits? Send us your resume anyway!
              </p>
              <Button variant="outline" asChild>
                <a href="mailto:contact@portaitechnologies.com">
                  Send Your Resume
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Career;
