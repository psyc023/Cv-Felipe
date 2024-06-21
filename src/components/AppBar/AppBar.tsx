import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface AppBarProps {
  activeSection: string;
}

const AppBar: React.FC<AppBarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="app-bar bg-black text-white fixed top-0 right-0 w-full h-16 flex items-center justify-between p-4 z-50">
      <div className="flex items-center">
        <span className="text-xl font-bold">CV</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <ul className={`menu flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 absolute lg:static top-16 left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-black lg:bg-transparent transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <li className={activeSection === 'Home' ? 'active' : ''}><a href="#Home" className="block py-2 px-4 lg:p-0" onClick={closeMenu}>Home</a></li>
        <li className={activeSection === 'About' ? 'active' : ''}><a href="#About" className="block py-2 px-4 lg:p-0" onClick={closeMenu}>About</a></li>
        <li className={activeSection === 'Education' ? 'active' : ''}><a href="#Education" className="block py-2 px-4 lg:p-0" onClick={closeMenu}>Education</a></li>
        <li className={activeSection === 'Experience' ? 'active' : ''}><a href="#Experience" className="block py-2 px-4 lg:p-0" onClick={closeMenu}>Experience</a></li>
        <li className={activeSection === 'Skills' ? 'active' : ''}><a href="#Skills" className="block py-2 px-4 lg:p-0" onClick={closeMenu}>Skills</a></li>
        <li className={activeSection === 'Portfolio' ? 'active' : ''}><a href="#Portfolio" className="block py-2 px-4 lg:p-0" onClick={closeMenu}>Portfolio</a></li>
        <li className={activeSection === 'Contact' ? 'active' : ''}><a href="#Contact" className="block py-2 px-4 lg:p-0" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default AppBar;
