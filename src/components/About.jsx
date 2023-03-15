import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <>
      <section className="about" id="About">
        <div className="about-img">
          <img src="./images/web.png" alt="" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            Sobre <span> Mí</span>
          </h2>
          <h3>Hola, Soy Ulices Salvador</h3>
          <p>
            Tengo 25 años y soy de México, soy un chico dedicado y creativo, constantemente busco mejorar personal y profesionalmente. Me motiva el aprendizaje constante, actualmente me gusta trabajar con React. <br />
            Me encantaría ser parte de tu equipo, por lo que si tienes alguna duda o quieres saber más de mi, podrias contactarme a través del <a className="formulario" href="#contact">formulario</a> o mis redes sociales..
          </p>
          <a href="#" className="btn">
            Descarga CV...
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
