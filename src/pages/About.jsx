import imgLeo from '../assets/Leo.jpg'
import '../styles/about.css'

export const About = () => (
  <section id='sobreMi' className='sect-about'>
    <div className='avatar-cont'>
      <img className='img' src={imgLeo} alt="Leonel F. Don" />
    </div>
    <div className='about-text'>
      <span className='nombre'>Leonel</span>
      <span className='apellido'> Don</span>
      <p className='parrafo'>
        Soy un estudiante de la Tecnicatura Universitaria en Programación,
        interesado en formar parte de una organización que me brinde la oportunidad
        de aprender y brindar mis conocimientos y habilidades, para asi alcanzar
        los objetivos de la Organización como también los personales.
      </p>
    </div>
  </section>
)
