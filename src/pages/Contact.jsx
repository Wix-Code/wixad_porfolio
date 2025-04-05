import React, { useEffect } from 'react'
import "./contact.css"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { FiPhoneCall } from 'react-icons/fi'
import AOS from "aos"

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='contacts'>
      <h1>Contact Me</h1>
      <div className='contact'>
        <div className='cont'>
          <h2 data-aos="fade-up">I'm always active to turn your ideas into reality</h2>
          <h3 data-aos="fade-up">If you can think it, <span>I can build it!</span></h3>
          <p data-aos="fade-up">I’m always open to new opportunities and collaborations. Contact me via email, phone, or social media. I look forward to hearing from you soon.</p>
          <div data-aos="fade-up" className='href'>
            <a href="mailto:ogbonna428alex@gmail.com">Send mail <IoIosMail className='ref' /></a>
            <a href="tel:+2348126829146">Call me <FiPhoneCall className='ref' /></a>
            <a href="https://wa.me/08126829146">WhatsApp <FaWhatsapp className='ref' /></a>
          </div>
          <div data-aos="fade-up" className='icon'>
            <a href="https://gibhub.com/Wix-Code"><FaGithub /></a>
            <a href="https://web.facebook.com/profile.php?id=61573972061573"><FaFacebook /></a>
            <a href="http://"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/ogbonna-wisdom-23958420b/"><FaLinkedin /></a>
          </div>
        </div>
        <div className='contact_img' data-aos="fade-up">
          <img src="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact