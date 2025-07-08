import ProjectsItem from "./ProjectsItem"
import '../styles/styles.css'
import { useEffect, useState } from "react"
import { getProjects } from "../mock/AsyncService"

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects()
      .then((response) => {
        setProjects(response)
      })
      .catch(console.log('Error'))
  }, [])
  console.log(projects)

  return (
    <>
      <div className='projects' id="projects">
        <h2 className="projects_title">Proyectos</h2>
        <div className="projects_container">
          {projects.map((project) => <ProjectsItem key={project.id} project={project} />)}
        </div>
        <button className="btn btn_dark">Ver mas proyectos</button>
      </div>
    </>
  )
}

export default ProjectsContainer
