import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Arihant Jain
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Full Stack Developer & AI ML Engineer
          </motion.p>
          
          <motion.p
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Passionate fresher ready to build innovative solutions and contribute to cutting-edge projects
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
      <motion.button
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.open("src/assets/Arihant_Jain.pdf", "_blank")}
  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
>
  <Download className="inline mr-2" size={20} />
  Download Resume
</motion.button>

            
            <motion.div className="flex space-x-4">
              {[
                { icon: Github, href: 'https://github.com/Arihant-jainn', label: 'GitHub' },
               
                { icon: Mail, href: 'jarihant220@gmail.com', label: 'Contact' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={social.href}
                  className="p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <social.icon size={24} className="text-gray-700 dark:text-gray-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;