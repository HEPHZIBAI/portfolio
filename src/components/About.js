import React from 'react'
import Abou from '../assets/about.png'

const About = () => {
  const config={
    line1:", currently pursuing my bachelor's degree in computer science engineering. ",
    line2:"Throughout my studies,I've developed a keen interest in several domains, including full-stack development, software testing, and data science.",
    line3:"I've gained valuable knowledge in these areas through coursework and personal projects."
  }
  return (
    <div >
        <section id="about" className='flex flex-col md:flex-row justify-center bg-blue-500 px-5 py-10'>
            <div className='w-1/2 md:w-1/3'>
                <img src={Abou}/>
            </div>
            <div className='md:w-1/2 flex justify-center text-white' >
              <div className='justify-center flex flex-col md:pl-5'>
                <h1 className='text-4xl border-b-2 mb-5 w-[180px] font-bold'>About Me</h1>
                <p style={{textIndent:'5em'}}>HI &#128075;I'm Hephzibai{config.line1}{config.line2}{config.line3} </p>
              </div>
            </div>
        </section>
    </div>
  )
}

export default About