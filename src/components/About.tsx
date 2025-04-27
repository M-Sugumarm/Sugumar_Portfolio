import { Download } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState } from 'react';
//import CuteMovingChatbot from './CuteMovingChatbot';

export default function About() {
  const [_, setActiveSkill] = useState<string | null>(null);

  const skills = [
    {
      title: "UI/UX Design",
      icon: "🎨",
      description: "Creating intuitive and beautiful user interfaces that delight users"
    },
    {
      title: "Web Development",
      icon: "💻",
      description: "Building responsive and modern web applications"
    },
    {
      title: "Problem Solving",
      icon: "🧩",
      description: "Turning complex challenges into elegant solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center mb-12 gap-8"
          >
            <div className="relative group">
              <img
                src="src/images/Megastar1.jpeg"
                alt="Sugumar M"
                className="w-56 h-56 rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                Sugumar M
                <span className="ml-2 animate-bounce inline-block">🚀</span>
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">UI/UX Designer & Developer</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-8"
          >
            <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
              I'm Sugumar, a digital architect who designs not just for screens but for experiences.
              With a blend of creativity and technical expertise, I transform ideas into captivating digital realities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 cursor-pointer"
                onClick={() => setActiveSkill(skill.title)}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/18rC1B1CCJUaigfFYkbcP9jD1Nm6hLQ-6/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>

         
        </div>
      </div>
    </section>
  );
}