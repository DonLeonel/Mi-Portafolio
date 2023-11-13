import { NavBarCOMP } from './component/NavBarComp'
import { FooterComp } from './component/FooterComp'
import { About, Project, Knowledge, Studies, Interests, Contact } from './pages/index'


export const App = () => {
  return (
    <>
      <NavBarCOMP />
      <About />
      <Project />
      <Knowledge />
      <Studies />
      <Interests />
      <Contact />
      <FooterComp/>
    </>
  )
}


