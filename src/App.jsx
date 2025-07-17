import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProjectsContainer from './components/ProjectsContainer'
import ScrollToTop from './components/ScrollToTop'
import SkillsContainer from './components/SkillsContainer'


function App() {

  return (
    <>
      <Navbar/>
      <About/>
      <SkillsContainer/>
      <ProjectsContainer/>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default App
