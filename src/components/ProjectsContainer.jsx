import ProjectsItem from "./ProjectsItem"
import '../styles/styles.css'
import { useEffect, useState } from "react"
import { getProjects } from "../mock/AsyncService"
import { useTranslation } from "react-i18next"

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([])
  const {t} = useTranslation()

  useEffect(() => {
    getProjects()
      .then((response) => {
        setProjects(response)
      })
      .catch((error) => console.log('Error:', error))
  }, [])

  return (
    <>
      <div className='projects' id="projects">
        <h2 className="projects_title">{t('title3')}</h2>
        <div className="projects_container">
          {projects.map((project) => <ProjectsItem key={project.id} project={project} />)}
        </div>
        {/* <button className="btn btn_dark">Ver mas proyectos</button> */}
      </div>
    </>
  )
}

export default ProjectsContainer
