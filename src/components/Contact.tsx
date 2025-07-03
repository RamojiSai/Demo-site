import React from 'react';
import { Mail, MessageCircle, Instagram, Facebook, Linkedin, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hr@portaitechnologies.com',
      link: 'mailto:hr@portaitechnologies.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 94405 84273',
      link: 'https://wa.me/919440584273',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      link: 'https://www.instagram.com/port_ai_technologies?igsh=MXZ4M212d3I2ZTBkcg%3D%3D&utm_source=qr',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      link: 'https://www.facebook.com/share/1LZqbEavUU/?mibextid=wwXIfr',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/company/port-ai/',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're just one message away! Feel free to reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{method.title}</h4>
                      <p className="text-gray-300">{method.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location & Hours */}
            <div className="bg-gray-800 rounded-2xl p-6 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <h4 className="text-xl font-bold">Location</h4>
              </div>
              <p className="text-gray-300">Hyderabad, India</p>
              <p className="text-gray-400 text-sm mt-1">Serving clients globally</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-green-400" />
                <h4 className="text-xl font-bold">Response Time</h4>
              </div>
              <p className="text-gray-300">First response within 24 hours</p>
              <p className="text-gray-400 text-sm mt-1">Delivery within 48 hours</p>
            </div>
          </div>

          {/* Social Media & CTA */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Follow Us</h3>
            <div className="grid gap-4 mb-12">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 bg-gray-800 rounded-2xl p-4 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-medium text-white">{social.name}</span>
                </a>
              ))}
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
              <p className="text-blue-100 mb-6">
                Book a demo today and let us help you transform your career with AI-powered tools.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeBCmWawQVzCN7kl7Ls-7P946MzpAuv2v7bA5hxU5b1dK7_jQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Demo Now
              </a>
            </div>

            {/* Coming Soon */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-yellow-300 font-medium">Full Platform Launch Coming Soon!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;