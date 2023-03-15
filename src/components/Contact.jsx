import React from 'react'
import './styles/Contact.css'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <h2 className='heading'>Contacta <span> Conmigo!</span></h2>
        <form action="#">
            <div className="input-box">
                <input type="text" placeholder='Nombre completo'/>
                <input type="email" placeholder='Dirección de correo electrónico'/>
            </div>
            <div className="input-box">
                <input type="number" placeholder='Numero de celular'/>
                <input type="text" placeholder='Asunto'/>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
            <input type="submit" value='Send Message' className='btn'/>
        </form>
    </section>
  )
}

export default Contact