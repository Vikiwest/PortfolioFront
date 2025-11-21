import React, { useState, useEffect, useRef } from "react";
import Navheading from "./navheading";
import Navanchors from "./navanchors";
import { useActiveTab } from "../../hooks/useActiceTab"; // Import the custom hook

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useActiveTab();
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full bg-[#000000] sticky top-0 z-50" ref={navRef}>
      <nav className="w-[80%] m-auto flex justify-between items-center h-14 md:h-16">
        <Navheading />

        {/* Hamburger Menu Button with Animation */}
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-8 h-8 md:hidden focus:outline-none focus:ring-2 focus:ring-brandyellow rounded transition-all duration-300"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`} />
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`} />
          <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`} />
        </button>

        <Navanchors 
          isOpen={isOpen} 
          closeMenu={closeMenu} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </nav>
    </div>
  );
}

export default Nav;