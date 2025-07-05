import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/csboy0' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/arunsiddhnath' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://www.instagram.com/mr.arunsiddhnath/' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:Arun.Mybiz@Gmail.com' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-[#090040]/30 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-[#090040]/20 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-[#090040]/15 rounded-full blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's start<br />
              project together?
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Contact me for questions, collaboration, conversation, or just saying 
              hello. Thank you for stopping by here.
            </p>
            
            <div className="space-y-4 mb-8">
              <a
                href="mailto:Arun.Mybiz@Gmail.com"
                className="text-white hover:text-blue-300 transition-colors text-lg underline decoration-blue-300"
              >
                Arun.Mybiz@Gmail.com
              </a>
              <br />
              <a
                href="tel:+919301484705"
                className="text-white hover:text-blue-300 transition-colors text-lg"
              >
                +91 930 148 4705
              </a>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-white font-bold">• Arun Siddhnath •</div>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                <img
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Arun Siddhnath"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-blue-500/10 to-transparent rounded-full backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;