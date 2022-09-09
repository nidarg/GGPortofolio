import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

// Outlet component in the Layout component inserts the matching child route
const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      
    </div>
  )
}

export default Layout