import React from 'react'
import './styles/Home.css'

const Home = () => {
  return (
    <>
        <section className='home' id='home'>
            <div className='home-content'>
                <h3>Hola, Yo soy</h3>
                <h1>Ulices Salvador</h1>
                <h3>y soy <span id='element'></span></h3>
                <p>Con gran afición al mundo Tecnológico, tanto Frontend como Backend; persiguiendo nuevos retos y explorando continuamente las nuevas tendencias.
                Siempre aprendiendo | Abierto a nuevos desafíos </p>
                <div className='social-media'>
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="https://github.com/SalvadorAguila13"><i className='bx bxl-github'></i></a>
                    <a href="#"><i className='bx bxl-instagram'></i></a>
                    <a href="https://www.linkedin.com/in/ulices-aguila-contreras-5b4130242/"><i className='bx bxl-linkedin'></i></a>
                </div>
                <a href="#" className='btn'>Descarga mi CV</a>
            </div>

            <div className='home-img'>
                <img src="./images/web.png" alt="./images/people.jfif" />
            </div>
        </section>

        
    </>
  )
}

export default Home