import React from 'react';
import { FaCss3, FaHtml5, FaJava, FaJs, FaPython, FaReact } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { FaC } from 'react-icons/fa6';

const TechIcon = ({ icon, name }) => ( 
  <div
    className={`tech-icon transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full shadow text-center p-4 mt-10 mb-10 ml-10 flex flex-col items-center justify-center bg-gradient-to-tr from-sky-400 to-indigo-600`}
    style={{ width: '100px', height: '100px', border: '2px solid #ffff' }}
  >
    {icon}
    <p className="text-white  mt-2 " >{name}</p> 
  </div>
);

const Skills = () => { 
  const techIcons = [
    { icon: <FaC className="h-10 w-28  text-white " /> },
    { icon: <FaJava className="lg:h-24 lg:w-24 text-white" />, name: 'Java' },
    { icon: <FaPython className="lg:h-24 lg:w-24 text-white" />, name: 'Python' },
    { icon: <FaJs className="lg:h-24 lg:w-24 text-white" />,name:'JavaScript' },
    { icon: <FaHtml5 className="lg:h-24 lg:w-24 text-white" />, name: 'HTML5' },
    { icon: <FaCss3 className="lg:h-24 lg:w-24 text-white" />, name: 'CSS3' },
    { icon: <FaReact className="lg:h-24 lg:w-24 text-white" />, name: 'React' },
    { icon:  <span className='lg:h-24 lg:w-24 text-white font-bold'>C#</span>,name:'CSharp'}
  ];

  return (
    <div className="bg-gray-100">
      <Navbar />
      <h2 className="text-black text-2xl p-10 font-bold">&lt;skills&gt;</h2>
      <div className="tech-icons-container h-96 grid grid-cols-3 gap-4 lg:grid-cols-4" style={{ marginTop: -63 }}>
        {techIcons.map((techIcon) => (
          
          <TechIcon key={techIcon.name} {...techIcon} />
          
        ))}
      </div>
      <h2 className="text-black text-2xl p-10 font-bold lg:mt-8 sm:mt-32 lg:h-44">&lt;skills/&gt;</h2>
    </div>
  );
};

export default Skills;
