import { FaBootstrap, FaFigma, FaGithub, FaReact } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'
import { LuDonut } from 'react-icons/lu'
import { SiCss3, SiFirebase, SiJavascript, SiReacthookform, SiReactrouter, SiSass } from 'react-icons/si'

const SkillsContainer = () => {
  return (
    <div className='skills' id='skills'>
      <div className="skills_sections">
        <h2 className='skills_title'>Habilidades</h2>
        <div className='skills_logo-container'>
          <ImHtmlFive className='skills_logo' />
          <SiCss3 className='skills_logo' />
          <SiJavascript className='skills_logo' />
          <FaReact className='skills_logo' />
          <FaGithub className='skills_logo' />
          <FaFigma className='skills_logo' />
        </div>
      </div>
      <div className="skills_sections">
        <h2 className='skills_title'>Librerias</h2>
        <div className='skills_logo-container'>
          <SiSass className='skills_logo' />
          <FaBootstrap className='skills_logo' />
          <LuDonut className='skills_logo' />
          <SiFirebase className='skills_logo' />
          <SiReacthookform className='skills_logo' />
          <FaReact className='skills_logo' />
          <SiReactrouter className='skills_logo' />
        </div>
      </div>
    </div>
  )
}

export default SkillsContainer
