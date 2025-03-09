"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-16 lg:py-4 text-white overflow-hidden">
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-90" 
        >
          <source src="/images/video-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <h1 className="text-4xl lg:text-6xl font-bold mb-4 z-10">
        <TypeAnimation
          className="inline-block bg-clip-text text-transparent bg-cyan-400" // Changed gradient for better visibility
          sequence={["Hello", 1000, "I'M Neha Waddi", 1000]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
        />
      </h1>
      <h2 className="z-10">
        <TypeAnimation
          className="inline-block text-gray-200"
          sequence={["<coder />", 1000]}
          wrapper="span"
          speed={10}
        />
      </h2>
      <h2 className="z-10">

        <TypeAnimation
          className="inline-block text-gray-200" 
          sequence={["<Web Developer />", 1000]}
          wrapper="span"
          speed={10}
        />
      </h2>

      <div className="mt-8 lg:mt-10 ">
        <Image
          src="/images/hi.jpeg"
          alt="Hero image"
          width={250}
          height={250}
          className="rounded-full shadow-lg object-cover transition duration-300 ease-in-out transform hover:scale-110 border-2 border-gray-600 scale-x-[-1]" // Adjusted border color
        />
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center mt-8 lg:mt-16 z-10">
      <a href="https://github.com/Neha-Waddi" target="_blank" rel="noopener noreferrer">
  <FaGithub className="text-4xl hover:scale-110 transition duration-300 ease-in-out mx-4 h-12 w-12 text-black bg-white rounded-full p-2 shadow-md" />
</a>

        <a href="https://www.linkedin.com/in/neha-waddi-a4280625b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-4xl hover:scale-110 transition duration-300 ease-in-out mx-4 h-12 w-12 text-black bg-white rounded-full p-2 shadow-md" />
        </a>
        <a href="https://www.hackerrank.com/profile/waddineha_22_csm" target="_blank" rel="noopener noreferrer">
          <FaHackerrank className="text-4xl hover:scale-110 transition duration-300 ease-in-out mx-4 h-12 w-12 text-black bg-white rounded-full p-2 shadow-md" />
        </a>
        <a href="https://leetcode.com/u/Neha_Waddi08/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/leetcode.svg"
            width={50}
            height={50}
            className="hover:scale-110 transition duration-300 ease-in-out mx-4 grayscale hover:grayscale-0 bg-white rounded-full p-2 shadow-md" // Add grayscale for a cleaner look, remove on hover
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;