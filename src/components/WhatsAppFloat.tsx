import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919301484705'; // Your phone number
    const message = encodeURIComponent('Hello Arun! I found your portfolio and would like to discuss a project with you.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* WhatsApp Button */}
      <div
        className={`relative transition-all duration-300 ${
          isHovered ? 'transform scale-110' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-full left-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          Chat with me on WhatsApp
          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>

        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden"
          aria-label="Chat on WhatsApp"
        >
          {/* Ripple effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          
          {/* WhatsApp Icon */}
          <MessageCircle className="w-7 h-7 relative z-10 group-hover:scale-110 transition-transform duration-300" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        </button>

        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full">
          <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;