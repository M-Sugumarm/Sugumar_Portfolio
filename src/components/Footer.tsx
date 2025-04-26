import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Heart, Code, Coffee, Sparkles } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/sugumar33', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/sugumar-m-a96b06292', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/megastarmsm', label: 'Instagram' },
    { icon: <Mail size={20} />, url: 'mailto:sugus7215@gmail.com', label: 'Email' }
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
              {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
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
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
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