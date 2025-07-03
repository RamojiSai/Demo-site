import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/Logo.jpeg" 
                alt="PortAI Technologies Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-2xl font-bold">PortAI Technologies</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming careers with AI-powered solutions. Based in Hyderabad, serving globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Services', 'About', 'How It Works', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <div className="space-y-2 text-gray-400">
              <p>AI-Generated Resumes</p>
              <p>Professional Portfolios</p>
              <p>Mock Interviews with AI</p>
              <p>Career Consultation</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2025 PortAI Technologies. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Full of </span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>with</span>
              <span>PortAI Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;