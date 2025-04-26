import React, { useEffect, useState } from 'react';
import { database } from '../firebase/config';
import { ref, onValue } from 'firebase/database';
import ProjectCard from '../components/ProjectCard';

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

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const projectsRef = ref(database, 'projects');
    const unsubscribe = onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const projectsList = Object.entries(data).map(([id, project]) => ({
          id,
          ...(project as Omit<Project, 'id'>),
        }));
        setProjects(projectsList);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="py-20 bg-gradient-to-r from-purple-100 via-blue-100 to-teal-100 dark:from-purple-900 dark:via-blue-900 dark:to-teal-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;