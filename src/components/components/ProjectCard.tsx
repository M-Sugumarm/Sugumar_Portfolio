import React, { useState } from 'react';
import { Trash, Send, Info } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string;
    image: string;
    githubLink: string;
    demoLink: string;
    videoLink?: string;
  };
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDelete, isAdmin = false }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <button
              onClick={toggleDescription}
              className="text-blue-500 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle project description"
            >
              <Info size={20} />
            </button>
          </div>
          {isAdmin && onDelete && (
            <button
              onClick={() => onDelete(project.id)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash size={20} />
            </button>
          )}
        </div>
        
        {showDescription && (
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md mb-4 transition-all duration-300">
            <p className="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.split(',').map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 flex items-center gap-2"
          >
            GitHub <Send size={16} />
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 flex items-center gap-2"
          >
            Demo <Send size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;