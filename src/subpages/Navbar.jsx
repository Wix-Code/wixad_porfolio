import React from 'react'
import { Links } from '../dummyData'
import { Link, useLocation } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <div className='navbar'>
      <div className='navba'>
        <Link to="/"><h1>WIXAD</h1></Link>
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
      </div>
    </div>
  )
}

export default Navbar