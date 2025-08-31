import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import { AnimatePresence } from 'framer-motion';

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'dark bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50 dark:from-gray-900/90 dark:via-blue-900/20 dark:to-purple-900/30 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;