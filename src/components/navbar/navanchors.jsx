import React from "react";
import { Link } from "react-router-dom"; // Import Link

function Navanchors({ isOpen, closeMenu }) {
  return (
    <div className={`anchortxt space-x-16 font-bold md:flex flex-col md:flex-row ${isOpen ? "block" : "hidden"} md:block absolute md:static bg-white md:bg-transparent w-full md:w-auto top-14 left-0 shadow-lg md:shadow-none z-20`}>
      <Link to="/about" className="block ml-16 p-4 md:p-0 hover:bg-gray-200 md:hover:bg-transparent transition duration-200" onClick={closeMenu}>About</Link>
      <Link to="/contact" className="block p-4 md:p-0 hover:bg-gray-200 md:hover:bg-transparent transition duration-200" onClick={closeMenu}>Contact</Link>
    </div>
  );
}

export default Navanchors;

