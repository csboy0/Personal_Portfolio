import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Alex Johnson
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative digital solutions 
              and beautiful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Built With</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              <span className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50">
                React
              </span>
              <span className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50">
                Vite
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> and <Code className="w-4 h-4 text-blue-400" /> 
            fueled by <Coffee className="w-4 h-4 text-yellow-500" />
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Alex Johnson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;