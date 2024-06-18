import React from 'react'
import Resum from '../assets/resume.png'
import RR from '../assets/Hephzibai.pdf'

const Resume = () => {
  return (
    <div>
        <section id="resume" className='flex flex-col md:flex-row justify-center bg-blue-500 px-5 py-6'>
            <div className='w-1/2 md:w-1/2 flex md:justify-end'>
                <img src={Resum} />
            </div>
            <div className='md:w-1/2 flex justify-center text-white' >
              <div className='justify-center flex flex-col md:pl-5'>
                <h1 className='text-4xl border-b-2 mb-5 w-[150px] font-bold'>Resume</h1>
                <p >You can view my resume <a href='#'className='btn' download={RR}>Download</a></p>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Resume