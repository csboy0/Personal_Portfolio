import React from 'react';
import { Code, Server, Database, Palette, TrendingUp, Search } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'WordPress Development',
      description: 'Custom WordPress themes, plugins, and e-commerce solutions tailored to your business needs'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Server Administration',
      description: 'Expert cPanel/WHM management, cloud server deployments, and performance optimization'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Full-stack web development with modern technologies and secure, scalable solutions'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces with focus on user experience and conversion optimization'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns, social media management, and online brand building to grow your business'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO',
      description: 'Search engine optimization strategies to improve your website visibility and drive organic traffic growth'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#090040]/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-[#090040]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What can I do for you
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 group border border-white/30 hover:bg-white/60"
            >
              <div className="bg-white/50 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#090040] group-hover:bg-[#090040] group-hover:text-white transition-all duration-300 border border-white/30">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;