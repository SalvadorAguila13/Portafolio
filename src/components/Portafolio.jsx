import React from 'react'
import './styles/Portafolio.css'

const Portafolio = () => {
  return (
    <section className='portafolio' id='portafolio'>
        <h2 className='heading'>Últimos <span> Proyectos</span></h2>
        <div className="portafolio-container">
            <div className="portafolio-box">
                <img src="./images/pokedex.png" alt="" />
                <div className="portafolio-layer">
                    <h4>Pokedex</h4>
                    <p>Una aplicación para la búsqueda de Pokémon mediante el tipo y nombre. </p>
                    <a href="https://pokemon-card-sac.netlify.app/"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            
            <div className="portafolio-box">
                <img src="./images/appgiff.png" alt="" />
                <div className="portafolio-layer">
                    <h4>App Gif</h4>
                    <p>Buscador de gif mediante nombre</p>
                    <a href="https://gifexpertappulices.netlify.app/"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            
            <div className="portafolio-box">
                <img src="./images/rickymorty.png" alt="" />
                <div className="portafolio-layer">
                    <h4>App Rick y Morty</h4>
                    <p>Muestra los personajes que se encuentra en cada dimensión y si estos se encuentra convida o no.</p>
                    <a href="https://entregable-3-rick-y-morty.netlify.app/"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
      
      
            <div className="portafolio-box">
                <img src="./images/randomtext.png" alt="" />
                <div className="portafolio-layer">
                    <h4>Random phrase</h4>
                    <p>Generador de fraces random.</p>
                    <a href="https://fancy-sunshine-4b654e.netlify.app/"><i className='bx bx-link-external'></i></a>
                </div>
            </div>


            <div className="portafolio-box">
                <img src="./images/crud-de-usuarios.png" alt="" />
                <div className="portafolio-layer">
                    <h4>Crud de usuario</h4>
                    <p>Pagina para crear, leer, actualizar y borrar los datos de un usuario.</p>
                    <a href="https://teal-kelpie-ed1a27.netlify.app/"><i className='bx bx-link-external'></i></a>
                </div>
            </div>
            
            
            <div className="portafolio-box">
                <img src="./images/watherapp.png" alt="" />
                <div className="portafolio-layer">
                    <h4>Wather App</h4>
                    <p>Muestra el clima respecto a la región del usuario y tiene la opción de cambiar la temperaturas de Celsius a Farenheit.</p>
                    <a href="https://tiny-naiad-a80afe.netlify.app/"><i className='bx bx-link-external'></i></a>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Portafolio