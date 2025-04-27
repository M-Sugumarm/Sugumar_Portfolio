import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Add welcome message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          text: "Hi! I'm Sugumar's AI assistant. I can tell you about his education, skills, projects, and more. What would you like to know?",
          isUser: false
        }]);
      }, 500);
    }
  }, [isOpen]);

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    // Education related
    if (lowerQuery.includes('education') || lowerQuery.includes('degree') || lowerQuery.includes('study')) {
      return "Sugumar has a strong educational background in Computer Science. He's currently pursuing his degree with a focus on UI/UX Design and Web Development. He's also completed various certifications in web technologies and design principles. 🎓";
    }

    // Skills related
    if (lowerQuery.includes('skills') || lowerQuery.includes('technologies') || lowerQuery.includes('tech stack')) {
      return "Sugumar is skilled in:\n• Frontend: HTML, CSS, JavaScript, React, TypeScript\n• UI/UX: Figma, Adobe XD\n• Backend: Node.js, Express\n• Database: MongoDB\n• Tools: Git, VS Code, Tailwind CSS\nHe's particularly passionate about creating beautiful and functional user interfaces! 💻";
    }

    // Projects related
    if (lowerQuery.includes('projects') || lowerQuery.includes('portfolio') || lowerQuery.includes('work')) {
      return "Sugumar has worked on various projects including:\n• E-commerce websites\n• Portfolio websites\n• UI/UX design projects\n• Web applications\nYou can check out his projects in the Projects section! 🚀";
    }

    // Experience related
    if (lowerQuery.includes('experience') || lowerQuery.includes('work experience') || lowerQuery.includes('job')) {
      return "Sugumar has experience in both UI/UX design and web development. He's worked on freelance projects and collaborated with various clients to create beautiful digital experiences. He's always looking for new opportunities to grow and learn! 💼";
    }

    // Contact related
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) {
      return "You can reach Sugumar through:\n• Email: sugus7215@gmail.com\n• LinkedIn: linkedin.com/in/sugumar-m-a96b06292\n• GitHub: github.com/sugumar33\n• Behance: behance.net/sugumarsugu32\n• Dribbble: dribbble.com/Sugumar\nFeel free to connect with him! 📧";
    }

    // Achievements related
    if (lowerQuery.includes('achievements') || lowerQuery.includes('awards') || lowerQuery.includes('accomplishments')) {
      return "Sugumar has won several awards in technical events and competitions. He's particularly proud of his achievements in UI/UX design competitions and hackathons. Check out the Achievements section for more details! 🏆";
    }

    // Default response
    return "I can tell you about Sugumar's education, skills, projects, experience, or achievements. What would you like to know? 🤔";
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      setIsTyping(true);
      
      // Generate and send response
      setTimeout(() => {
        const response = generateResponse(input);
        setMessages(prev => [...prev, { text: response, isUser: false }]);
        setIsTyping(false);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <MessageCircle size={24} />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-32 right-6 z-40 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
                >
                  <div className="relative">
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        background: [
                          'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
                          'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
                          'radial-gradient(circle, #EC4899 0%, transparent 70%)',
                          'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Animated Rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-white/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.2, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-white/20"
                      animate={{
                        scale: [1.2, 1.4, 1.2],
                        opacity: [0.3, 0.1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />

                    {/* Robot Face */}
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="flex space-x-1">
                          <motion.div
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                            className="w-1.5 h-1.5 bg-indigo-600 rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                            className="w-1.5 h-1.5 bg-indigo-600 rounded-full"
                          />
                        </div>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="absolute bottom-1 w-3 h-0.5 bg-indigo-600 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-sm text-white/80">Ask me about Sugumar!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-none'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                    }`}
                  >
                    {message.text.split('\n').map((line, i) => (
                      <p key={i} className={i > 0 ? 'mt-1' : ''}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-none">
                    <div className="flex space-x-2">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me about Sugumar..."
                  className="flex-1 p-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 
