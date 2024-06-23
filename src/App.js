import React, { Component } from 'react'
import "./App.css"
import Header from './components/Header'
import Hero from './components/Hero'
import Abouta from './components/About'
import Project from './components/Project'
import Skill from './components/Skill'
import Form from './components/Form'
import Scroll from './components/Scroll'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Code from './components/Code'

const App = () => {
  return (
    <div >
      <Scroll/>
      <Header/>
      <Hero/>
      <Abouta/>
      <Skill/>
      <Code/>
      <Resume/>
      <Project/>
      <Form/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
