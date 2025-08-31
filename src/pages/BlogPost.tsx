import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Code, Heart, Eye, ThumbsUp } from 'lucide-react';

const blogData: Record<string, any> = {
  'building-scalable-react-applications': {
    title: 'Building Scalable React Applications',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'tech',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['React', 'JavaScript', 'Architecture'],
    views: '1.2K',
    likes: '89',
    content: `
      <p>Building scalable React applications requires careful planning and architectural decisions from the start. In this comprehensive guide, we'll explore the key principles and patterns that will help you create maintainable and scalable React applications.</p>
      
      <h2>1. Component Architecture</h2>
      <p>The foundation of any scalable React application lies in its component architecture. Here are some key principles:</p>
      
      <ul>
        <li><strong>Single Responsibility Principle:</strong> Each component should have one clear purpose</li>
        <li><strong>Composition over Inheritance:</strong> Use composition to build complex UIs</li>
        <li><strong>Props Interface Design:</strong> Design clear and consistent prop interfaces</li>
      </ul>
      
      <h2>2. State Management</h2>
      <p>As your application grows, state management becomes crucial. Consider these approaches:</p>
      
      <h3>Local State</h3>
      <p>Use useState and useReducer for component-level state that doesn't need to be shared.</p>
      
      <h3>Global State</h3>
      <p>For shared state, consider Context API for simple cases, or Redux Toolkit for complex state management needs.</p>
      
      <h2>3. Performance Optimization</h2>
      <p>Implement performance optimizations early:</p>
      
      <ul>
        <li>Use React.memo for expensive components</li>
        <li>Implement code splitting with React.lazy</li>
        <li>Optimize bundle size with proper tree shaking</li>
        <li>Use useMemo and useCallback judiciously</li>
      </ul>
      
      <h2>4. Testing Strategy</h2>
      <p>A solid testing strategy is essential for scalable applications:</p>
      
      <ul>
        <li>Unit tests for individual components</li>
        <li>Integration tests for component interactions</li>
        <li>End-to-end tests for critical user flows</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building scalable React applications is an ongoing process that requires attention to architecture, performance, and maintainability. By following these principles and continuously refactoring your code, you can create applications that grow with your needs.</p>
    `
  },
  'the-digital-symphony': {
    title: 'The Digital Symphony',
    date: '2024-01-12',
    readTime: '3 min read',
    category: 'poetry',
    image: 'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Poetry', 'Technology', 'Art'],
    views: '856',
    likes: '124',
    content: `
      <div class="poetry-content">
        <p><em>In circuits deep and code so bright,<br/>
        Where algorithms dance through the night,<br/>
        A symphony of ones and zeros plays,<br/>
        In the silicon halls of modern days.</em></p>
        
        <p><em>Each function call, a note so clear,<br/>
        Each loop, a rhythm drawing near,<br/>
        Variables whisper secrets untold,<br/>
        In languages both new and old.</em></p>
        
        <p><em>The screen glows with electric dreams,<br/>
        While data flows in endless streams,<br/>
        Debugging fears and testing hope,<br/>
        On syntax mountains, we learn to cope.</em></p>
        
        <p><em>From morning coffee to midnight's call,<br/>
        We build the future, bit by all,<br/>
        In this digital symphony we write,<br/>
        Code becomes art in pixeled light.</em></p>
        
        <p><em>So here's to those who dream in code,<br/>
        Who walk the less-traveled road,<br/>
        May your algorithms run true and fast,<br/>
        And your legacy in bytes forever last.</em></p>
      </div>
      
      <hr class="my-8 border-gray-300 dark:border-gray-600" />
      
      <h2>About This Piece</h2>
      <p>This poem captures the essence of what it means to be a developer in the modern age. It's about the beauty we find in code, the late nights spent debugging, and the dreams we build with technology.</p>
      
      <p>As a fresher entering this incredible field, I'm amazed by how programming can be both logical and creative, structured yet expressive. Every line of code is a brushstroke in the digital canvas we're painting together.</p>
    `
  },
  'understanding-async-await-javascript': {
    title: 'Understanding Async/Await in JavaScript',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'tech',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['JavaScript', 'Async', 'Programming'],
    views: '2.1K',
    likes: '156',
    content: `
      <p>Asynchronous programming is a cornerstone of modern JavaScript development. Understanding async/await is crucial for building responsive web applications that handle multiple operations efficiently.</p>
      
      <h2>What is Async/Await?</h2>
      <p>Async/await is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code. This makes it easier to read, write, and debug.</p>
      
      <h2>Basic Syntax</h2>
      <p>Here's how you can use async/await in your JavaScript code:</p>
      
      <h3>Async Functions</h3>
      <p>An async function always returns a Promise, even if you don't explicitly return one.</p>
      
      <h3>Await Expression</h3>
      <p>The await keyword can only be used inside async functions and pauses execution until the Promise resolves.</p>
      
      <h2>Error Handling</h2>
      <p>Use try/catch blocks to handle errors in async/await code:</p>
      
      <ul>
        <li>Wrap async operations in try blocks</li>
        <li>Handle errors in catch blocks</li>
        <li>Use finally for cleanup operations</li>
      </ul>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Always handle errors appropriately</li>
        <li>Use Promise.all() for concurrent operations</li>
        <li>Avoid blocking the main thread</li>
        <li>Consider using async/await with proper error boundaries</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mastering async/await will significantly improve your JavaScript development skills and help you build more robust applications. Practice with real-world examples and gradually incorporate these patterns into your projects.</p>
    `
  },
  'code-and-coffee': {
    title: 'Code and Coffee',
    date: '2024-01-08',
    readTime: '2 min read',
    category: 'poetry',
    image: 'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Poetry', 'Developer Life', 'Inspiration'],
    views: '743',
    likes: '98',
    content: `
      <div class="poetry-content">
        <p><em>Steam rises from my cup so warm,<br/>
        Like thoughts from sleepy mind transform,<br/>
        While functions execute their dance,<br/>
        In morning's caffeinated trance.</em></p>
        
        <p><em>Each sip brings clarity to code,<br/>
        Each line a step on learning's road,<br/>
        The bitter brew and syntax sweet,<br/>
        Make developer's day complete.</em></p>
        
        <p><em>In IDE's gentle glow I sit,<br/>
        Where coffee meets the coding wit,<br/>
        Debugging life one cup at time,<br/>
        In this caffeinated paradigm.</em></p>
        
        <p><em>So here's to mornings filled with hope,<br/>
        Where coffee helps us learn and cope,<br/>
        May every bug find its solution,<br/>
        In this java-script revolution.</em></p>
      </div>
      
      <hr class="my-8 border-gray-300 dark:border-gray-600" />
      
      <h2>The Developer's Ritual</h2>
      <p>Every developer has their ritual, and for many of us, it starts with that first cup of coffee. There's something magical about the combination of caffeine and code that sparks creativity and problem-solving abilities.</p>
      
      <p>This poem celebrates that daily ritual that connects developers worldwide - the moment when coffee meets code, and possibilities become infinite.</p>
    `
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? blogData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5 dark:opacity-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ x: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 p-3 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Blog</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            
            <div className="absolute top-6 left-6">
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 backdrop-blur-md border ${
                  post.category === 'tech' 
                    ? 'bg-blue-100/90 text-blue-800 border-blue-200' 
                    : 'bg-pink-100/90 text-pink-800 border-pink-200'
                }`}
              >
                {post.category === 'tech' ? <Code size={14} /> : <Heart size={14} />}
                <span>{post.category}</span>
              </motion.span>
            </div>

            <div className="absolute bottom-6 right-6 flex space-x-3">
              <div className="flex items-center space-x-1 px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full text-sm">
                <Eye size={14} />
                <span>{post.views}</span>
              </div>
              <div className="flex items-center space-x-1 px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full text-sm">
                <ThumbsUp size={14} />
                <span>{post.likes}</span>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-between mb-8 pb-6 border-b border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Share2 size={16} />
                <span>Share</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {post.tags.map((tag: string, index: number) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  #{tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Engagement Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                  >
                    <ThumbsUp size={16} />
                    <span>{post.likes}</span>
                  </motion.button>
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <Eye size={16} />
                    <span>{post.views} views</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                >
                  Share Article
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            More {post.category === 'tech' ? 'Tech Articles' : 'Poetry'}
          </h3>
          <div className="text-center">
            <motion.button
              onClick={() => navigate('/#blog')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="text-gray-800 dark:text-white font-medium">View All Posts</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default BlogPost;