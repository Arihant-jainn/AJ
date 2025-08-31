import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Code, Coffee, Heart, Rocket } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const photoVariants = {
    hidden: { 
      opacity: 0, 
      rotateY: -90, 
      scale: 0.5,
      x: -100
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      x: 0,
      transition: { 
        duration: 1.2, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.8 }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Section */}
          <motion.div
            variants={photoVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-purple-400/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-2 border-cyan-400/30 rounded-full"
              />
              
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-2xl animate-pulse" />
              
              {/* Photo container */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white dark:border-gray-600"
              >
                <img
                  src="./src/assets/images/text-behind-image.png"
                  alt="Arihant Jain - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with floating icons */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[Code, Coffee, Heart, Rocket].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: 0 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className="absolute p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg backdrop-blur-sm"
                      style={{
                        top: `${20 + i * 20}%`,
                        left: `${15 + (i % 2) * 70}%`,
                      }}
                    >
                      <Icon size={16} className="text-blue-600" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
              >
                Hello, I'm Arihant! 👋
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <p className="text-lg">
                  A passionate && dedicated <span className="font-semibold text-blue-600 dark:text-blue-400">fresher</span> in 
                  the field of software development, eager to contribute to innovative projects and grow in the tech industry. 
                  With a strong foundation in programming and a keen interest in emerging technologies.
                </p>
                
                <p>
                  I specialize in <span className="font-semibold text-purple-600 dark:text-purple-400">full-stack development</span> with 
                  modern technologies like React, Node.js, and cloud platforms. My goal is to create efficient, scalable, 
                  and user-friendly applications that solve real-world problems.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, writing tech blogs, crafting poetry, 
                  or contributing to open-source projects. I believe in continuous learning and staying updated with industry trends.
                </p>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              variants={statsVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { 
                  label: 'Location', 
                  value: 'India', 
                  icon: <MapPin size={16} />,
                  color: 'from-green-500 to-green-700'
                },
                { 
                  label: 'Experience', 
                  value: 'Fresher', 
                  icon: <Calendar size={16} />,
                  color: 'from-blue-500 to-blue-700'
                },
                { 
                  label: 'Focus', 
                  value: 'AI ML & Full Stack', 
                  icon: <Code size={16} />,
                  color: 'from-purple-500 to-purple-700'
                },
                { 
                  label: 'Status', 
                  value: 'Open to Work', 
                  icon: <Rocket size={16} />,
                  color: 'from-orange-500 to-orange-700'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white shadow-md group-hover:shadow-lg transition-shadow`}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {item.label}
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-800 dark:text-white ml-11">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.4 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <Heart className="mr-2 text-red-500" size={20} />
                Passionate About
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Web Development', 'AI/ML', 'Open Source', 'Tech Blogging', 
                  'AI Agents', 'Problem Solving', 'Innovation', 'Learning'
                ].map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-white/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
