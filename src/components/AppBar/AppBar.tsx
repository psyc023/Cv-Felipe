import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';

interface AppBarProps {
  activeSection: string;
}

const AppBar: React.FC<AppBarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const items = [
    { id: 'Home', label: t.menu.home },
    { id: 'About', label: t.menu.about },
    { id: 'Education', label: t.menu.education },
    { id: 'Experience', label: t.menu.experience },
    { id: 'MainProjects', label: t.menu.mainProjects },
    { id: 'Certifications', label: t.menu.certifications },
    { id: 'Skills', label: t.menu.skills },
    { id: 'Portfolio', label: t.menu.portfolio },
    { id: 'Contact', label: t.menu.contact },
  ];

  return (
    <nav className="app-bar bg-black text-white fixed top-0 right-0 w-full h-16 flex items-center justify-between p-4 z-50">
      <div className="flex items-center">
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <ul className={`menu flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 absolute lg:static top-16 left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-black lg:bg-transparent transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {items.map((item) => (
          <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
            <a href={`#${item.id}`} className="block py-2 px-4 lg:p-0" onClick={closeMenu}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AppBar;
