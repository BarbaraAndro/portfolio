import '../styles/styles.css'

const ProjectsItem = ({project}) => {
  return (
    <div className="projects_card">
      <img className="projects_img" src={project.img} alt="" />
      <h3 className="projects_name">{project.title}</h3>
      <p className="projects_paragraph">{project.description}</p>
    </div>
  )
}

export default ProjectsItem