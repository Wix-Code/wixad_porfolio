import React, { useEffect } from 'react'
import AOS from "aos"
import "./skills.css"
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='skills'>
      <div className='skil_h1'>
        <h1>Skills</h1>
        <p>I've honed these skills through diverse projects and experiences.</p>
      </div>
      <div className='skill'>
        <div data-aos="fade-right" className='skil'>
          Tailwind CSS
        </div>
        <div data-aos="fade-right" className='skil'>
          TypeScript
        </div>
        <div data-aos="fade-right" className='skil'>
          JavaScript
        </div>
        <div data-aos="fade-left" className='skil'>
          React Js
        </div>
        <div data-aos="fade-left" className='skil'>
          Next Js
        </div>
        <div data-aos="fade-left" className='skil'>
          Mongo DB
        </div>
        <div data-aos="fade-right" className='skil'>
          Postgres
        </div>
        <div data-aos="fade-right" className='skil'>
          Express Js
        </div>
        <div data-aos="fade-right" className='skil'>
          Git
        </div>
        <div data-aos="fade-left" className='skil'>
          GitHub
        </div>
        <div data-aos="fade-left" className='skil'>
          Node Js
        </div>
        <div data-aos="fade-left" className='skil'>
          React Native
        </div>
      </div>
    </div>
  )
}

export default Skills