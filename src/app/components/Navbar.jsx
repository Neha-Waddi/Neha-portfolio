"use client";

import Link from "next/link";
import { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const VerticalText = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {text.split('').reverse().map((letter, index) => (
        <span key={index} className="text-center leading-none py-0.5">
          {letter}
        </span>
      ))}
    </div>
  );
};

const Navlinks = () => {
    return (
        <div className="flex flex-col space-y-8 p-6 h-full">
           <div className="p-6 border-b border-gray-200 h-24 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
                    <Link href="/" className="text-sm font-bold text-gray-800 [writing-mode:vertical-rl] rotate-180 relative group transform hover:scale-110 transition-transform duration-100 hover:text-black hover:text-xl">
                        Home
                    </Link>
                </div>
                <div className="p-6 border-b border-gray-200 h-24 flex items-center justify-center">
                    <Link href="/skills" className="text-sm font-bold text-gray-800 [writing-mode:vertical-rl] rotate-180 relative group transform hover:scale-110 transition-transform duration-100 hover:text-black hover:text-xl">
                        Skills
                    </Link>
                </div>
                <div className="p-6 border-b border-gray-200 h-24 flex items-center justify-center">
                    <Link href="/Projects" className="text-sm font-bold text-gray-800 [writing-mode:vertical-rl] rotate-180 relative group transform hover:scale-110 transition-transform duration-100 hover:text-black hover:text-xl">
                        Projects
                    </Link>
                </div>
                <div className="p-6 border-b border-gray-200 h-24 flex items-center justify-center">
                    <Link href="/Certificates" className="text-sm font-bold text-gray-800 [writing-mode:vertical-rl] rotate-180 relative group transform hover:scale-110 transition-transform duration-100 hover:text-black hover:text-xl">
                        certificates
                    </Link>
                </div>
                <div className="p-6 border-b border-gray-200 h-24 flex items-center justify-center">
  <a 
    href="/Neha_v2-resume.pdf" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-sm font-bold text-gray-800 [writing-mode:vertical-rl] rotate-180 relative group transform hover:scale-110 transition-transform duration-100 hover:text-black hover:text-xl"
  >
    Resume
  </a>
</div>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Mobile Navbar (hidden on desktop) */}
            <nav className="md:hidden fixed top-0 left-0 right-0 z
            
            -50 flex items-center justify-between h-16 bg-white shadow-md px-4">
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold text-gray-800 ">Neha Waddi
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <FaTimes className="h-6 w-6 text-gray-800"/> : <FaBars className="h-6 w-6 text-gray-800"/>}
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-md z-40">
                    <Navlinks />
                </div>
            )}

            {/* Desktop Vertical Navbar (hidden on mobile) */}
            <nav className="hidden md:flex fixed left-0 top-0 h-full w-24 bg-white shadow-md z-50 flex-col">
               
                <Navlinks />
            </nav>
        </>
    );
};

export default Navbar;