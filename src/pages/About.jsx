import React, { useEffect } from 'react'
import "./about.css"
import { GoMail } from 'react-icons/go'
import { FiPhoneCall } from 'react-icons/fi'
import { PiGraduationCapLight } from 'react-icons/pi'
import { FaUserGraduate } from 'react-icons/fa'
import AOS from "aos"
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='about'>
      <div data-aos="fade-up" className='about1'>
        <img src="./pic/wiz.png" alt="" />
      </div>
      <div data-aos="fade-up" className='about2'>
        <h4>About me</h4>
        <h3>Unmatched Service Quality for Over 2 years</h3>
        <p>I specialize in creating websites that load quickly and are elegantly pleasing to the eyes. These websites provide smooth and enjoyable experiences for users and help turn visitors into customers.</p>
        <div className='icons'>
          <FiPhoneCall className='call'/>
          <p>Ogbonna Ugochukwu Wisdom (WIXAD)</p>
        </div>
        <div className='icons'>
          <FiPhoneCall className='call'/>
          <a href="tel:+2348126829146">+234 812 682 9146</a>
        </div>
        <div className='icons'>
          <GoMail className='call'/>
          <a href="mailto:ogbonna428alex@gmail.com">ogbonna428alex@gmail.com</a>
        </div>
        <div className='icons'>
          <FaUserGraduate className='call' />
          <p>BA.ED, University of Nigeria, Nsukka</p>
        </div>
      </div>
    </div>
  )
}

export default About