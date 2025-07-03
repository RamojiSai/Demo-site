import React from 'react';
import { FileText, MessageCircle, Truck, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Fill the Google Form',
      description: 'Complete our simple form with your requirements and career goals.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'We Contact You',
      description: 'Our team will reach out within 24 hours via WhatsApp or email.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Truck,
      title: 'Professional Delivery',
      description: 'Your personalized resume, portfolio, or mock interview session delivered in 48 hours.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CheckCircle,
      title: 'Done!',
      description: 'Ready to advance your career with professional-grade materials.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started is simple. Follow these easy steps to transform your career.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-gray-700">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-gray-900 mb-6">It's that easy!</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeBCmWawQVzCN7kl7Ls-7P946MzpAuv2v7bA5hxU5b1dK7_jQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;