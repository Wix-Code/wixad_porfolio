import React, { useEffect } from 'react'
import "./home.css"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { GoDownload } from 'react-icons/go'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import "aos/dist/aos.css";
import AOS from 'aos'
import Contact from './Contact'
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='home'>
      <div className='home1'>
        <h3 data-aos="fade-up">Software Developer</h3>
        <h1 data-aos="fade-up">Hello, My Name is <br />
          Ogbonna Ugochukwu</h1>
        <p data-aos="fade-up">I Help businesses gain 20X more leads with fast loading, <br /> beautiful and uniquely designed websites.</p>
        <div data-aos="fade-up" className='btn'>
          <Link to="/contact"><button>Contact me <GoDownload className='down' /></button></Link>
          <button><a href='./pic/cv.pdf'>Download CV <GoDownload className='down' /></a></button>
        </div>
        <div data-aos="fade-up" className='icon'>
          <a href="https://gibhub.com/Wix-Code"><FaGithub /></a>
          <a href="https://web.facebook.com/profile.php?id=61573972061573"><FaFacebook /></a>
          <a href="http://"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/ogbonna-wisdom-23958420b/"><FaLinkedin /></a>
        </div>
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home