import React from "react";
import { Link } from "react-router-dom";

function Navanchors({ isOpen, closeMenu, activeTab, setActiveTab }) {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    closeMenu();
  };

  const activeStyles = "text-brandyellow border-b-2 border-brandyellow";
  const inactiveStyles = "text-white hover:text-brandyellow";

  return (
    <div
      className={`anchortxt text-white bg-[#000000] space-x-16 font-bold md:flex flex-col md:flex-row ${
        isOpen ? "block" : "hidden"
      } md:block absolute md:static md:bg-transparent w-full md:w-auto top-14 left-0 shadow-lg md:shadow-none z-20`}
    >
      <Link
        to="/about"
        className={`block ml-16 p-4 md:p-0 hover:text-brandyellow md:hover:bg-transparent transition duration-200 md:ml-0 ${
          activeTab === '/about' ? activeStyles : inactiveStyles
        }`}
        onClick={() => handleTabClick('/about')}
      >
        About
      </Link>
      <Link
        to="/contact"
        className={`block p-4 md:p-0 hover:text-brandyellow md:hover:bg-transparent transition duration-200 ${
          activeTab === '/contact' ? activeStyles : inactiveStyles
        }`}
        onClick={() => handleTabClick('/contact')}
      >
        Contact
      </Link>
    </div>
  );
}

export default Navanchors;