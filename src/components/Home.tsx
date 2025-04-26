import { Github, Linkedin, Mail, Instagram, ArrowDown } from 'lucide-react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import ParticleBackground from './ParticleBackground';

export default function Home() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = [
    { text: "Hello", lang: "English" },
    { text: "வணக்கம்", lang: "Tamil" },
    { text: "Bonjour", lang: "French" },
    { text: "こんにちは", lang: "Japanese" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX - innerWidth / 2;
      const y = clientY - innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/sugumar-m-a96b06292',
      label: 'LinkedIn',
      color: '#0077B5'
    },
    {
      icon: <Github size={24} />,
      url: 'https://github.com/sugumar33',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: <Mail size={24} />,
      url: 'mailto:sugus7215@gmail.com',
      label: 'Email',
      color: '#EA4335'
    },
    {
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/megastarmsm',
      label: 'Instagram',
      color: '#E4405F'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Image Section */}
          <motion.div 
            className="relative w-full max-w-md mx-auto perspective-1000"
            style={{ rotateX, rotateY }}
          >
            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
              />
              <motion.div
                className="relative aspect-square rounded-xl bg-black"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="src/images/megstar.jpeg"
                  alt="Sugumar M"
                  className="w-full h-full object-cover rounded-xl"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="text-center md:text-left space-y-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="h-20">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={greetingIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-xl text-indigo-600 dark:text-indigo-400 font-mono mb-2"
                >
                  <span className="text-pink-500">&gt;</span> {greetings[greetingIndex].text}
                  <span className="text-sm text-gray-500 ml-2">({greetings[greetingIndex].lang})</span>
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500">
              I'm Sugumar M
            </h1>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <h2 className="text-2xl md:text-3xl text-indigo-600 dark:text-indigo-400">
                UI/UX Designer & Developer
              </h2>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center md:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    color: link.color,
                    y: -5
                  }}
                  className="text-gray-600 dark:text-gray-400 transition-all duration-300 hover:shadow-lg"
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Link to="about" smooth={true} duration={500} className="cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500"
                >
                  <ArrowDown className="text-white" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}