import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string;
  image: string;
  githubLink: string;
  demoLink: string;
  videoLink?: string;
}

interface ProjectCardProps {
  project: Project;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDelete, isAdmin = false }) => {
  const [showDescription, setShowDescription] = useState(false);
  
  // Split technologies string into array
  const techList = project.technologies.split(',').map(tech => tech.trim());
  
  // Check if the image URL is valid
  const hasValidImage = project.image && project.image.trim() !== '';
  
  // Check if the video URL is valid
  const hasValidVideo = project.videoLink && project.videoLink.trim() !== '';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      {/* Image or Video Container */}
      <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700">
        {hasValidVideo ? (
          <iframe 
            src={project.videoLink} 
            className="w-full h-full object-cover"
            title={`${project.title} video`}
            allowFullScreen
          />
        ) : hasValidImage ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Set fallback image on error
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-600">
            <span className="text-gray-500 dark:text-gray-400">No Image Available</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        
        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {techList.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Description Button */}
        <button 
          onClick={() => setShowDescription(!showDescription)}
          className="mb-4 text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
        >
          {showDescription ? 'Hide Description' : 'Show Description'}
        </button>
        
        {/* Description (Conditional) */}
        {showDescription && (
          <div className="mb-4 text-gray-700 dark:text-gray-300 text-sm">
            <p>{project.description}</p>
          </div>
        )}
      </div>
      
      {/* Footer with Links */}
      <div className="p-4 bg-gray-50 dark:bg-gray-750 flex items-center justify-between">
        <div className="flex space-x-2">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs bg-gray-800 dark:bg-gray-900 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-800"
          >
            GitHub
          </a>
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs bg-blue-600 dark:bg-blue-700 text-white rounded hover:bg-blue-500 dark:hover:bg-blue-600"
          >
            Live Demo
          </a>
        </div>
        
        {/* Delete Button (Admin only) */}
        {isAdmin && onDelete && (
          <button 
            onClick={() => onDelete(project.id)}
            className="p-1 text-red-500 hover:text-red-700 focus:outline-none"
            aria-label="Delete project"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;