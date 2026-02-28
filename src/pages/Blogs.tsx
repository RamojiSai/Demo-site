import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Calendar, User } from "lucide-react";
import heroPetrochemical from "@/assets/hero-petrochemical.jpg";

const blogPosts = [
  {
    title: "Understanding P&ID: The Language of Process Engineering",
    slug: "understanding-pid",
    excerpt: "A comprehensive guide to Piping and Instrumentation Diagrams, their symbols, and how they're used in industrial plant design.",
    author: "Engineering Team",
    date: "December 15, 2025",
    category: "Process Engineering",
  },
  {
    title: "3D Piping Design: Best Practices for Complex Industrial Projects",
    slug: "3d-piping-design-best-practices",
    excerpt: "Learn the key considerations and best practices for creating accurate 3D piping models for oil & gas and petrochemical facilities.",
    author: "CAD Team",
    date: "December 10, 2025",
    category: "CAD Services",
  },
  {
    title: "Greenfield vs Brownfield Projects: Key Engineering Considerations",
    slug: "greenfield-vs-brownfield",
    excerpt: "Explore the differences between greenfield and brownfield projects and the unique engineering challenges each presents.",
    author: "Engineering Team",
    date: "December 5, 2025",
    category: "Plant Engineering",
  },
  {
    title: "The Role of Piping Stress Analysis in Plant Safety",
    slug: "piping-stress-analysis-safety",
    excerpt: "Understanding how piping stress analysis contributes to safe and reliable industrial plant operations.",
    author: "Engineering Team",
    date: "November 28, 2025",
    category: "Engineering",
  },
];

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blogs | Port AI Technologies - Engineering Insights</title>
        <meta
          name="description"
          content="Read our latest articles on plant engineering, CAD services, and industrial design best practices from Port AI Technologies."
        />
      </Helmet>

      <Header />

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
              Engineering Insights
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights 
              from our engineering and CAD experts.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-padding bg-background">
          <div className="container-industrial">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="card-industrial overflow-hidden group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blogs;
