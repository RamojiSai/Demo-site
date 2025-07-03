import React from 'react';
import { FileText, Briefcase, MessageSquare, Clock, CheckCircle, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'AI-Generated Resumes',
      description: 'Automatically crafted, optimized, and role-tailored resumes that stand out to employers.',
      features: ['ATS-Optimized', 'Role-Specific', 'Professional Design'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      title: 'Professional Portfolios',
      description: 'Beautifully designed and custom-built portfolios to showcase your talent and achievements.',
      features: ['Custom Design', 'Responsive Layout', 'SEO Optimized'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Mock Interviews with AI',
      description: 'Realistic interview scenarios and detailed feedback using advanced AI evaluation.',
      features: ['Real-time Feedback', 'Industry-Specific', 'Performance Analytics'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  const guarantees = [
    { icon: Clock, text: 'First response in 24 hours' },
    { icon: CheckCircle, text: 'Delivery in 48 hours' },
    { icon: Zap, text: 'High-quality and fast turnaround' }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What We're Building
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're developing an intelligent and user-friendly platform to help individuals succeed in their careers. 
            Here's what you'll get when we launch:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Current Status: Manual Support is Live!
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              While the platform is still under construction, we are already helping clients manually with 
              resume creation, portfolio design, and mock interviews.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <guarantee.icon className="w-6 h-6 text-yellow-300" />
                <span className="font-medium">{guarantee.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeBCmWawQVzCN7kl7Ls-7P946MzpAuv2v7bA5hxU5b1dK7_jQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;