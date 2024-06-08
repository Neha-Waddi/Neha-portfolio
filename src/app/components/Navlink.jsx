"use client"
import Link from "next/link"
import { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import {FaBars} from 'react-icons/fa6';
// import {Link} from 'react-router-dom';


const Navlinks = () => {
    return (
      <>
      <div className="navlink-wrapper mt-5 mr-5 mb-5">
          <Link href="/" className="hover:font-bold px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">Home</Link>
        </div>
        <div className="navlink-wrapper mt-5 mr-5 mb-5">
          <Link href="/skills"  className="hover:font-bold px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">Skills</Link>
        </div>
        <div className="navlink-wrapper mt-5 mr-5 mb-5">
          <Link href="/Projects" className="hover:font-bold px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">Projects</Link>
        </div>
        <div className="navlink-wrapper mt-5 mr-5 mb-5">
          <Link href="/Certificates" className="hover:font-bold px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">Certificates</Link>
        </div>
        <div className="navlink-wrapper mt-5 mr-5 mb-5">
          <Link href="/" className="hover:font-bold px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">Download Resume</Link>
        </div>
      </>
    );
  };
  
  
const Nav=()=>{
    const [isOpen,setIsOpen]=useState(false);
    const toggleNavbar=()=>{
        setIsOpen(!isOpen);
    };
    return(
        <>
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 bg-white shadow-md px-4 md:px-8">
        <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">Neha Waddi</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Navlinks />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar}>{isOpen ? <FaTimes className="h-6 w-6 text-gray-800"/> : <FaBars className="h-6 w-6 text-gray-800"/>}</button>
        </div>
      </nav>
      {isOpen &&(
        <div className="flex basis-full flex-col items-end mb-5"><Navlinks/></div>
      ) }
      </>

    );
}
export default Nav;