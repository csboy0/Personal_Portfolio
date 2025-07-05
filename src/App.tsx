import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Experience />
      <Certificates />
      <Portfolio />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
}

export default App;