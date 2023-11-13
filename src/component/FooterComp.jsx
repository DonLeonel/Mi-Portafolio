import '../styles/footer.css'


export const FooterComp = () => {
  return (
    <footer>
      <div className='opciones-footer'>
        <a href='#' className='button-cv' aria-label='volver hacia arriba'>Ir arriba</a>
        <a download='curriculumLeonel.pdf' aria-label='descargar currículum' href='/curriculum.pdf' className='button-cv'>Descargar <br /> Curriculum</a>
      </div>
      <div className='copirigth'>
        <span><i className="fa-regular fa-copyright"></i><br />Copyright</span>
      </div>
    </footer>
  )
}
