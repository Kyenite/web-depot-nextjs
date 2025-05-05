import React from 'react';
import Image from 'next/image';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export const Projects = () => {
  const projects = [{
    title: 'Budget Performance Monitoring System',
    description: 'Designed and implemented a comprehensive accounting system that can monitor, manage, and produce a real-time budget data for the school.',
    image: '/images/bpms.jpg',
    tags: ['PHP', 'JavaScript', 'Bootstrap', 'MySql'],
    github: 'https://github.com/Kyenite/BPMS',
    live: 'https://kyenite.github.io/Capstone-Development/'
  }, {
    title: 'MEMBERSHIP IDENTIFICATION SYSTEM',
    description: 'Developed a web-based membership identification system that allows users to log in, and manage their members data securely.',
    image: '/images/mis.jpg',
    tags: ['Laravel', 'Bootstrap', 'MySql'],
    github: 'https://github.com/Kyenite/MEMBERSHIP-IDENTIFICATION-SYSTEM',
    live: 'http://my-mis.infinityfreeapp.com/'
  }];
  return <section id="projects" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing my technical skills and problem-solving abilities through
            real-world IT projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <Image src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>)}
                </div>
                <div className="flex space-x-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                    <GithubIcon size={16} className="mr-1" /> View Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                    <ExternalLinkIcon size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/Kyenite" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors">
            <GithubIcon size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>;
};