import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart, Code, Coffee, Sparkles } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/sugumar-m-a96b06292',
      label: 'LinkedIn',
      color: '#0077B5'
    },
    {
      icon: <Github size={20} />,
      url: 'https://github.com/sugumar33',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/megastarmsm',
      label: 'Instagram',
      color: '#E4405F'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H13.96c.13 3.211 3.483 3.312 4.588 2.029h3.178zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
        </svg>
      ),
      url: 'https://www.behance.net/sugumarsugu32',
      label: 'Behance',
      color: '#1769FF'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438-1.804.172-4.844 2.172-4.844 2.172s-1.667 1.105-3.334 1.105c-1.667 0-3.334-1.105-3.334-1.105s-3.17-.953-6.384-.438c-.35.11-.35.385 0 .495 3.17.953 6.384.438 6.384.438s1.667-1.105 3.334-1.105c1.667 0 3.334 1.105 3.334 1.105s3.17.953 6.384.438c.35-.11.35-.385 0-.495z"/>
        </svg>
      ),
      url: 'https://dribbble.com/SugumarM',
      label: 'Dribbble',
      color: '#EA4C89'
    }
  ];

  const FloatingEmoji = ({ emoji, delay = 0 }: { emoji: React.ReactNode; delay?: number }) => (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 0, -10] }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="inline-block"
    >
      {emoji}
    </motion.div>
  );

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20 pb-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-500/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 200 + 100,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * 200 + 100,
                Math.random() * 200 + 100,
              ],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Sugumar M
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300">
              Crafting digital experiences with passion and precision
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                  whileHover={{ x: 5, color: '#6366F1' }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1,
                    color: link.color,
                    y: -5
                  }}
                  className="text-gray-600 dark:text-gray-400 transition-all duration-300 hover:shadow-lg"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2">
            <span>Made with</span>
            <FloatingEmoji emoji={<Heart size={16} className="text-red-500" />} />
            <FloatingEmoji emoji={<Code size={16} className="text-blue-500" />} delay={0.5} />
            <FloatingEmoji emoji={<Coffee size={16} className="text-amber-500" />} delay={1} />
            <span>by</span>
            <motion.span
              className="text-indigo-500 font-semibold"
              whileHover={{ scale: 1.1 }}
            >
              Sugumar M
            </motion.span>
            <FloatingEmoji emoji={<Sparkles size={16} className="text-yellow-500" />} delay={1.5} />
          </p>
        </motion.div>

        {/* Interactive Wave */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-20 -z-10"
          style={{
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%234F46E5' fill-opacity='0.1' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'contain',
          }}
          animate={{
            x: [-1440, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
