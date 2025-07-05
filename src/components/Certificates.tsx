import React from 'react';
import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Web Development',
      provider: 'Internshala Trainings',
      issued: 'Sep 2024',
      credentialId: 'i8ulmtqta4s',
      skills: ['Web Development', 'HTML', 'CSS', 'JavaScript'],
      logo: '🎓'
    },
    {
      title: 'AI and Disaster Management',
      provider: 'Coursera',
      issued: 'Nov 2023',
      credentialId: 'SXDMBZR9JXMH',
      skills: ['Artificial Intelligence'],
      logo: '🤖'
    },
    {
      title: 'High Performance Collaboration: Leadership, Teamwork, and Negotiation',
      provider: 'Coursera',
      issued: 'Nov 2023',
      credentialId: 'DK66W7KVYAAH',
      skills: ['Organizational Leadership', 'Collaboration', 'Teamwork', 'Leadership and Management'],
      logo: '👥'
    },
    {
      title: 'Human Resources Management Capstone: HR for People Managers',
      provider: 'Coursera',
      issued: 'Nov 2023',
      credentialId: '2V6JVHUS7FRE',
      skills: ['Human Resources', 'HR Management and Planning', 'Employee Performance Management', 'Recruitment'],
      logo: '👔'
    },
    {
      title: 'Work Smarter, Not Harder: Time Management for Personal & Professional Productivity',
      provider: 'Coursera',
      issued: 'Nov 2023',
      credentialId: '7SRSX42HEQCS',
      skills: ['Multitasking', 'Productivity', 'Personal Development', 'Time Management'],
      logo: '⏰'
    },
    {
      title: 'Entrepreneurship',
      provider: 'Coursera',
      issued: 'Mar 2023',
      credentialId: 'EGQDLLRY8AVV',
      skills: ['Business Development', 'Strategic Planning'],
      logo: '💼'
    },
    {
      title: 'Introduction to Cloud Computing',
      provider: 'Coursera',
      issued: 'Mar 2023',
      credentialId: '98RS2Y9FV2JK',
      skills: ['Cloud Computing', 'AWS', 'Cloud Architecture'],
      logo: '☁️'
    },
    {
      title: '12 Hours HTML, CSS, Javascript, ReactJS Bootcamp',
      provider: 'TWD',
      issued: 'Nov 2022',
      credentialId: 'ReactJS Bootcamp',
      skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
      logo: '⚛️'
    },
    {
      title: 'HTML, CSS and JS Bootcamp',
      provider: 'TWD',
      issued: 'Oct 2022',
      credentialId: 'HTML/CSS/JS Bootcamp',
      skills: ['HTML', 'CSS', 'JavaScript'],
      logo: '💻'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#090040]/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-[#090040]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-xl rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-white/30 hover:bg-white/50"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{cert.logo}</div>
                <div className="text-[#090040]">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {cert.title}
              </h3>

              {/* Provider */}
              <p className="text-[#090040] font-semibold mb-3">{cert.provider}</p>

              {/* Date and Credential */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Issued {cert.issued}</span>
                </div>
                {cert.credentialId && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4" />
                    <span className="font-mono text-xs">ID: {cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-[#090040]/10 text-[#090040] text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Show Credential Button */}
              <button className="w-full bg-white/50 backdrop-blur-sm border border-white/40 hover:border-[#090040] hover:bg-white/70 text-gray-700 hover:text-[#090040] py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group">
                <span>Show Credential</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;