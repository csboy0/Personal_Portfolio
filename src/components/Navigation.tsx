import React, { useState, useEffect } from 'react';
import { Menu, X, User, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Get all sections
      const sections = ['home', 'about', 'services', 'skills', 'experience', 'certificates', 'project', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      // Find which section is currently in view
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
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or on escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Portfolio', href: '#project', id: 'project' }
  ];

  const mobileNavItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Portfolio', href: '#project', id: 'project' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/10 backdrop-blur-2xl shadow-lg shadow-black/5 border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo/Brand Section */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#090040] via-[#0a0050] to-[#0b0060] rounded-2xl flex items-center justify-center shadow-lg shadow-[#090040]/25 group-hover:shadow-[#090040]/40 transition-all duration-300 group-hover:scale-105">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#090040] to-[#0a0050] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="block">
              <div className="text-gray-900 font-bold text-xl tracking-tight">Arun Siddhnath</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-[#090040] bg-[#090040]/10' 
                    : 'text-gray-700 hover:text-[#090040] hover:bg-[#090040]/10'
                }`}
              >
                {item.name}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#090040] transition-all duration-300 ${
                  activeSection === item.id ? 'w-6' : 'group-hover:w-6'
                }`}></div>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#090040] to-[#0a0050] hover:from-[#0a0050] hover:to-[#0b0060] text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#090040]/25"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden mobile-menu-container">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 text-gray-700 hover:text-[#090040] hover:bg-[#090040]/10 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#090040]/20"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-2xl shadow-2xl transform transition-all duration-500 ease-out z-50 ${
          isMenuOpen 
            ? 'translate-x-0' 
            : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#090040] to-[#0a0050] rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-bold text-xl tracking-tight">Arun Siddhnath</div>
                <div className="text-gray-500 text-sm font-medium">WordPress Developer</div>
              </div>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-2">
              {mobileNavItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-[#090040] text-white shadow-lg shadow-[#090040]/25' 
                      : 'text-gray-700 hover:bg-[#090040]/10 hover:text-[#090040]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-semibold text-lg">{item.name}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    activeSection === item.id ? 'text-white' : 'text-gray-400 group-hover:text-[#090040] group-hover:translate-x-1'
                  }`} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="border-t border-gray-200/50 p-6 space-y-4">
            <div className="space-y-3">
              <a
                href="mailto:Arun.Mybiz@Gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-[#090040] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Arun.Mybiz@Gmail.com</span>
              </a>
              <a
                href="tel:+919301484705"
                className="flex items-center gap-3 text-gray-600 hover:text-[#090040] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 930 148 4705</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">India</span>
              </div>
            </div>
            
            <a
              href="#contact"
              className="block w-full bg-gradient-to-r from-[#090040] to-[#0a0050] hover:from-[#0a0050] hover:to-[#0b0060] text-white text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#090040]/25"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;