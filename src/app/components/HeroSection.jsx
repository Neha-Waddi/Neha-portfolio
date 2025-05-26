'use client';

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className=" flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 z-0">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-blue-600/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-600/10 blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 rounded-full bg-cyan-600/10 blur-3xl animate-float-delay-2"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-8 py-24 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-2/3 text-center lg:text-left">
            <div className="mb-10 backdrop-blur-sm bg-white/5 p-10 rounded-3xl border border-white/10 shadow-2xl mx-auto lg:mx-0 hover:bg-white/10 transition-all duration-500">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block mb-4 text-white/80">Hello, I'm</span>
                <TypeAnimation
                  sequence={["Neha Waddi", 1000]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                />
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-medium text-white/90">
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer",
                      1500,
                      "Problem Solver",
                      1500,
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                    className="text-cyan-300"
                  />
                </h2>
                <p className="text-xl text-white/70 mt-6 max-w-2xl">
                  Building scalable web applications with modern technologies and clean code architecture.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start space-x-10 mt-12 ml-40">
              {[
                { 
                  icon: <FaGithub className="text-3xl text-black" />, 
                  href: "https://github.com/Neha-Waddi",
                  color: "bg-purple-600 hover:bg-white",
                  label: "GitHub"
                },
                { 
                  icon: <FaLinkedin className="text-3xl text-black" />, 
                  href: "https://www.linkedin.com/in/neha-waddi-a4280625b/",
                  color: "bg-purple-600 hover:bg-white",
                  label: "LinkedIn"
                },
                { 
                  icon: <FaHackerrank className="text-3xl text-black" />, 
                  href: "https://www.hackerrank.com/profile/waddineha_22_csm",
                  color: "bg-purple-600 hover:bg-white",
                  label: "HackerRank"
                },
                { 
                  icon: (
                    <div className="w-8 h-8 relative">
                      <Image src="/images/leetcode.svg" fill alt="LeetCode" />
                    </div>
                  ), 
                  href: "https://leetcode.com/u/Neha_Waddi08/",
                  color: "bg-purple-600 hover:bg-white",
                  label: "LeetCode"
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 ${item.color} hover:scale-110 hover:shadow-lg hover:border-transparent`}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl border border-white/10 backdrop-blur-lg flex items-center justify-center shadow-2xl">
                <div className="text-center">
                <Image
                  src="/images/hi.jpeg"
                  alt="."
                  width={400}
                  height={400}
                  className="w-full h-full "
                />                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;