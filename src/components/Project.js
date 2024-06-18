import React from 'react'
import Netflix from '../assets/netflix.jpg'
import Calci from '../assets/calci.jpg'
import Connect from '../assets/connect4.jpg'
import Todo from '../assets/todo.png'

const Projects = () => {
  const config = {
    projects: [
      {
        image: Netflix,
        description: 'Netflix clone',
        link: ''
      },
      {
        image: Calci,
        description: 'Calculator',
        link: ''
      },
      {
        image: Connect,
        description: 'Connect4',
        link: ''
      },
      {
        image: Todo,
        description: 'Todo List',
        link: ''
      }
    ]
  }

  return (
    <section id="project" className="bg-blue-500 px-5 py-10 text-white">
      <h2 className="text-4xl font-bold border-b-2 mb-5 w-64">MY PROJECTS</h2>
      <p>These are some of my best projects</p>

      <div className="md:grid grid-cols-3 gap-3">
        {config.projects.map((project, index) => (
          <div key={index} className="mb-5">
            <figure>
              <img src={project.image} alt={project.description} width="400" height="300" />
              <figcaption>
                <p>{project.description}</p><br />
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn pt-10">
                  View Project
                </a>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
