import React from 'react';
import { Download, Award, Users, Server } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-6 h-6" />, number: '2+', label: 'Years Experience' },
    { icon: <Users className="w-6 h-6" />, number: '50+', label: 'Projects Completed' },
    { icon: <Server className="w-6 h-6" />, number: '20+', label: 'Servers Managed' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#090040]/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-[#090040]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-2xl">
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#090040] text-white p-4 rounded-2xl">
                <Award className="w-10 h-10" />
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I'm a passionate WordPress Developer & Server Administrator with 2+ years of experience 
              in creating digital solutions that make a difference. I specialize in custom WordPress development, 
              server management, and bringing technical solutions to life through code.
            </p>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe in 
              continuous learning and staying up-to-date with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="bg-white/50 backdrop-blur-sm w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 text-[#090040] border border-white/30">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
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