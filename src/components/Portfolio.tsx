import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github, Globe, Server, Code, Palette, TrendingUp, Search, Database } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Multi-Client WHMCS Hosting Platform',
      category: 'Server Management',
      year: '2024',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'server',
      description: 'Complete hosting platform with automated billing, client management, and server provisioning using WHMCS and cPanel/WHM integration.',
      technologies: ['WHMCS', 'cPanel/WHM', 'Linux', 'MySQL', 'PHP'],
      link: '#',
      github: '#',
      icon: <Server className="w-5 h-5" />
    },
    {
      id: 2,
      title: 'E-commerce WordPress Website',
      category: 'WordPress',
      year: '2024',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'wordpress',
      description: 'Custom WooCommerce store with advanced product filtering, payment gateway integration, and inventory management system.',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Stripe API'],
      link: '#',
      github: '#',
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 3,
      title: 'Cloud Server Migration & Optimization',
      category: 'Server Management',
      year: '2024',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'server',
      description: 'Migrated 50+ websites from shared hosting to cloud infrastructure with 40% performance improvement and 99.9% uptime.',
      technologies: ['AWS', 'DigitalOcean', 'Nginx', 'Redis', 'CloudFlare'],
      link: '#',
      github: '#',
      icon: <Server className="w-5 h-5" />
    },
    {
      id: 4,
      title: 'Custom WordPress Plugin Development',
      category: 'WordPress',
      year: '2024',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'wordpress',
      description: 'Advanced booking system plugin with calendar integration, payment processing, and automated email notifications.',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'MySQL', 'REST API'],
      link: '#',
      github: '#',
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 5,
      title: 'SaaS Dashboard UI/UX Design',
      category: 'UI/UX Design',
      year: '2024',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'design',
      description: 'Complete dashboard redesign for a project management SaaS with improved user flow and 35% increase in user engagement.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing'],
      link: '#',
      github: '#',
      icon: <Palette className="w-5 h-5" />
    },
    {
      id: 6,
      title: 'Digital Marketing Campaign Platform',
      category: 'Digital Marketing',
      year: '2024',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'marketing',
      description: 'Comprehensive digital marketing campaign that increased client ROI by 250% through multi-channel strategy and automation.',
      technologies: ['Google Ads', 'Facebook Ads', 'Email Marketing', 'Analytics', 'CRM Integration'],
      link: '#',
      github: '#',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 7,
      title: 'SEO Optimization & Analytics Dashboard',
      category: 'SEO',
      year: '2024',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'seo',
      description: 'Custom SEO dashboard with real-time keyword tracking, competitor analysis, and automated reporting for 20+ client websites.',
      technologies: ['Google Analytics', 'Search Console', 'SEMrush API', 'PHP', 'Chart.js'],
      link: '#',
      github: '#',
      icon: <Search className="w-5 h-5" />
    },
    {
      id: 8,
      title: 'Real Estate WordPress Theme',
      category: 'WordPress',
      year: '2023',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'wordpress',
      description: 'Custom real estate theme with advanced property search, virtual tours integration, and lead management system.',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Google Maps API', 'IDX Integration'],
      link: '#',
      github: '#',
      icon: <Code className="w-5 h-5" />
    },
    {
      id: 9,
      title: 'High-Performance Database Optimization',
      category: 'Server Management',
      year: '2023',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'server',
      description: 'Database optimization project that reduced query response time by 60% and improved overall application performance.',
      technologies: ['MySQL', 'Redis', 'Memcached', 'Query Optimization', 'Indexing'],
      link: '#',
      github: '#',
      icon: <Database className="w-5 h-5" />
    },
    {
      id: 10,
      title: 'Mobile App UI Design System',
      category: 'UI/UX Design',
      year: '2023',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'design',
      description: 'Complete design system for a fintech mobile app with consistent components, accessibility standards, and user testing.',
      technologies: ['Figma', 'Design Systems', 'Prototyping', 'User Testing', 'Accessibility'],
      link: '#',
      github: '#',
      icon: <Palette className="w-5 h-5" />
    },
    {
      id: 11,
      title: 'Social Media Automation Tool',
      category: 'Digital Marketing',
      year: '2023',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'marketing',
      description: 'Automated social media management tool with content scheduling, analytics tracking, and multi-platform posting.',
      technologies: ['Social Media APIs', 'PHP', 'Cron Jobs', 'Analytics', 'Content Management'],
      link: '#',
      github: '#',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 12,
      title: 'Local Business SEO Campaign',
      category: 'SEO',
      year: '2023',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'seo',
      description: 'Local SEO campaign that improved Google My Business rankings and increased local search visibility by 180%.',
      technologies: ['Local SEO', 'Google My Business', 'Citation Building', 'Schema Markup', 'Local Keywords'],
      link: '#',
      github: '#',
      icon: <Search className="w-5 h-5" />
    }
  ];

  const filters = ['All', 'WordPress', 'Server Management', 'UI/UX Design', 'Digital Marketing', 'SEO'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Show only first 9 projects
  const displayedProjects = filteredProjects.slice(0, 9);

  return (
    <section id="project" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#090040]/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-[#090040]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore my diverse portfolio spanning WordPress development, server administration, 
            UI/UX design, digital marketing, and SEO optimization
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="bg-white/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 hover:bg-white/60 hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:-translate-y-2">
                {/* Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                      <button className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                      <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30">
                        <Github className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#090040] text-sm font-medium">{project.year}</span>
                    <div className="flex gap-2">
                      <button className="text-gray-400 hover:text-[#090040] transition-colors">
                        <Globe className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-[#090040] transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#090040] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-[#090040]/10 text-[#090040] text-xs rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* View Project Button */}
                  <button className="w-full bg-white/50 backdrop-blur-sm hover:bg-[#090040] text-gray-700 hover:text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-white/30">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;