import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, Code, Heart, BookOpen, Lightbulb, Coffee, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: 'tech' | 'poetry';
  image: string;
  slug: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  // Tech Blogs
  {
    id: 1,
    title: 'Building Scalable React Applications',
    excerpt: 'Learn how to structure your React applications for maximum scalability and maintainability with modern patterns...',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'tech',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'building-scalable-react-applications',
    tags: ['React', 'JavaScript', 'Architecture']
  },
  {
    id: 2,
    title: 'Understanding Async/Await in JavaScript',
    excerpt: 'Master asynchronous programming in JavaScript with practical examples and best practices for modern web development...',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'tech',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'understanding-async-await-javascript',
    tags: ['JavaScript', 'Async', 'Programming']
  },
  {
    id: 3,
    title: 'Database Design Best Practices',
    excerpt: 'Essential principles for designing efficient and scalable database schemas that grow with your application...',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'tech',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'database-design-best-practices',
    tags: ['Database', 'SQL', 'Design']
  },
  {
    id: 4,
    title: 'Getting Started with Machine Learning',
    excerpt: 'A beginner-friendly guide to machine learning concepts, algorithms, and practical implementation strategies...',
    date: '2024-01-02',
    readTime: '12 min read',
    category: 'tech',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'getting-started-machine-learning',
    tags: ['Machine Learning', 'Python', 'AI']
  },
  {
    id: 5,
    title: 'Modern CSS Techniques for 2024',
    excerpt: 'Explore the latest CSS features and techniques that will revolutionize your frontend development workflow...',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'tech',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'modern-css-techniques-2024',
    tags: ['CSS', 'Frontend', 'Design']
  },
  {
    id: 6,
    title: 'Docker for Developers',
    excerpt: 'Complete guide to containerization with Docker, from basics to advanced deployment strategies...',
    date: '2023-12-25',
    readTime: '9 min read',
    category: 'tech',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'docker-for-developers',
    tags: ['Docker', 'DevOps', 'Deployment']
  },
  
  // Poetry
  {
    id: 7,
    title: 'The Digital Symphony',
    excerpt: 'In circuits deep and code so bright, where algorithms dance through the night...',
    date: '2024-01-12',
    readTime: '3 min read',
    category: 'poetry',
    image: 'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'the-digital-symphony',
    tags: ['Poetry', 'Technology', 'Art']
  },
  {
    id: 8,
    title: 'Code and Coffee',
    excerpt: 'Steam rises from my cup, like thoughts from sleepy mind, while functions execute in perfect time...',
    date: '2024-01-08',
    readTime: '2 min read',
    category: 'poetry',
    image: 'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'code-and-coffee',
    tags: ['Poetry', 'Developer Life', 'Inspiration']
  },
  {
    id: 9,
    title: 'Variables and Dreams',
    excerpt: 'In the realm where variables hold more than data, they carry aspirations of a fresher coder...',
    date: '2024-01-03',
    readTime: '4 min read',
    category: 'poetry',
    image: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'variables-and-dreams',
    tags: ['Poetry', 'Programming', 'Philosophy']
  },
  {
    id: 10,
    title: 'The Debugging Blues',
    excerpt: 'When errors cascade like autumn leaves, and stack traces tell their stories...',
    date: '2023-12-30',
    readTime: '3 min read',
    category: 'poetry',
    image: 'https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'the-debugging-blues',
    tags: ['Poetry', 'Debugging', 'Humor']
  },
  {
    id: 11,
    title: 'Midnight Commits',
    excerpt: 'Under the glow of monitor light, where commits are made in the dead of night...',
    date: '2023-12-22',
    readTime: '2 min read',
    category: 'poetry',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'midnight-commits',
    tags: ['Poetry', 'Night Coding', 'Dedication']
  },
  {
    id: 12,
    title: 'The Algorithm\'s Dance',
    excerpt: 'In the ballet of binary trees, where recursion meets its destiny...',
    date: '2023-12-18',
    readTime: '3 min read',
    category: 'poetry',
    image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: 'the-algorithms-dance',
    tags: ['Poetry', 'Algorithms', 'Beauty']
  }
];

const BlogSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'tech' | 'poetry'>('all');
  const navigate = useNavigate();

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: -15
    }),
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const categoryIcons = {
    all: <BookOpen size={16} />,
    tech: <Code size={16} />,
    poetry: <Heart size={16} />
  };

  return (
    <section id="blog" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10" />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-8 h-8 rounded-full ${
              i % 2 === 0 ? 'bg-blue-400/20' : 'bg-purple-400/20'
            }`}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + i * 15}%`,
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
            Blog & Writings
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing my journey through technology and creative expression
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-2 border border-gray-200 dark:border-gray-700 shadow-lg">
            {[
              { key: 'all', label: 'All Posts', icon: categoryIcons.all },
              { key: 'tech', label: 'Tech Blogs', icon: categoryIcons.tech },
              { key: 'poetry', label: 'Poetry', icon: categoryIcons.poetry }
            ].map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.key as any)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 font-semibold ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
                {activeCategory === category.key && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl -z-10"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group cursor-pointer"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4">
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 backdrop-blur-sm border ${
                      post.category === 'tech' 
                        ? 'bg-blue-100/90 text-blue-800 border-blue-200' 
                        : 'bg-pink-100/90 text-pink-800 border-pink-200'
                    }`}
                  >
                    {post.category === 'tech' ? <Code size={12} /> : <Heart size={12} />}
                    <span>{post.category}</span>
                  </motion.span>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg backdrop-blur-sm"
                  >
                    <ArrowRight size={16} className="text-gray-700 dark:text-gray-300" />
                  </motion.div>
                </div>
              </div>

              <div className="p-6">
                <motion.h3
                  whileHover={{ x: 5 }}
                  className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2"
                >
                  {post.title}
                </motion.h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 text-sm font-semibold"
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Tech Articles', value: '6', icon: <Code />, color: 'from-blue-500 to-blue-700' },
                { label: 'Poetry Pieces', value: '6', icon: <Heart />, color: 'from-pink-500 to-pink-700' },
                { label: 'Total Reads', value: '2.5K+', icon: <BookOpen />, color: 'from-green-500 to-green-700' },
                { label: 'Writing Hours', value: '100+', icon: <Coffee />, color: 'from-orange-500 to-orange-700' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200 dark:border-gray-600 group hover:shadow-lg transition-all duration-300"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;