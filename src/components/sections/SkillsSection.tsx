import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  Cloud,
  Terminal,
  Layers,
  Zap,
  Cpu,
  Server,
  GitBranch
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frontend' | 'backend' | 'ai' | 'tools' | 'cloud';
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  // Languages
  { name: 'Python', level: 90, category: 'languages', icon: <Code2 />, color: 'from-yellow-400 to-yellow-600' },
  { name: 'JavaScript', level: 88, category: 'languages', icon: <Code2 />, color: 'from-yellow-300 to-yellow-500' },
  { name: 'TypeScript', level: 85, category: 'languages', icon: <Code2 />, color: 'from-blue-400 to-blue-600' },
  { name: 'Java', level: 82, category: 'languages', icon: <Code2 />, color: 'from-red-400 to-red-600' },
  { name: 'C++', level: 78, category: 'languages', icon: <Code2 />, color: 'from-blue-500 to-blue-700' },
  
  // Frontend
  { name: 'React.js', level: 90, category: 'frontend', icon: <Globe />, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Next.js', level: 85, category: 'frontend', icon: <Globe />, color: 'from-gray-700 to-gray-900' },
  { name: 'HTML5', level: 95, category: 'frontend', icon: <Globe />, color: 'from-orange-400 to-orange-600' },
  { name: 'CSS3', level: 90, category: 'frontend', icon: <Globe />, color: 'from-blue-400 to-blue-600' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend', icon: <Globe />, color: 'from-teal-400 to-teal-600' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend', icon: <Server />, color: 'from-green-400 to-green-600' },
  { name: 'Express.js', level: 82, category: 'backend', icon: <Server />, color: 'from-gray-600 to-gray-800' },
  { name: 'MongoDB', level: 80, category: 'backend', icon: <Database />, color: 'from-green-500 to-green-700' },
  { name: 'PostgreSQL', level: 78, category: 'backend', icon: <Database />, color: 'from-blue-500 to-blue-700' },
  { name: 'REST APIs', level: 85, category: 'backend', icon: <Layers />, color: 'from-purple-400 to-purple-600' },
  { name: 'GraphQL', level: 75, category: 'backend', icon: <Layers />, color: 'from-pink-400 to-pink-600' },
  
  // AI & ML
  { name: 'Machine Learning', level: 82, category: 'ai', icon: <Brain />, color: 'from-purple-500 to-purple-700' },
  { name: 'PyTorch', level: 78, category: 'ai', icon: <Brain />, color: 'from-orange-500 to-orange-700' },
  { name: 'TensorFlow', level: 75, category: 'ai', icon: <Brain />, color: 'from-orange-400 to-orange-600' },
  { name: 'NLP', level: 80, category: 'ai', icon: <Brain />, color: 'from-indigo-400 to-indigo-600' },
  { name: 'LangChain', level: 72, category: 'ai', icon: <Brain />, color: 'from-green-400 to-green-600' },
  
  // Tools & DevOps
  { name: 'Git', level: 88, category: 'tools', icon: <GitBranch />, color: 'from-orange-500 to-orange-700' },
  { name: 'GitHub', level: 85, category: 'tools', icon: <GitBranch />, color: 'from-gray-700 to-gray-900' },
  { name: 'Docker', level: 75, category: 'tools', icon: <Cpu />, color: 'from-blue-500 to-blue-700' },
  { name: 'Postman', level: 82, category: 'tools', icon: <Zap />, color: 'from-orange-400 to-orange-600' },
  { name: 'VS Code', level: 92, category: 'tools', icon: <Terminal />, color: 'from-blue-400 to-blue-600' },
  { name: 'CI/CD', level: 70, category: 'tools', icon: <Cpu />, color: 'from-green-500 to-green-700' },
  
  // Cloud
  { name: 'AWS', level: 75, category: 'cloud', icon: <Cloud />, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Vercel', level: 85, category: 'cloud', icon: <Cloud />, color: 'from-gray-800 to-black' }
];

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = {
    languages: { 
      name: 'Programming Languages', 
      color: 'from-yellow-500 to-orange-500', 
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10',
      icon: <Code2 />
    },
    frontend: { 
      name: 'Frontend Development', 
      color: 'from-blue-500 to-cyan-500', 
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10',
      icon: <Globe />
    },
    backend: { 
      name: 'Backend & Database', 
      color: 'from-green-500 to-emerald-500', 
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10',
      icon: <Database />
    },
    ai: { 
      name: 'AI & Machine Learning', 
      color: 'from-purple-500 to-pink-500', 
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10',
      icon: <Brain />
    },
    tools: { 
      name: 'Tools & DevOps', 
      color: 'from-indigo-500 to-purple-500', 
      bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10',
      icon: <Terminal />
    },
    cloud: { 
      name: 'Cloud Platforms', 
      color: 'from-gray-600 to-gray-800', 
      bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/10 dark:to-gray-800/10',
      icon: <Cloud />
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
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
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive skill set spanning modern web development, AI/ML, and cloud technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className={`${categories[category as keyof typeof categories].bgColor} rounded-2xl p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${categories[category as keyof typeof categories].color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-2xl bg-gradient-to-r ${categories[category as keyof typeof categories].color} text-white mr-4 shadow-lg`}
                  >
                    {categories[category as keyof typeof categories].icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {categories[category as keyof typeof categories].name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ x: 5 }}
                      className="group/skill"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            className={`p-1 rounded-md bg-gradient-to-r ${skill.color} text-white text-xs`}
                          >
                            {skill.icon}
                          </motion.div>
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm font-bold text-gray-500 dark:text-gray-400"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + index * 0.1 + 0.5,
                              ease: "easeOut"
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white/30"
                              animate={{
                                x: ['-100%', '100%'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: categoryIndex * 0.2 + index * 0.1 + 2
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl">
            <div className="text-center mb-8">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.4 }}
                className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
              >
                Continuous Learning Journey
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.6 }}
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                As a passionate fresher, I'm constantly expanding my technical horizons and staying ahead of industry trends
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Projects Completed', value: '15+', icon: <Layers />, color: 'from-blue-500 to-blue-700' },
                { label: 'Technologies Learned', value: '25+', icon: <Code2 />, color: 'from-green-500 to-green-700' },
                { label: 'Hours of Coding', value: '1000+', icon: <Terminal />, color: 'from-purple-500 to-purple-700' },
                { label: 'Open Source Contributions', value: '10+', icon: <GitBranch />, color: 'from-orange-500 to-orange-700' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-600 group hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stat.color} text-white mb-3 shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.2 }}
              className="mt-8 text-center"
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Currently Exploring
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['Microservices', 'Kubernetes', 'Blockchain', 'Web3', 'Rust', 'Go'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 2.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-300 dark:border-gray-600"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;