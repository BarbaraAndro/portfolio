import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProjectsContainer from './components/ProjectsContainer'
import SkillsContainer from './components/SkillsContainer'


function App() {

  return (
    <>
      <Navbar/>
      <About/>
      <SkillsContainer/>
      <ProjectsContainer/>
      <Footer/>
    </>
  )
}

export default App
