import React, { useState } from "react";
import Navheading from "./navheading";
import Navanchors from "./navanchors";

function Nav() {
  // State to track the toggle state of the navigation menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    console.log("Toggle clicked. Current state:", isOpen); // Debugging
    setIsOpen(!isOpen);
  };
    // Function to close the menu
    const closeMenu = () => {
      setIsOpen(false);
    };

  return (
    <div className="w-full">
      <nav className="w-[80%] m-auto flex justify-between items-center h-14">
       
        <Navheading />

        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none hover:text-blue-600 transition duration-200 shadow-lg h-7"
          aria-label="Toggle navigation"
        >
          ☰
        </button>

      
        <Navanchors isOpen={isOpen} closeMenu={closeMenu} />
      </nav>
    </div>
  );
}

export default Nav;
