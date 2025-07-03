import React from 'react';
import { Rocket, Sparkles, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Rocket className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-medium">We're Building Something Amazing!</span>
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              PortAI
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 animate-slide-up delay-200">
            Your one-stop platform for{' '}
            <span className="font-semibold text-yellow-300">AI-powered career services</span>
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-300">
            We're developing an intelligent platform to help individuals succeed in their careers with 
            AI-generated resumes, professional portfolios, and mock interviews with AI evaluation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up delay-400">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeBCmWawQVzCN7kl7Ls-7P946MzpAuv2v7bA5hxU5b1dK7_jQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>

          {/* Status Badge */}
          <div className="mt-16 inline-flex items-center space-x-3 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 animate-slide-up delay-500">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Manual Support is Live! First response in 24 hours</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;