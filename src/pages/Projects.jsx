import React from 'react'
import "./projects.css"
import { myProjects } from '../dummyData'
import { MdArrowOutward } from 'react-icons/md'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='project'>
        {
          myProjects.map((project) => {
            return (
              <div className="projet" key={project.id}>
                <img src={project.image} alt="" />
                <div className='pro_details'>
                  <h3>{project.title}</h3>
                  <p>{project.stack}</p>
                  <div className='pro_links'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project <MdArrowOutward /></a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View GitHub Link <MdArrowOutward /></a>
                  </div>                 
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects