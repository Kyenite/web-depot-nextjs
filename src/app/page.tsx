'use client'

import { SessionProvider } from "next-auth/react"

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <SessionProvider>
        <div className="font-sans bg-slate-50 text-gray-800">
        <Header />
        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
      </SessionProvider>
    </>
  );
}
