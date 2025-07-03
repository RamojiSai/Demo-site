import React from 'react';
import { MapPin, Target, Globe, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '2025', label: 'Founded' },
    { number: '24hrs', label: 'Response Time' },
    { number: '48hrs', label: 'Delivery Time' },
    { number: 'Global', label: 'Reach' }
  ];

  const differentiators = [
    {
      icon: Target,
      title: 'Dynamic AI Assistance',
      description: 'Real-time personalization using advanced AI algorithms'
    },
    {
      icon: Zap,
      title: 'Real-time Customization',
      description: 'Instant adaptation to your specific needs and industry'
    },
    {
      icon: Globe,
      title: 'Professional Delivery',
      description: 'Global service with local expertise and understanding'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
          <div className="flex items-center justify-center space-x-2 text-blue-600 mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-medium">Proudly based in Hyderabad, India</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mission */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-blue-600" />
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are solving the challenges job seekers face when it comes to building quality resumes, 
              portfolios, and preparing for interviews. Traditional methods are time-consuming, outdated, and expensive.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We're here to offer an automated, AI-powered solution that's fast, affordable, and reliable — 
              whether you're a fresher, experienced developer, designer, or career-switcher.
            </p>

            {/* Target Audience */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-2" />
                We Serve
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {['Job Seekers', 'Career Changers', 'Freelancers', 'Students'].map((audience, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{audience}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Market Position */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Market Position</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              While traditional services often rely on templates or generic formats, PortAI is using 
              real-time data and intelligent systems to personalize every career tool.
            </p>

            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;