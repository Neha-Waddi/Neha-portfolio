'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const Certifications = () => {
  const certifications = [
    { src: "/images/int_cert.jpg", alt: "Internship Certificate" },
    { src: "/images/aws_cert.jpg", alt: "AWS Certificate" },
    { src: "/images/Screenshot 2024-05-19 173306.png", alt: "Python" },
    { src: "/images/Screenshot 2024-05-19 173337.png", alt: "" },
    { src: "/images/Screenshot 2024-05-19 173406.png", alt: "JavaScript" },
    { src: "/images/Screenshot 2024-05-19 174630.png", alt: "Python" },
    { src: "/images/Screenshot 2024-05-19 174706.png", alt: "" },
    { src: "/images/Screenshot 2024-05-19 174732.png", alt: "" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      
           <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 z-0"></div>


      <div className="container mx-auto px-40 py-16 relative z-10">
        <section className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-cyan-400">Certifications</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my skills and knowledge.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -inset-1 bg-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <div className="relative h-full overflow-hidden rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {cert.alt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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

export default Certifications;