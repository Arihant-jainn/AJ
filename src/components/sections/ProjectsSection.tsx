import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'mobile' | 'ai' | 'fullstack';
}

const projects: Project[] = [
  {
    id: 1,
    title: ' AI Stock Market Analyzer',
    description: 'An AI-powered web app that analyzes financial news and social media to provide real-time stock sentiment insights and predictions.',
    image: 'https://github.com/Arihant-jainn/AJ/blob/main/src/assets/projects/ChatGPT%20Image%20Aug%2020%2C%202025%2C%2006_53_21%20PM.png',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    githubUrl: 'https://github.com/Arihant-jainn/Market-Analyzer/blob/main/README.md',
    liveUrl: 'https://market-analyzer-dashboard.vercel.app/',
    category: 'AI'
  },
  {
    id: 2,
    title: 'AI Chat Bot ',
    description: 'Intelligent chatbot with natural language processing and machine learning capabilities.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    githubUrl: 'https://github.com/Arihant-jainn/AI-CHAT-BOT?tab=readme-ov-file',
    liveUrl: 'https://demo.chat-sdk.dev/',
    category: 'ai'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates and team coordination features.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com/arihantjain',
    liveUrl: '#',
    category: 'web'
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'Beautiful weather app with location-based forecasts and interactive maps.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React Native', 'TypeScript', 'OpenWeather API'],
    githubUrl: 'https://github.com/arihantjain',
    liveUrl: '#',
    category: 'mobile'
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with data visualization and scheduling.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'D3.js', 'Node.js', 'Redis'],
    githubUrl: 'https://github.com/arihantjain',
    liveUrl: '#',
    category: 'web'
  },
  {
    id: 6,
    title: 'Crypto Trading Bot',
    description: 'Automated trading bot with technical analysis and risk management algorithms.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'Pandas', 'ccxt', 'Docker'],
    githubUrl: 'https://github.com/arihantjain',
    liveUrl: '#',
    category: 'ai'
  },
  {
    id: 7,
    title: 'Learning Management System',
    description: 'Complete LMS with course creation, student tracking, and assessment tools.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    githubUrl: 'https://github.com/arihantjain',
    liveUrl: '#',
    category: 'fullstack'
  },
  {
    id: 8,
    title: 'IoT Home Automation',
    description: 'Smart home control system with sensor integration and mobile app interface.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Arduino', 'React Native', 'MQTT', 'Firebase'],
    githubUrl: 'https://github.com/arihantjain',
    liveUrl: '#',
    category: 'mobile'
  },
  {
    id: 9,
    title: 'Code Review Tool',
    description: 'AI-powered code review platform with automated suggestions and collaboration features.',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'GraphQL', 'Node.js', 'GitHub API'],
    githubUrl: 'https://github.com/arihantjain',
    liveUrl: '#',
    category: 'web'
  },
  {
    id: 10,
    title: 'Fitness Tracker',
    description: 'Personal fitness tracking app with workout plans and progress analytics.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Flutter', 'Firebase', 'TensorFlow Lite'],
    githubUrl: 'https://github.com/arihantjain',
    liveUrl: '#',
    category: 'mobile'
  },
  {
    id: 11,
    title: 'Blog CMS Platform',
    description: 'Content management system with markdown support, SEO optimization, and multi-author support.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'Sanity', 'Vercel', 'TypeScript'],
    githubUrl: 'https://github.com/arihantjain',
    liveUrl: '#',
    category: 'fullstack'
  },
  {
    id: 12,
    title: 'Real-time Chat App',
    description: 'Secure messaging platform with end-to-end encryption and group chat features.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/arihantjain',
    liveUrl: '#',
    category: 'web'
  },
  {
    id: 13,
    title: 'Machine Learning Pipeline',
    description: 'End-to-end ML pipeline for data processing, model training, and deployment automation.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'scikit-learn', 'Docker', 'AWS'],
    githubUrl: 'https://github.com/arihantjain',
    liveUrl: '#',
    category: 'ai'
  },
  {
    id: 14,
    title: 'Portfolio Website Builder',
    description: 'Drag-and-drop portfolio builder with customizable themes and deployment integration.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    githubUrl: 'https://github.com/arihantjain',
    liveUrl: '#',
    category: 'web'
  }
];

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: (index: number) => {
      const direction = index % 4;
      return {
        opacity: 0,
        x: direction === 0 ? -100 : direction === 1 ? 100 : direction === 2 ? -100 : 100,
        y: direction < 2 ? -50 : 50,
        scale: 0.8,
        rotateY: direction % 2 === 0 ? -15 : 15
      };
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, 100, 200, 100, 0],
              y: [0, -50, 0, 50, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions built with modern technologies and best practices
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                    project.category === 'web' ? 'bg-blue-100/80 text-blue-800 border-blue-200' :
                    project.category === 'mobile' ? 'bg-green-100/80 text-green-800 border-green-200' :
                    project.category === 'ai' ? 'bg-purple-100/80 text-purple-800 border-purple-200' :
                    'bg-orange-100/80 text-orange-800 border-orange-200'
                  }`}>
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg backdrop-blur-sm"
                  >
                    <Play size={16} className="text-gray-700 dark:text-gray-300" />
                  </motion.div>
                </div>
              </div>

              <div className="p-6">
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-xl text-center text-sm font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-center text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/arihantjain"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-blue-500/20 backdrop-blur-sm"
          >
            <Github size={24} />
            <span>More Projects on GitHub</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.a>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.8 }}
            className="mt-4 text-gray-600 dark:text-gray-400 text-sm"
          >
            Explore my complete collection of projects and contributions
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
