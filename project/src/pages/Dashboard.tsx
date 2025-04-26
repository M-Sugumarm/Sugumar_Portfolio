import React, { useState, useEffect } from 'react';
import { database, auth } from '../firebase/config';
import { ref, push, remove, onValue } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import toast from 'react-hot-toast';

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

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    image: '',
    githubLink: '',
    demoLink: '',
    videoLink: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
      navigate('/admin');
      return;
    }

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
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const projectsRef = ref(database, 'projects');
      await push(projectsRef, newProject);
      setShowForm(false);
      setNewProject({
        title: '',
        description: '',
        technologies: '',
        image: '',
        githubLink: '',
        demoLink: '',
        videoLink: ''
      });
      toast.success('Project added successfully!');
    } catch (error) {
      toast.error('Failed to add project');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const projectRef = ref(database, `projects/${id}`);
      await remove(projectRef);
      toast.success('Project deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete project');
    }
  };

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus size={20} />
            Add Project
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">Add New Project</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1">Title</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 rounded border"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-1">Description</label>
                  <textarea
                    required
                    className="w-full p-2 rounded border"
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-1">Technologies (comma-separated)</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 rounded border"
                    value={newProject.technologies}
                    onChange={(e) => setNewProject({...newProject, technologies: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-1">Image URL</label>
                  <input
                    type="url"
                    required
                    className="w-full p-2 rounded border"
                    value={newProject.image}
                    onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-1">GitHub Link</label>
                  <input
                    type="url"
                    required
                    className="w-full p-2 rounded border"
                    value={newProject.githubLink}
                    onChange={(e) => setNewProject({...newProject, githubLink: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-1">Demo Link</label>
                  <input
                    type="url"
                    required
                    className="w-full p-2 rounded border"
                    value={newProject.demoLink}
                    onChange={(e) => setNewProject({...newProject, demoLink: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-1">Video Link (optional)</label>
                  <input
                    type="url"
                    className="w-full p-2 rounded border"
                    value={newProject.videoLink}
                    onChange={(e) => setNewProject({...newProject, videoLink: e.target.value})}
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  >
                    Save Project
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={handleDelete}
              isAdmin={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;