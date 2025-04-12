'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      
      {/* Purple Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 opacity-100"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/images/video-background.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="container mx-auto px-40 py-16 relative z-10">
        {/* Projects Header */}
        <section className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here's a collection of my work that showcases my skills and experience.
          </p>
        </section>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Domain Mapping Project */}
          <div className="group relative animate-slide-up">
            <div className="absolute -inset-1 bg-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="project-card relative backdrop-blur-sm bg-white/5 rounded-xl border border-white/20 p-6 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:scale-[1.02]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/domain_proj_1pic.jpg"
                  alt="Domain Project Screenshot"
                  height={270}
                  width={270}
                  className="rounded-lg object-cover border-2 border-white/30 group-hover:border-cyan-400/50 transition-all duration-300"
                />
              </div>
              <h3 className="text-cyan-400 font-semibold text-center text-xl mb-3 group-hover:text-cyan-300 transition-colors duration-300">Domain Mapping</h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                A platform for Domain & URL mapping with signUP, authentication and editing functionalities.
              </p>
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                <span className="font-medium">Technologies used:</span> Next.js, TailwindCSS, MongoDB
              </p>
              <a
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:underline"
                href="https://github.com/Neha-Waddi/domain_proj_nextjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* FriendFeed Project */}
          <div className="group relative animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="absolute -inset-1 bg-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="project-card relative backdrop-blur-sm bg-white/5 rounded-xl border border-white/20 p-6 transition-all duration-300 group-hover:border-blue-400/30 group-hover:scale-[1.02]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/frndfd_ss.png"
                  alt="FriendFeed Project Screenshot"
                  height={270}
                  width={270}
                  className="rounded-lg object-cover border-2 border-white/30 group-hover:border-blue-400/50 transition-all duration-300"
                />
              </div>
              <h3 className="text-cyan-400 font-semibold text-center text-xl mb-3 group-hover:text-blue-300 transition-colors duration-300">Social Networking Site</h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                FriendFeed is a social networking site that allows you to manage your profile, view and upload posts, find people, and send messages.
              </p>
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                <span className="font-medium">Technologies used:</span> PHP, MySQL, HTML, CSS
              </p>
              <a
                className="inline-flex items-center text-cyan-400 hover:text-blue-300 transition-colors duration-300 group-hover:underline"
                href="https://github.com/Neha-Waddi/FriendFeed"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Portfolio Project */}
          <div className="group relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-1 bg-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="project-card relative backdrop-blur-sm bg-white/5 rounded-xl border border-white/20 p-6 transition-all duration-300 group-hover:border-purple-400/30 group-hover:scale-[1.02]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/prtflio.png"
                  alt="Portfolio Project Screenshot"
                  height={270}
                  width={270}
                  className="rounded-lg object-cover border-2 border-white/30 group-hover:border-purple-400/50 transition-all duration-300"
                />
              </div>
              <h3 className="text-cyan-400 font-semibold text-center text-xl mb-3 group-hover:text-purple-300 transition-colors duration-300">Personal Portfolio</h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                A website that showcases my technical skills and experiences.
              </p>
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                <span className="font-medium">Technologies used:</span> Next.js, TailwindCSS
              </p>
              <a
                className="inline-flex items-center text-cyan-400 hover:text-purple-300 transition-colors duration-300 group-hover:underline"
                href="https://github.com/Neha-Waddi/Neha-portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Know the Unknown Project */}
          <div className="group relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -inset-1 bg-emerald-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="project-card relative backdrop-blur-sm bg-white/5 rounded-xl border border-white/20 p-6 transition-all duration-300 group-hover:border-emerald-400/30 group-hover:scale-[1.02]">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/know.png"
                  alt="Know the Unknown Project Screenshot"
                  height={270}
                  width={270}
                  className="rounded-lg object-cover border-2 border-white/30 group-hover:border-emerald-400/50 transition-all duration-300"
                />
              </div>
              <h3 className="text-cyan-400 font-semibold text-center text-xl mb-3 group-hover:text-emerald-300 transition-colors duration-300">Know the Unknown</h3>
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                A website dedicated to sharing scientific updates with interactive and visually appealing design.
              </p>
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                <span className="font-medium">Technologies used:</span> HTML, CSS, JavaScript
              </p>
              <a
                className="inline-flex items-center text-cyan-400 hover:text-emerald-300 transition-colors duration-300 group-hover:underline"
                href="https://neha-waddi.github.io/knowtheunknown.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Projects;