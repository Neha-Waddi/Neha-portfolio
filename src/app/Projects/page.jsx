import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const Projects = () => {
  return (
    <>
      <Navbar />
      <section className="projects p-16">
        <h2 className="font-bold text-2xl mb-7 text-center">My Projects</h2>
        <div className="project-container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="project-card bg-white shadow rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-300">
            <Image
              src="/images/Screenshot 2024-04-06 184451.png"
              alt="Know the Unknown Project Screenshot"
              height={270}
              width={270}
              className="rounded-lg object-cover ml-44 border-2 border-black" 
            />
            <h3 className="text-black font-semibold text-center mt-4">Know the Unknown</h3>
            <p className="text-black">
              A website dedicated to sharing scientific updates. Built with HTML, CSS, and JavaScript to create an interactive and visually appealing platform. Users can explore and learn about various scientific topics and discoveries.
            </p>
            <a
              className="hover:underline text-blue-500"
              href="https://neha-waddi.github.io/knowtheunknown.github.io/"
              target="_blank"
              rel="noopener noreferrer" 
            >
              Link to project
            </a>
          </div>

          <div className="project-card bg-white shadow rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-300">
            <Image
              src="/images/Screenshot 2024-06-05 185740.png"
              alt="Personal Portfolio Project Screenshot"
              height={270}
              width={270}
              className="rounded-lg object-cover ml-44 border-2 border-black" 
            />
            <h3 className="text-black font-semibold text-center mt-4">My Personal Portfolio</h3>
            <p className="text-black">
              A website that showcases my technical skills and experiences. Built with Next.js and Tailwind CSS to create an interactive and visually appealing platform.
            </p>
            <a
              className="hover:underline text-blue-500"
              href="https://neha-waddi.github.io/knowtheunknown.github.io/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to project
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
