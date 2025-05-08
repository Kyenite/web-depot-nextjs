'use client';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import SkillsForm from './SkillsForm';
import SoftSkillsForm from './SoftSkillsForm';
import ProjectsForm from './ProjectsForm';
import { MenuIcon, LayoutDashboardIcon } from 'lucide-react';

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  return <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Sidebar */}
      <div className="bg-white shadow-md md:w-64 w-full">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <LayoutDashboardIcon className="h-6 w-6 text-indigo-600" />
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md hover:bg-gray-100">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
        {/* Sidebar content */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="hidden md:flex items-center space-x-2 p-4 border-b">
            <LayoutDashboardIcon className="h-6 w-6 text-indigo-600" />
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <button onClick={() => setActiveTab('skills')} className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'skills' ? 'bg-indigo-100 text-indigo-700 font-medium' : 'hover:bg-gray-100'}`}>
                  Technical Skills
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('softSkills')} className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'softSkills' ? 'bg-indigo-100 text-indigo-700 font-medium' : 'hover:bg-gray-100'}`}>
                  Soft Skills
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('projects')} className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'projects' ? 'bg-indigo-100 text-indigo-700 font-medium' : 'hover:bg-gray-100'}`}>
                  Featured Projects
                </button>
              </li>
              <li>
                <button onClick={() => signOut({ callbackUrl: "/admin" })} className={`w-full text-left px-4 py-2 rounded-md ${activeTab === 'projects' ? 'bg-indigo-100 text-indigo-700 font-medium' : 'hover:bg-gray-100'}`}>
                  Sign Out
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Main content */}
      <div className="flex-1 p-6 md:p-8">
        {activeTab === 'skills' && <SkillsForm />}
        {activeTab === 'softSkills' && <SoftSkillsForm />}
        {activeTab === 'projects' && <ProjectsForm />}
      </div>
    </div>;
};