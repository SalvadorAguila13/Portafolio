import React from "react";
import "./styles/Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        Mis <span> habilidades</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
        <i className='bx bxl-html5'></i>
          <h3>HTML</h3>
          <p>
            Conocimiento para crear un documento estructurado utilizando
            elementos como imágenes, formularios, listas, etc.
          </p>
          {/* <a href="#" className='btn'>Mas...</a> */}
        </div>

        <div className="services-box">
          <i className='bx bxl-css3'></i>
          <h3>CSS</h3>
          <p>
            Maneja del diseño y presentación de las páginas web, con diseños
            responsive y funcionalidades creativas.
          </p>
          {/* <a href="#" className='btn'>Mas...</a> */}
        </div>

        <div className="services-box">
          <i className='bx bxl-javascript'></i>
          <h3>JavaScript</h3>
          <p>
            Conocimiento para crear páginas web interactivas usando el lenguaje
            de programación JavaScript, para asi cubrir las necesidades de cada
            cliente.
          </p>
          {/* <a href="#" className='btn'>Mas...</a> */}
        </div>

        <div className="services-box">
          <i className='bx bxl-react'></i>
          <h3>React JS</h3>
          <p>
            Uso de libreria especializada para maquetar, estilar y agregar
            funcionalidades al sitio web, creando proyectos mejor organizados y
            mantenibles.
          </p>
          {/* <a href="#" className='btn'>Mas...</a> */}
        </div>

        <div className="services-box">
          <i className='bx bxl-bootstrap'></i>
          <h3>Bootstrap</h3>
          <p>
            Libreria de desarrrollo web que está constituido por una serie de
            archivos CSS y JavaScript responsables de asignar características
            específicas a los elementos de la página.
          </p>
          {/* <a href="#" className='btn'>Mas...</a> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
