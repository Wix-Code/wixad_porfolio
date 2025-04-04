import React from 'react'
import { Links } from '../dummyData'
import { Link, useLocation } from 'react-router-dom'
import "./responsive.css"

const ResponsiveNavbar = ({setOpen}) => {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <div className='responsive'>
      {
        Links.map((link) => {
          return (
            <div className='nav_link'>
              <Link to={link.href}><p onClick={() => setOpen (false)} className={link.href === pathname ? "active" : ""}>{link.label}</p></Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default ResponsiveNavbar