import React from 'react'
import "./footer.css"
import { Links } from '../dummyData'
import { Link, useLocation } from 'react-router-dom'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <div className='footer'>
      <div className='foot'>
        <h2>Start a project</h2>
        <p>Interested in making waves together? Let's connect and create something amazing.</p>
        <div className='foot2'>
          {
            Links.map((link) => {
              return (
                <div className='foots'>
                  <Link to={link.href}><p className={link.href === pathname ? "active" : ""}>{link.label}</p></Link>
                </div>
              )
            })
          }
        </div>
        <div className='icon'>
          <a href="https://gibhub.com/Wix-Code"><FaGithub /></a>
          <a href="https://web.facebook.com/profile.php?id=61573972061573"><FaFacebook /></a>
          <a href="http://"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/ogbonna-wisdom-23958420b/"><FaLinkedin /></a>
        </div>
        <p className='copy'>Copyright ©2025 ~ Ogbonna Ugochukwu (WIXAD) - Portfolio</p>
      </div>
    </div>
  )
}

export default Footer