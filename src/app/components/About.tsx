import React from 'react';
import { CodeIcon, ServerIcon, ShieldIcon, GraduationCapIcon } from 'lucide-react';
export const About = () => {
  return <section id="about" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I&apos;m a passionate Information Technology professional with expertise
            in software development, network administration, and cybersecurity.
            My BSIT education has equipped me with both theoretical knowledge
            and practical skills to tackle complex IT challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <CodeIcon size={28} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              Creating responsive and interactive web applications using modern
              frameworks and best practices.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <ServerIcon size={28} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Network Administration
            </h3>
            <p className="text-gray-600">
              Setting up and managing network infrastructure, ensuring optimal
              performance and reliability.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldIcon size={28} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
            <p className="text-gray-600">
              Implementing security measures to protect systems and data from
              unauthorized access and threats.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <GraduationCapIcon size={28} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">BSIT Education</h3>
            <p className="text-gray-600">
              Comprehensive education in IT fundamentals, programming,
              networking, database management, and more.
            </p>
          </div>
        </div>
      </div>
    </section>;
};