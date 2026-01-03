import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/home/ContactSection";
import heroPowerplant from "@/assets/hero-powerplant.jpg";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Port AI Technologies</title>
        <meta
          name="description"
          content="Get in touch with Port AI Technologies for engineering and CAD services. Located in Hyderabad, India. Call +91 94405 84273 or email contact@portaitechnologies.com"
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
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Have a project in mind? Get in touch with our engineering team 
              to discuss how we can help bring your vision to life.
            </p>
          </div>
        </section>

        <ContactSection />

        {/* Map Section */}
        <section className="h-[400px] bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30444.12644851823!2d78.38766!3d17.493289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f8e7a37e21%3A0x6d6a4ad46e7c2e8b!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Port AI Technologies Location"
          />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
