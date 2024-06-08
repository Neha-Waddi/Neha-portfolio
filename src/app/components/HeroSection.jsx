// "use client"

// import React from 'react'
// import Image from 'next/image'
// import { TypeAnimation } from 'react-type-animation'
    

// const HeroSection = () => {
//   return (
    
//     <section className='lg:py-16'>
//     <div className='grid grid-cols-1 sm:grid-cols-12'>
//         <div className='col-span-7 place-self-center'>
//         <h1 className=" text-black mb-4 text-4xl lg:text-6xl font-extrabold">
//           <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-600'>Hello , I'm {" "}
//           </span>
//           <br />
//           <TypeAnimation
//       sequence={[
//         'Neha Waddi',
//         1000
//       ]}
//       wrapper="span"
//       speed={50}
//       repeat={Infinity}
//     />
//           </h1>
//         </div>
//         <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
//         <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//             <Image
//               src="/images/img2.png"
//               alt="hero image"
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={250}
//               height={250}
//             />
//           </div>
//         </div>
//     </div>
//     </section>
//   )
// }

// export default HeroSection

"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub ,FaLinkedin,FaHackerrank} from "react-icons/fa";


const HeroSection = () => {
  return (
    <section className="hero-section flex flex-col items-center justify-center py-16 lg:py-4  text-black">
      <h1 className="text-4xl lg:text-6xl font-bold mb-4">
        <TypeAnimation className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600"
          sequence={["Hello",1000,"I'M Neha Waddi ",1000]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
        />
      </h1>
      <h3>
      <TypeAnimation className="inline-block text-gray-700 "
          sequence={["<coder/>",1000]}
          wrapper="span"
          speed={10}
          />
      </h3>
      <h3>
      <TypeAnimation className="inline-block text-gray-700 "
          sequence={["<Web Developer />",1000]}
          wrapper="span"
          speed={10}
          />
      </h3>
      <div className="mt-8 lg:mt-10 ">
        <Image 
          src="/images/hi.jpeg"
          alt="Hero image"
          width={250}
          height={250}
          className="rounded-full shadow-lg object-cover transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:rounded-full  mb-2 border-2 border-black scale-x-[-1]"
        />
      </div>
      <div className="flex justify-center mt-8 lg:mt-16">
        <a href="https://github.com/Neha-Waddi" target="_blank">
          <FaGithub className="text-4xl  hover:transform transition duration-300 ease-in-out mx-4 hover:scale-110 h-12 w-12" />
        </a>
        <a href="https://www.linkedin.com/in/neha-waddi-a4280625b/" target="_blank" >
          <FaLinkedin className="text-4xl  hover:transform transition duration-300 ease-in-out mx-4 hover:scale-110 h-12 w-12" />
        </a>
        
        <a href="https://www.hackerrank.com/profile/waddineha_22_csm" target="_blank" >
          <FaHackerrank className="text-4xl  hover:transform transition duration-300 ease-in-out mx-4 hover:scale-110 border-gray-600 h-12 w-12" />
        </a>
        <a href="https://leetcode.com/u/Neha_Waddi08/" target="_blank" >
        <Image 
          src="/images/leetcode.svg"
          width={50}
          height={50}
          className="text-4xl hover:text-violet-400 hover:transform transition duration-300 ease-in-out mx-4 hover:scale-110 border-gray-600"
        />
        </a>
        <a href="https://www.geeksforgeeks.org/user/nehawmbzi/" target="_blank" >
        <Image 
          src="/images/gfg.svg"
          width={50}
          height={50}
          className="text-4xl hover:text-violet-400 hover:transform transition duration-300 ease-in-out mx-4 hover:scale-110 border-gray-600"
        />
        </a>
        
        
      </div>
    </section>
  );
};

export default HeroSection;
