import React from 'react'
import { Links } from '../dummyData'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navba'>
        <h1>WIXAD</h1>
        <div className='nav'>
          {
            Links.map((link) => {
              return (
                <div>
                  <Link to={link.href}><p>{link.label}</p></Link>
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