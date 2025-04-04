import React, { useState } from 'react'
import { Links } from '../dummyData'
import { Link, useLocation } from 'react-router-dom'
import "./navbar.css"
import { FaBarsStaggered } from 'react-icons/fa6'
import ResponsiveNavbar from './ResponsiveNavbar'

const Navbar = () => {
  const location = useLocation()
  const pathname = location.pathname
  const [open, setOpen] = useState(false)
  return (
    <div className='navbar'>
      <div className='navba'>
        <Link to="/"><h1>WIXAD</h1></Link>
        {
          open ? (
            <div className='nav'>
          {
            Links.map((link) => {
              return (
                <div className='nav_link'>
                  <Link to={link.href}><p className={link.href === pathname ? "active" : ""}>{link.label}</p></Link>
                </div>
              )
            })
          }
        </div>
          ) : (
              <ResponsiveNavbar />
          )
        }
        <button onClick={() => setOpen(!open)}><FaBarsStaggered /></button>
      </div>
    </div>
  )
}

export default Navbar