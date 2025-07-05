import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Server Administrator & WordPress Developer',
      company: 'Oyeramu',
      type: 'Internship',
      location: 'Mumbai, Maharashtra, India',
      period: 'Mar 2024 - Apr 2024',
      description: [
        'Managed Linux servers with focus on performance optimization and security configurations',
        'Handled server deployments, monitoring, and routine maintenance to ensure high availability',
        'Troubleshot server-related issues including DNS configurations and web servers',
        'Implemented security protocols and monitoring systems'
      ]
    },
    {
      title: 'WordPress Developer & System Admin',
      company: 'Krayon',
      type: 'Full-time',
      location: 'Remote',
      period: 'March 2022 - July 2023',
      description: [
        'Created custom WordPress themes and plugins for e-commerce and business websites',
        'Configured and optimized LAMP/LEMP stack servers for improved website performance',
        'Managed DNS settings, SSL certificates, and domain configurations through cPanel',
        'Provided technical support and maintenance for client hosting environments'
      ]
    },
    {
      title: 'Project Manager',
      company: 'TDPVista',
      type: 'Internship',
      location: 'Bhopal, India',
      period: 'Jul 2022 - Aug 2022',
      description: [
        'Managed complete MERN stack project development from conception to deployment',
        'Collaborated with developers to build projects according to client specifications',
        'Managed project documentation and tracking progress and deliverables',
        'Conducted manual QA testing and managed quality assurance reports'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'SAGE University, Indore',
      period: '2024 - 2026',
      status: 'Currently pursuing',
      description: 'Advanced studies in computer applications with specialization in software development, database management, and emerging technologies. Coursework includes advanced programming, system analysis, web technologies, and project management.',
      highlights: ['Advanced Software Development', 'Database Management Systems', 'Web Technologies', 'Project Management']
    },
    {
      degree: 'Bachelor of Computer Applications (UI/UX)',
      institution: 'Jagran Lakecity University, Bhopal',
      period: 'Sep 2021 - Apr 2024',
      status: 'Completed',
      description: 'Comprehensive undergraduate program in computer applications with specialized focus on UI/UX design principles. Strong foundation in programming, web development, database management, and user experience design methodologies.',
      highlights: ['UI/UX Design Principles', 'Web Development', 'Database Management', 'Software Engineering', 'Human-Computer Interaction']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#090040]/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-[#090040]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Building className="w-6 h-6 text-[#090040]" />
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-[#090040]/20">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-[#090040] rounded-full"></div>
                  
                  <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:bg-white/60 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-[#090040]/20 backdrop-blur-sm text-[#090040] px-3 py-1 rounded-full text-sm font-medium border border-[#090040]/20">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-[#090040] font-semibold mb-2">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-[#090040] mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-[#090040]" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:bg-white/60 hover:shadow-lg transition-all duration-300">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-[#090040] font-semibold mb-2">{edu.institution}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      edu.status === 'Currently pursuing' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-gray-800">Key Highlights:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/50 backdrop-blur-sm text-gray-700 text-xs rounded-full border border-white/30"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/30">
                <div className="text-2xl font-bold text-[#090040] mb-1">2+</div>
                <div className="text-gray-700 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/30">
                <div className="text-2xl font-bold text-[#090040] mb-1">50+</div>
                <div className="text-gray-700 text-sm">Websites Managed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;