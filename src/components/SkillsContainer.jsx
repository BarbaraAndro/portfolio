import { FaBootstrap, FaFigma, FaGithub, FaReact } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'
import { LuDonut } from 'react-icons/lu'
import { SiCss3, SiFirebase, SiJavascript, SiReacthookform, SiReactrouter, SiSass } from 'react-icons/si'
import '../styles/styles.css'

const SkillsContainer = () => {
  return (
    <div className='skills' id='skills'>
      <div className="skills_sections">
        <h2 className='skills_title'>Habilidades</h2>
        <div className='skills_logo-container'>
          <div className='skills_logo-wrapper'>
            <ImHtmlFive className='skills_logo' />
            <h4 className='skills_logo-name'>HTML</h4>
          </div>
          <div className='skills_logo-wrapper'>
            <SiCss3 className='skills_logo' />
            <h4 className='skills_logo-name'>CSS</h4>
          </div>
          <div className='skills_logo-wrapper'>
            <SiJavascript className='skills_logo' />
            <h4 className='skills_logo-name'>JavaScript</h4>
          </div>
          <div className='skills_logo-wrapper'>
            <FaReact className='skills_logo' />
            <h4 className='skills_logo-name'>React</h4>
          </div>
          <div className='skills_logo-wrapper'>
            <FaGithub className='skills_logo' />
            <h4 className='skills_logo-name'>GitHub</h4>
          </div>
          <div className='skills_logo-wrapper'>
            <FaFigma className='skills_logo' />
            <h4 className='skills_logo-name'>Figma</h4>
          </div>
        </div>
      </div>
      <div className="skills_sections">
        <h2 className='skills_title'>Librerias</h2>
        <div className='skills_logo-container'>
          <div className="skills_logo-wrapper">
            <SiSass className='skills_logo' />
            <h4 className='skills_logo-name'>Sass</h4>
          </div>
          <div className="skills_logo-wrapper">
            <FaBootstrap className='skills_logo' />
            <h4 className='skills_logo-name'>Bootstrap</h4>
          </div>
          <div className="skills_logo-wrapper">
            <LuDonut className='skills_logo' />
            <h4 className='skills_logo-name'>Sweet Alert</h4>
          </div>
          <div className="skills_logo-wrapper">
            <SiFirebase className='skills_logo' />
            <h4 className='skills_logo-name'>Firebase</h4>
          </div>
          <div className="skills_logo-wrapper">
            <SiReacthookform className='skills_logo' />
            <h4 className='skills_logo-name'>React Hook Form</h4>
          </div>
          <div className="skills_logo-wrapper">
            <FaReact className='skills_logo' />
            <h4 className='skills_logo-name'>React Icon</h4>
          </div>
          <div className="skills_logo-wrapper">
            <SiReactrouter className='skills_logo' />
            <h4 className='skills_logo-name'>React Router Dom</h4>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SkillsContainer
