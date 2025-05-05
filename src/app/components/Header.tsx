'use client';

import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-blue-600">Web Depot</h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
            Projects
          </a>
          <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">
            Education
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-white px-4 py-2 pb-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
              About
            </a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
              Education
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </nav>}
    </header>;
};