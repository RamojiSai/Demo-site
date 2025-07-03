import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>PortAI Technologies - AI-Powered Career Services</title>
        <meta name="description" content="Transform your career with AI-powered resume creation, portfolio design, and mock interviews. Professional delivery in 48 hours from Hyderabad, India." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <HowItWorks />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;