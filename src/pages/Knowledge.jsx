import '../styles/knowledge.css'

export const Knowledge = () => {
  return (
    <section className='section' id='conocimientos'>
      <h2 className='h2-subtitulos'>Conocimientos<span className="punto">.</span></h2>
      <h5 className='h5-subtitulo'>Lenguajes de Programación y Herramiéntas</h5>
      <div className='container-fab'>
        <i title='Html 5' className="fab fa-html5" aria-hidden="true"></i>
        <i title='Css 3' className="fab fa-css3-alt" aria-hidden="true"></i>
        <i title='Java Script' className="fab fa-js-square" aria-hidden="true"></i>
        <i title='React' className='fab fa-react' aria-hidden="true"></i>
        <i title='Npm' className="fab fa-npm" aria-hidden="true"></i>
        <i title='Node.js' class="fa-brands fa-node" aria-hidden="true"></i>
        <i title='Github' className="fab fa-github" aria-hidden="true"></i>
        <i title='Bootstrap' className="fab fa-bootstrap" aria-hidden="true"></i>
        <i title='Java' className="fab fa-java" aria-hidden="true"></i>
      </div>
      <div className='container-conoci'>
        <ul>
          <li>Diseños responsivos.</li>
          <li>Testing con Junit y Mockito.</li>
          <li>Desarrollo en C#</li>
          <li>SpringData, SpringBoot.</li>
          <li>Entity Framework Core.</li>
          <li>ADO.Net.</li>
          <li>Desarrollo con Express Js y React.</li>
        </ul>
      </div>
    </section>
  )
}

