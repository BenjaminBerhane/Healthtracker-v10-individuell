import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-end w-full">
      {/* Döljer knappen på större skärmar */}
      <button
        onClick={toggleNavbar}
        className="px-4 py-2 hover:bg-gray-200 rounded-md md:hidden"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Desktop-menyn visas alltid på större skärmar */}
      <ul className="hidden md:flex gap-8">
        <li><NavLink to="/" className="px-4 py-2 hover:bg-gray-200 rounded-md">Dashboard</NavLink></li>
        <li><NavLink to="/profilecard" className="px-4 py-2 hover:bg-gray-200 rounded-md">Profile</NavLink></li>
        <li><NavLink to="/mealLog" className="px-4 py-2 hover:bg-gray-200 rounded-md">Meallog</NavLink></li>
      </ul>

      {/* Dropdown-menyn syns bara i mobilvy när knappen trycks */}
      {isOpen && (
        <ul className="md:hidden flex flex-col mt-4">
          <li className="my-2"><NavLink to="/" className="px-4 py-2 hover:bg-gray-200 rounded-md">Dashboard</NavLink></li>
          <li className="my-2"><NavLink to="/profilecard" className="px-4 py-2 hover:bg-gray-200 rounded-md">Profile</NavLink></li>
          <li className="my-2"><NavLink to="/mealLog" className="px-4 py-2 hover:bg-gray-200 rounded-md">Meallog</NavLink></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

