'use client';
import { useState } from 'react';
import { PlusIcon, XIcon, SaveIcon, ExternalLinkIcon, ImageIcon } from 'lucide-react';
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
}
export default function ProjectsForm() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [liveUrl, setLiveUrl] = useState('');
    const [errors, setErrors] = useState<{
      [key: string]: string;
    }>({});
    const validateForm = () => {
      const newErrors: {
        [key: string]: string;
      } = {};
      if (!title.trim()) newErrors.title = 'Title is required';
      if (!description.trim()) newErrors.description = 'Description is required';
      if (!imageUrl.trim()) newErrors.imageUrl = 'Image URL is required';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    const handleAddProject = () => {
      if (!validateForm()) return;
      const newProject: Project = {
        id: Date.now().toString(),
        title,
        description,
        imageUrl,
        liveUrl
      };
      setProjects([...projects, newProject]);
      resetForm();
    };
    const resetForm = () => {
      setTitle('');
      setDescription('');
      setImageUrl('');
      setLiveUrl('');
      setErrors({});
    };
    const handleRemoveProject = (id: string) => {
      setProjects(projects.filter(project => project.id !== id));
    };
    const handleSave = () => {
      // In a real app, this would save to a backend
      alert('Projects saved successfully!');
      console.log('Saved projects:', projects);
    };
    return <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Manage Featured Projects
        </h2>
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700 mb-1">
                Project Title*
              </label>
              <input id="projectTitle" type="text" value={title} onChange={e => setTitle(e.target.value)} className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`} placeholder="e.g. E-commerce Website" />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL*
              </label>
              <input id="imageUrl" type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className={`w-full p-2 border ${errors.imageUrl ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`} placeholder="https://example.com/image.jpg" />
              {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl}</p>}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description*
            </label>
            <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={3} className={`w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-indigo-500 focus:border-indigo-500`} placeholder="Brief description of your project"></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="liveUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Live Project URL
            </label>
            <input id="liveUrl" type="text" value={liveUrl} onChange={e => setLiveUrl(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="https://example.com" />
          </div>
          <div className="flex justify-end mt-4">
            <button onClick={handleAddProject} className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Project
            </button>
          </div>
        </div>
        {/* Projects List */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Your Featured Projects
          </h3>
          {projects.length === 0 ? <p className="text-gray-500 italic">No projects added yet.</p> : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map(project => <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48 bg-gray-200">
                    {project.imageUrl ? <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
              }} /> : <div className="flex items-center justify-center h-full">
                        <ImageIcon className="w-12 h-12 text-gray-400" />
                      </div>}
                    <button onClick={() => handleRemoveProject(project.id)} className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md text-gray-500 hover:text-red-500">
                      <XIcon className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-lg">{project.title}</h4>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                      {project.description}
                    </p>
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-indigo-600 hover:text-indigo-800">
                        <ExternalLinkIcon className="w-4 h-4 mr-1" />
                        View Live Project
                      </a>}
                  </div>
                </div>)}
            </div>}
          {projects.length > 0 && <div className="mt-6 flex justify-end">
              <button onClick={handleSave} className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                <SaveIcon className="w-4 h-4 mr-2" />
                Save Changes
              </button>
            </div>}
        </div>
      </div>;
};