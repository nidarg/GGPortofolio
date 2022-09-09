import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header>
      <div>
        <NavLink to ='/'><Logo/></NavLink>
        
        <nav>
          <NavLink to='/about'>About me</NavLink>
          <NavLink to='/project'>Projects</NavLink>
        </nav>
      </div>

    </header>
  )
}

export default Navbar