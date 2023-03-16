import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Portafolio from './components/Portafolio'
import Services from './components/Services'
import './utils/toggleNav'
import './utils/scroll'
import './utils/scrollReveal'
import './utils/textWriting'

const Briefcase = () => {

  
  return (
    <>
        <Header/>
        <Home/>
        <About/>
        <Services/>
        <Portafolio/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Briefcase