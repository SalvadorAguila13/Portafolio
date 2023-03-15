import React from 'react'
import './styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-text'>
            <p> Copyright &copy; 2023 by SAC | </p>
        </div>
        <div className="footer-iconTop">
            <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
    </footer>
  )
}

export default Footer