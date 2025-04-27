import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm Pixel Bot, your friendly UI/UX assistant! How can I help you today? 🎮",
      isBot: true
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    // Education related
    if (lowerQuery.includes('education') || lowerQuery.includes('degree') || lowerQuery.includes('study')) {
      return "I'm currently pursuing my education in Computer Science with a focus on UI/UX Design. I've completed various certifications in web development and design principles. 🎓";
    }

    // Personal details
    if (lowerQuery.includes('who are you') || lowerQuery.includes('about you')) {
      return "I'm Pixel Bot, a friendly UI/UX assistant created by Sugumar M. I help visitors learn about UI/UX design and provide motivation! 🎮";
    }

    // UI/UX related
    if (lowerQuery.includes('ui') || lowerQuery.includes('ux') || lowerQuery.includes('design')) {
      return "UI/UX design is all about creating beautiful and functional user experiences. It combines aesthetics with usability to create products that users love. Remember: 'Good design is actually a lot harder to notice than poor design' - Don Norman 🎨";
    }

    // Motivation
    if (lowerQuery.includes('motivation') || lowerQuery.includes('inspire') || lowerQuery.includes('quote')) {
      const quotes = [
        "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
        "The best way to predict the future is to create it. - Peter Drucker",
        "Creativity is intelligence having fun. - Albert Einstein",
        "Design creates culture. Culture shapes values. Values determine the future. - Robert L. Peters"
      ];
      return quotes[Math.floor(Math.random() * quotes.length)] + " ✨";
    }

    // Portfolio related
    if (lowerQuery.includes('portfolio') || lowerQuery.includes('projects')) {
      return "Check out my portfolio! I've worked on various UI/UX projects including e-commerce designs, meditation apps, and more. You can find them in the Projects section! 🎯";
    }

    // Skills related
    if (lowerQuery.includes('skills') || lowerQuery.includes('technologies')) {
      return "I'm skilled in HTML, CSS, JavaScript, React, TypeScript, Next.js, and Tailwind CSS. I also have expertise in UI/UX design tools like Figma! 🛠️";
    }

    // Contact related
    if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('email')) {
      return "You can reach me through the Contact section! I'm always open to new opportunities and collaborations. Let's create something amazing together! 📧";
    }

    // Default response
    return "I'm here to help! You can ask me about education, UI/UX design, projects, skills, or request some motivation. What would you like to know? 🤔";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate bot response with a small delay
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-[#2a2a2a] rounded-2xl shadow-xl w-96 h-[500px] flex flex-col overflow-hidden border-2 border-[#4a4a4a]"
          >
            <div className="bg-[#4a4a4a] p-4 flex justify-between items-center border-b-2 border-[#6a6a6a]">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 relative">
                  {/* Pixel Art Robot Face */}
                  <div className="absolute inset-0 bg-[#8a8a8a] rounded-sm">
                    <div className="absolute top-1 left-1 w-2 h-2 bg-[#2a2a2a] rounded-sm"></div>
                    <div className="absolute top-1 right-1 w-2 h-2 bg-[#2a2a2a] rounded-sm"></div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-[#2a2a2a] rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-white font-semibold font-mono">Pixel Bot</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#2a2a2a]">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isBot
                        ? 'bg-[#4a4a4a] text-white border-2 border-[#6a6a6a]'
                        : 'bg-[#6a6a6a] text-white border-2 border-[#8a8a8a]'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#4a4a4a] text-white rounded-lg p-3 border-2 border-[#6a6a6a]">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-white rounded-sm animate-bounce" />
                      <div className="w-2 h-2 bg-white rounded-sm animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-white rounded-sm animate-bounce delay-200" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t-2 border-[#6a6a6a] bg-[#2a2a2a]">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg border-2 border-[#6a6a6a] bg-[#4a4a4a] text-white placeholder-gray-400 focus:outline-none focus:border-[#8a8a8a] font-mono"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  className="bg-[#6a6a6a] text-white p-2 rounded-lg hover:bg-[#8a8a8a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#8a8a8a]"
                  disabled={isLoading}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="bg-[#4a4a4a] text-white p-4 rounded-full shadow-lg hover:bg-[#6a6a6a] transition-colors border-2 border-[#6a6a6a]"
        >
          <div className="w-6 h-6 relative">
            {/* Pixel Art Robot Face */}
            <div className="absolute inset-0 bg-[#8a8a8a] rounded-sm">
              <div className="absolute top-1 left-1 w-1 h-1 bg-[#2a2a2a] rounded-sm"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-[#2a2a2a] rounded-sm"></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-[#2a2a2a] rounded-sm"></div>
            </div>
          </div>
        </motion.button>
      )}
    </div>
  );
} 