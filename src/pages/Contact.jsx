import '../styles/contact.css'

const __LinkURL = 'https://www.linkedin.com/in/leoneldon/';
const __GithubURL = 'https://github.com/DonLeonel';

export const Contact = () => {
  return (
    <section className="section" id="contacto">
      <h2 className="h2-subtitulos">Contácto<span className="punto">.</span></h2>
      <div className="container-fab">
        <a href={__LinkURL} aria-label='Navegar a Linkeding de Leonel'><i title='Linkedin' className='fab fa-linkedin'></i></a>
        <a href={__GithubURL} aria-label='Navegar a Github de Leonel'><i title='Github' className="fab fa-github"></i></a>        
      </div>
    </section>
  )
}
