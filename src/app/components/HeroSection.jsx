'use client';
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section >
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-900 via-purple-900 to-violet-900 opacity-90"></div>
      
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src="/images/video-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py- text-center z-10">
        {/* Animated Headings with Glass Effect */}
        <div className="mb-12 backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TypeAnimation
              sequence={["Hello", 1000, "I'M Neha Waddi", 1000]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            />
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-mono">
              <TypeAnimation
                sequence={["<coder />", 1000]}
                wrapper="span"
                speed={10}
                className="text-gray-200"
              />
            </h2>
            <h2 className="text-xl md:text-2xl font-mono">
              <TypeAnimation
                sequence={["<Web Developer />", 1000]}
                wrapper="span"
                speed={10}
                className="text-gray-200"
              />
            </h2>
          </div>
        </div>

        {/* Profile Image with Glow Effect */}
        <div className="mb-16">
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto group">
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <Image
              src="/images/hi.jpeg"
              alt="Neha Waddi"
              fill
              className="rounded-full object-cover border-4 border-white/20 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-cyan-400"
              priority
            />
          </div>
        </div>

        {/* Social Links with Enhanced Styling */}
        <div className="flex justify-center space-x-6 md:space-x-8">
          <a 
            href="https://github.com/Neha-Waddi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
            aria-label="GitHub"
          >
            <div className="absolute -inset-1 bg-cyan-400 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white p-4 rounded-full shadow-lg transition-all duration-300 group-hover:bg-cyan-400 group-hover:scale-110">
              <FaGithub className="text-2xl md:text-3xl text-gray-800 group-hover:text-white" />
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/neha-waddi-a4280625b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
            aria-label="LinkedIn"
          >
            <div className="absolute -inset-1 bg-blue-600 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white p-4 rounded-full shadow-lg transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
              <FaLinkedin className="text-2xl md:text-3xl text-gray-800 group-hover:text-white" />
            </div>
          </a>
          
          <a 
            href="https://www.hackerrank.com/profile/waddineha_22_csm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
            aria-label="HackerRank"
          >
            <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white p-4 rounded-full shadow-lg transition-all duration-300 group-hover:bg-emerald-500 group-hover:scale-110">
              <FaHackerrank className="text-2xl md:text-3xl text-gray-800 group-hover:text-white" />
            </div>
          </a>
          
          <a 
            href="https://leetcode.com/u/Neha_Waddi08/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative"
            aria-label="LeetCode"
          >
            <div className="absolute -inset-1 bg-amber-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white p-4 rounded-full shadow-lg transition-all duration-300 group-hover:bg-amber-500 group-hover:scale-110">
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <Image
                  src="/images/leetcode.svg"
                  fill
                  className="object-contain grayscale group-hover:grayscale-0"
                  alt="LeetCode"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;