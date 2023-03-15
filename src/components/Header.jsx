import React from 'react'
import './styles/Header.css'
// import '../utils/toggleNav'

const Header = () => {
  
  return (
    <header className='header'>
        <a href="#" className='logo'>Portafolio</a>
        <i className='bx bx-menu' id='menu-icon'></i>

        <nav className='navbar'>
        <a href="#home" className='active'>Home</a>
        <a href="#About">Acerca de mí</a>
        <a href="#services">Servicios</a>
        <a href="#portafolio">Portafolio</a>
        <a href="#contact">Contacto</a>
        </nav>
    </header>
  )
}

export default Header