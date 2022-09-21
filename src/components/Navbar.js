import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import { SocialIcon } from 'react-social-icons'

const Navbar = () => {
  return (
    <header className='bg-slate-500'>
      <div className='sm:h-48 flex-col h-48  mx-auto flex justify-between items-center transition-all duration-600 delay-100 md:flex-row  mx-auto text-2xl lg:h-24'>
        <NavLink  to ='/'  ><Logo/></NavLink>
        
        <nav className='flex'>
          <NavLink 
          style={({ isActive})=>{return{textDecoration: isActive ? 'underline' : 'none',textDecorationColor:isActive ? 'white':''}}} 
          className=' py-6 px-3 mr-4 text-slate-100 hover:uppercase text-xl  font-bold tracking-wider' to='/about'>About me</NavLink>
          <NavLink 
           style={({ isActive})=>{return{textDecoration: isActive ? 'underline' : 'none',textDecorationColor:isActive ? 'white':''}}} 
          className='py-6 px-3 mr-4 text-slate-100 hover:uppercase text-xl font-bold tracking-wider' to='/project'>Projects</NavLink>
          <NavLink 
           style={({ isActive})=>{return{textDecoration: isActive ? 'underline' : 'none',textDecorationColor:isActive ? 'white':''}}} 
          className='py-6 px-3 mr-4 text-slate-100 hover:uppercase text-xl font-bold tracking-wider' to='/post'>Posts</NavLink>
        </nav>
        <div className='flex'>
        <SocialIcon url='https://www.facebook.com/profile.php?id=100018162017645' className='mr-4' target='_blank' fgColor='#fff' style={{height:35, width:35}} />
        <SocialIcon url='https://www.linkedin.com/in/gradin-gheti-092b36168/' className='mr-4' target='_blank' fgColor='#fff' style={{height:35, width:35}} />
      </div>
      </div>
      

    </header>
  )
}

export default Navbar