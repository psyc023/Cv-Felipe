import React from 'react';

interface AppBarProps {
  activeSection: string;
}

const AppBar: React.FC<AppBarProps> = ({ activeSection }) => {
  return (
    <nav className="app-bar bg-black text-white fixed top-0 right-0 h-16 flex items-center p-4">
      <ul className="menu flex space-x-4">
        <li className={activeSection === 'Home' ? 'active' : ''}><a href="#Home">Home</a></li>
        <li className={activeSection === 'About' ? 'active' : ''}><a href="#About">About</a></li>
        <li className={activeSection === 'Resume' ? 'active' : ''}><a href="#Resume">Resume</a></li>
        <li className={activeSection === 'Skills' ? 'active' : ''}><a href="#Skills">Skills</a></li>
        <li className={activeSection === 'Portfolio' ? 'active' : ''}><a href="#Portfolio">Portfolio</a></li>
        <li className={activeSection === 'Contact' ? 'active' : ''}><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default AppBar;
