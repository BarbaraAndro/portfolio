import { useTranslation } from 'react-i18next'

const ProjectsItem = ({ project }) => {
  const { t } = useTranslation()
  const title = project.titleKey ? t(project.titleKey) : project.title;

  return (
    <div className="projects_card">
      <img className="projects_img" src={project.img} alt="" />
      <h3 className="projects_name">{title}</h3>
      <p className="projects_paragraph">{t(project.descriptionKey)}</p>
      <a href={project.link} className='btn btn_light projects_button' target="_blank" rel="noopener noreferrer" >{t('button1')}</a>
    </div>
  )
}

export default ProjectsItem