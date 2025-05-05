import React from 'react';
import Image from 'next/image';
import { GithubIcon, InstagramIcon, TwitterIcon, MailIcon } from 'lucide-react';
export const Hero = () => {
  return <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kenneth Medel</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Information Technology Specialist
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Building innovative solutions with modern technologies. BSIT
            graduate with a passion for web development and cybersecurity.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Contact Me
            </a>
            <a href="#projects" className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              View Projects
            </a>
          </div>
          <div className="flex space-x-4 mt-8">
            <a href="https://github.com/Kyenite" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.instagram.com/kye.nite/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
              <InstagramIcon size={24} />
            </a>
            <a href="https://x.com/Kyenite2003" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
              <TwitterIcon size={24} />
            </a>
            <a href="mailto:kennethmedelr@gmail.com" className="text-white hover:text-blue-200 transition-colors">
              <MailIcon size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image src="/images/my-pic.jpg" alt="John Doe" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
};