import React from 'react'
import './Header.css'
import Logo from './logo'
import Navbar from './Navbar'


const Header = () => {
  return (
    <header className='bg-dark-bckground sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-grey-500 p-8'>
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header