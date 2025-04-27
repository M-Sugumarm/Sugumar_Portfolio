import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  category: 'UI/UX' | 'Web' | 'Mobile';
  color: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'UI/UX' | 'Web' | 'Mobile'>('all');
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: "Project Tracker",
      description: "Mentor Hub is a collaborative platform designed for students, professionals, and academic institutions to mentor, track, and manage projects efficiently",
      image: "/images/project1.jpg",
      tags: ["React", "Mongo db", "MERN"],
      github: "https://github.com/S3nThil-03/Mentor-Hub-with-Project-Tracker-and-Planner",
      category: "Web",
      color: "#FF6B6B"
    },
    {
      id: '2',
      title: "Elite Mart",
      description: "Ecommerce in the figma",
      image: "/images/project2.jpg",
      tags: ["Figma","UI/UX", "Prototyping"],
      github: "https://github.com/M-Sugumarm/Codsoft-UI-UX/blob/main/Task%204%20Ecommerce.fig",
      category: "Mobile",
      color: "#4ECDC4"
    },
    {
      id: '3',
      title: "Codsoft Intern",
      description: "Meditation app UI/UX case study with focus on accessibility",
      image: "/images/project3.jpg",
      tags: ["Figma", "Prototyping", "User Research"],
      github:"https://github.com/M-Sugumarm/Codsoft-UI-UX",
      category: "UI/UX",
      color: "#95A5A6"
    },
    {
      id: '4',
      title: "Scrolling In Figma",
      description: "Scrolling effect UI/UX  focus on interaction",
      image: "/images/project3.jpg",
      tags: ["Figma", "Prototyping",],
      github:"https://github.com/M-Sugumarm/Figma-Projects",
      category: "UI/UX",
      color: "#95A5A6"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'UI/UX', label: 'UI/UX Design' },
    { id: 'Web', label: 'Web Development' },
    { id: 'Mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(({ id, label }) => (
            <motion.button
              key={id}
              onClick={() => setActiveCategory(id as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === id 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-xl">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Project Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="p-2 bg-white rounded-full text-gray-900 hover:text-indigo-600"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="p-2 bg-white rounded-full text-gray-900 hover:text-indigo-600"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span 
                      className="px-3 py-1 text-xs rounded-full"
                      style={{ 
                        backgroundColor: `${project.color}20`,
                        color: project.color 
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}