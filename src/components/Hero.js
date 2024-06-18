import React from 'react'
import Her from "../assets/hero.png"
import { AiOutlineInstagram,AiOutlineLinkedin ,AiOutlineGithub} from "react-icons/ai";
const Hero = () => {
    const config={
        subtitle:"I'm a Full-stack developer",
        linkedin:"https://www.linkedin.com/in/hephzibai-e-a491b424a/",
        github:"https://github.com/HEPHZIBAI",
        insta:"https://www.instagram.com/pleasant___world?igsh=bXVnYjQ5Ym83bDY2"
    }
  return (
    <div>
        <section className='flex  flex-col md:flex-row px-5 py-32 bg-blue-400 justify-center' >
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>Hi,&#128075; <br/> I'm Hephzibai
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10 '>
                    <a target="_blank" href={config.linkedin} className='pr-5 text-white hover:text-black'><AiOutlineLinkedin size={40}/></a>
                    <a target="_blank" href={config.github} className='pr-5 text-white hover:text-black'><AiOutlineGithub size={40}/></a>
                    <a target="_blank" href={config.insta} className='pr-5 text-white hover:text-black'><AiOutlineInstagram size={40}/></a>
                </div>
            </div>
            <img src={Her} className='w-1/2 md:w-1/3 '/>
        </section>
    </div>
  )
}

export default Hero