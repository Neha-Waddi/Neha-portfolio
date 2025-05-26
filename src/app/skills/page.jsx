'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import {
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
  FaJava,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql,SiTailwindcss } from "react-icons/si";

const SkillCard = ({ icon, name }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
    <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-white text-lg font-medium">{name}</h3>
  </div>
);

const Skills = () => {
  const techIcons = [
    { icon: <FaJava className='w-12 h-12 text-blue-400' />, name: 'Java' },
    { icon: <FaJsSquare className='w-12 h-12 text-yellow-400' />, name: 'JavaScript' },
    { icon: <FaPython className='w-12 h-12 text-yellow-600' />, name: 'Python' },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className='w-12 h-12'>
          <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z" />
          <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z" />
          <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z" />
        </svg>
      ),
      name: 'C',
    },
  ];

  const frameworkIcons = [
    {
      icon:<FaReact className='h-12 w-12 text-blue-500'/>,
      name: 'React'
    },
    {
       icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-12 h-12">
          <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
        </svg>
      ),
      name: 'Next.js'
    },
    {
      icon:<SiTailwindcss className='h-12 w-12 text-blue-400'/>,
      name: 'Tailwind CSS'
    },
    { icon: <SiExpress className='h-12 w-12 text-gray-700 bg-gray-300 p-1' />, name: 'ExpressJs' },
    { icon: <FaNodeJs className='h-12 w-12 text-gray-700 bg-gray-300 p-1' />, name: 'NodeJs' }
  ];

  const dbIcons = [
    { icon: <SiMongodb className='h-12 w-12 text-green-500' />, name: 'MongoDB' },
    { icon: <SiMysql className='h-12 w-12 text-blue-500 bg-white p-1' />, name: 'MySQL' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden px-40">
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 z-0" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <section className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-cyan-400">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here is a collection of technologies and tools I&apos;m proficient with to build amazing digital experiences.
          </p>
        </section>

        <div className="space-y-20">
          {/* Programming Languages */}
          <section className="relative animate-slide-up">
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-cyan-500 rounded-full filter blur-3xl opacity-20" />
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="text-cyan-400 mr-2">&lt;</span>
              Programming Languages
              <span className="text-cyan-400 ml-2">&gt;</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {techIcons.map((tech) => (
                <SkillCard key={tech.name} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </section>

          {/* Frameworks */}
          <section className="relative animate-slide-up">
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="text-purple-400 mr-2">&lt;</span>
              Frameworks & Libraries
              <span className="text-purple-400 ml-2">&gt;</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {frameworkIcons.map((fw) => (
                <SkillCard key={fw.name} icon={fw.icon} name={fw.name} />
              ))}
            </div>
          </section>

          {/* Databases */}
          <section className="relative animate-slide-up">
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-green-500 rounded-full filter blur-3xl opacity-20" />
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="text-green-400 mr-2">&lt;</span>
              Databases
              <span className="text-green-400 ml-2">&gt;</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {dbIcons.map((db) => (
                <SkillCard key={db.name} icon={db.icon} name={db.name} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
