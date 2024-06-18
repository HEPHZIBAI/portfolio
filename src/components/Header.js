import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
const Header = () => {
    const [toggleMenu,setToggleMenu]=useState(false);
  return (
    <div >
        <header  className='flex justify-between px-5 py-2 bg-blue-500'>
            <a href="#" className='font-bold'>Hephzibai Enstin</a>
            <nav className='hidden md:block'>
                <ul className='flex text-white'>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && <nav className='block md:hidden'>
                <ul onClick={()=> setToggleMenu(!toggleMenu)} className='flex flex-col text-white mobnav'>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>}
            <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><TiThMenu className='text-white h-5'/> </button>
        </header>
    </div>
  )
}

export default Header