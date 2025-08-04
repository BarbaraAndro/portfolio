import { useTranslation } from 'react-i18next';
import '../styles/styles.css';

const About = () => {
    const {t} = useTranslation()

    return (
        <div className='about' id='about'>
                <h1 className='about_name'>Barbara Andro</h1>
                <h2 className='about_title'>{t("profesion")}</h2>
                <p className='about_paragraph'>{t('aboutMe')}</p>
                <a className='btn btn_light' href='/curriculum.pdf' target="_blank" rel="noopener noreferrer">{t('cv')}</a>
        </div>
    )
}

export default About
