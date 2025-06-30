import { Github, Linkedin, Mail, Instagram, ArrowDown } from 'lucide-react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import ParticleBackground from './ParticleBackground';
import profileImage from '../images/megstar.jpeg';

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
      // @ts-ignore: TypeScript false positive, greetings[] does have .length
      setGreetingIndex((prev: number) => (prev + 1) % greetings.length);
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

  interface SocialLink {
    icon: JSX.Element;
    url: string;
    label: string;
    color: string;
  }
  const socialLinks: SocialLink[] = [
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
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
        </svg>
      ),
      url: 'https://www.behance.net/sugumarsugu32',
      label: 'Behance',
      color: '#1769FF'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438-1.804.172-4.844 2.172-4.844 2.172s-1.667 1.105-3.334 1.105c-1.667 0-3.334-1.105-3.334-1.105s-3.17-.953-6.384-.438c-.35.11-.35.385 0 .495 3.17.953 6.384.438 6.384.438s1.667-1.105 3.334-1.105c1.667 0 3.334 1.105 3.334 1.105s3.17.953 6.384.438c.35-.11.35-.385 0-.495z"/>
        </svg>
      ),
      url: 'https://dribbble.com/SugumarM',
      label: 'Dribbble',
      color: '#EA4C89'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Image Section */}
          <motion.div 
            className="relative w-full max-w-sm md:max-w-md mx-auto perspective-1000"
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
                  src={profileImage}
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
            className="text-center md:text-left space-y-4 md:space-y-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="h-16 md:h-20">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={greetingIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-lg md:text-xl text-indigo-600 dark:text-indigo-400 font-mono mb-2"
                >
                  {/* @ts-ignore: TypeScript false positive, greetings[] does have numeric index */}
                  <span className="text-pink-500">&gt;</span> {greetings[greetingIndex].text}

                  {/* @ts-ignore: TypeScript false positive, greetings[] does have numeric index */}
 
                  <span className="text-xs md:text-sm text-gray-500 ml-2">({greetings[greetingIndex].lang})</span>
                </motion.h2>
              </AnimatePresence>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-500">
              I'm Sugumar M
            </h1>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: window.Infinity }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-indigo-600 dark:text-indigo-400">
                UI/UX Designer & Developer
              </h2>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center md:justify-start space-x-4 md:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* @ts-ignore: TypeScript false positive, socialLinks[] does have .map */}
              {socialLinks.map((link: SocialLink, index: number) => (
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
              className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: window.Infinity }}
            >
              <Link to="about" smooth={true} duration={500} className="cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500"
                >

                  <ArrowDown className="text-white w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
