import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'experience', 'certificates', 'project', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#090040]/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-[#090040]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="text-gray-600 text-sm bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            Hello 👋, I'm Arun Siddhnath and I'm a
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          WordPress Developer<br />
          & Server Administrator
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Experienced WordPress Developer & Server Administrator with 2+ years of expertise in custom WordPress solutions, 
          web development, and server management. Specialized in cPanel/WHM administration and building secure, high-performance websites.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#090040]/90 backdrop-blur-sm hover:bg-[#0a0050] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group border border-white/10 shadow-lg shadow-[#090040]/25">
            Download Resume
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#contact"
            className={`backdrop-blur-sm border px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              activeSection === 'contact'
                ? 'bg-[#090040] border-[#090040] text-white shadow-lg shadow-[#090040]/25'
                : 'bg-white/20 border-white/30 hover:border-white/50 text-gray-700 hover:text-[#090040] hover:bg-white/30'
            }`}
          >
            <Mail size={18} />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;