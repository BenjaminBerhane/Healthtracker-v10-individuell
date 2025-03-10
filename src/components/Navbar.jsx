import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {Menu, X} from "lucide-react"


function Navlinks() {
  return (
    <nav>
    <NavLink to="/" >Dashboard</NavLink>
    <NavLink to="/profilecard">Profile</NavLink>
    <NavLink to="/mealLog" >Meallog</NavLink>
  </nav>
  )
}
function Navbar() {
  const [isopen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!open);
  };

  return (
    <div className='w-1/3'>
      <div className='hidden  justify-between md:flex'>
        <Navlinks />  
      </div>
      <div className='md:hidden'>
        <button onClick={toggleNavbar}>{isopen ? <X /> : <Menu />}</button>
      </div>
    </div>
  )
}
export default Navbar

