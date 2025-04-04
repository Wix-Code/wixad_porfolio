import React from 'react'
import "./home.css"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { GoDownload } from 'react-icons/go'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='home'>
      <div className='home1'>
        <h3>Software Developer</h3>
        <h1>Hello, My Name is <br />
          Ogbonna Ugochukwu</h1>
        <p>I Help businesses gain 20X more leads with fast loading, <br /> beautiful and uniquely designed websites.</p>
        <div className='btn'>
          <button>Contact me <GoDownload className='down' /></button>
          <button>Download CV <GoDownload className='down' /></button>
        </div>
        <div className='icon'>
          <a href="https://gibhub.com/Wix-Code"><FaGithub /></a>
          <a href="https://web.facebook.com/profile.php?id=61573972061573"><FaFacebook /></a>
          <a href="http://"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/ogbonna-wisdom-23958420b/"><FaLinkedin /></a>
        </div>
      </div>
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export default Home