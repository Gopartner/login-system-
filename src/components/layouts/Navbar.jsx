import React from 'react';
import useToggle from '@h/useToggle'; // Pastikan untuk mengimpor useToggle
import SidebarMenu from './SidebarMenu'; // Pastikan path ini sesuai
import { faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLinkItem from './NavLinkItem';


const Navbar = () => {
  const [isOpen, toggle] = useToggle(false);

  const handleToggle = () => {
    toggle(); // Mengubah status toggle
  };

  return (
    <>
      <nav className="bg-gray-800 text-white flex items-center justify-between p-4 shadow-md">
        <div className="text-lg font-bold">MyApp</div>
        <button
          onClick={handleToggle}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 focus:outline-none"
        >
          <span className={`block w-8 h-1 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-8 h-1 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-8 h-1 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        <div className="hidden md:flex space-x-4">
<NavLinkItem to="/" label="Home" icon={() => <FontAwesomeIcon icon={faHome} />} />
      <NavLinkItem to="/about" label="About" icon={() => <FontAwesomeIcon icon={faInfoCircle} />} />
      <NavLinkItem to="/contact" label="Contact" icon={() => <FontAwesomeIcon icon={faEnvelope} />} />
    
        </div>
      </nav>
      <SidebarMenu isOpen={isOpen} toggleSidebar={handleToggle} />
    </>
  );
};

export default Navbar;
