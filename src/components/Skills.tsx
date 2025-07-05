import React from 'react';
import { Code, Database, Server, Globe, Palette, TrendingUp, Search } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full Stack Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'PHP/MySQL', level: 50 },
        { name: 'JavaScript/Node.js', level: 25 },
        { name: 'React', level: 25 },
      ]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Server Administration',
      skills: [
        { name: 'cPanel/WHM', level: 95 },
        { name: 'Linux', level: 85 },
        { name: 'Apache/Nginx', level: 80 },
        { name: 'AWS/DigitalOcean', level: 75 }
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'WordPress Development',
      skills: [
        { name: 'WordPress', level: 90 },
        { name: 'WooCommerce', level: 85 },
        { name: 'Custom Themes', level: 80 },
        { name: 'Plugin Development', level: 75 }
      ]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'SEO & Analytics',
      skills: [
        { name: 'Google Analytics', level: 85 },
        { name: 'SEO Optimization', level: 80 },
        { name: 'Keyword Research', level: 75 },
        { name: 'Google Search Console', level: 80 }
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'UI/UX Design',
      skills: [
        { name: 'Figma', level: 70 },
        { name: 'Canva', level: 65 },
        { name: 'User Research', level: 60 },
        { name: 'Wireframing', level: 75 }
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Digital Marketing',
      skills: [
        { name: 'Social Media Marketing', level: 80 },
        { name: 'Google Ads', level: 75 },
        { name: 'Email Marketing', level: 70 },
        { name: 'Meta', level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#090040]/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-[#090040]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 border border-white/30 hover:bg-white/60 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="text-[#090040] mr-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-[#090040] text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/50 backdrop-blur-sm rounded-full h-2 border border-white/30">
                      <div
                        className="bg-gradient-to-r from-[#090040] to-[#0a0050] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;