import React from 'react';
import { GithubIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="w-full bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Web Depot</h2>
            <p className="text-slate-300 mt-2 max-w-md">
              BSIT graduate with expertise in web development, network security,
              and system administration.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Kyenite" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
              <GithubIcon size={24} />
            </a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
              <LinkedinIcon size={24} />
            </a> */}
            <a href="https://x.com/Kyenite2003" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
              <TwitterIcon size={24} />
            </a>
            <a href="https://www.instagram.com/kye.nite/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">
              <InstagramIcon size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Web Depot. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-blue-400 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>;
};