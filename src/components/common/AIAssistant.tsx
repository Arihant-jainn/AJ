import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { generateResponse } from '../../data/aiAssistantData';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Arihant's AI assistant. I can help you learn more about his skills, projects, experience, and availability. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "What are Arihant's key skills?",
    "Tell me about his projects",
    "What is his experience level?",
    "How can I contact him?",
    "Is he available for work?",
    "What does he blog about?"
  ];

  const handleSendMessage = (text?: string) => {
    const messageText = text || message;
    if (!messageText.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setMessage('');
    setIsTyping(true);

    // Generate AI response using the knowledge base
    setTimeout(() => {
      const response = generateResponse(messageText);
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      {/* Floating Assistant Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-blue-500/20"
        initial={{ opacity: 0, y: 100, scale: 0 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <Bot size={24} />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
        />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]"
          >
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="p-2 bg-white/20 rounded-full"
                  >
                    <Bot size={20} />
                  </motion.div>
                  <div>
                    <span className="font-bold">AI Assistant</span>
                    <div className="text-xs opacity-90">Always here to help</div>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-gray-800/50">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-[85%] ${msg.isBot ? 'order-2' : ''}`}>
                      <div className={`p-4 rounded-2xl shadow-lg ${
                        msg.isBot
                          ? 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      }`}>
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      </div>
                      <div className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${
                        msg.isBot ? 'text-left' : 'text-right'
                      }`}>
                        {formatTime(msg.timestamp)}
                      </div>
                    </div>
                    {msg.isBot && (
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3 order-1 shadow-lg"
                      >
                        <Sparkles size={14} className="text-white" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <Sparkles size={14} className="text-white" />
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ 
                                duration: 0.6, 
                                repeat: Infinity, 
                                delay: i * 0.2 
                              }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Quick Questions */}
                {messages.length === 1 && !isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3"
                  >
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center flex items-center justify-center">
                      <HelpCircle size={12} className="mr-1" />
                      Quick questions to get started:
                    </p>
                    {quickQuestions.map((question, index) => (
                      <motion.button
                        key={question}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSendMessage(question)}
                        className="w-full text-left p-3 text-sm bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-700 rounded-xl transition-all duration-300 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md"
                      >
                        <MessageCircle className="inline mr-2" size={14} />
                        {question}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me anything about Arihant..."
                    className="flex-1 px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-300 shadow-sm"
                    disabled={isTyping}
                  />
                  <motion.button
                    onClick={() => handleSendMessage()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isTyping || !message.trim()}
                    className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Powered by AI • Always learning about Arihant
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;