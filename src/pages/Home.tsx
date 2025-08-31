import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';
import AIAssistant from '../components/common/AIAssistant';

const Home: React.FC = () => {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
      <AIAssistant />
    </main>
  );
};

export default Home;