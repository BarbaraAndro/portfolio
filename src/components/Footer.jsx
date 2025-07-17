import { IoPerson } from 'react-icons/io5'
import '../styles/styles.css'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsSuitcaseLgFill } from 'react-icons/bs'
import Form from './Form'


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div >
                <div className='footer_sections'>
                    <h2 className='footer_title'>Contacto</h2>
                    <div className="footer_text">
                        <IoPerson className='footer_icon' />
                        <h3>Barbara Antonella Andro</h3>
                    </div>
                    <div className="footer_text">
                        <MdOutlineAlternateEmail className='footer_icon' />
                        <h3>barbyandro12@gmail.com</h3>
                    </div>
                </div>
                <div className='footer_sections'>
                    <h2 className='footer_title'>Mis redes</h2>
                    <a href="https://github.com/BarbaraAndro" className="footer_text">
                        <FaGithub className='footer_icon' />
                        <h3>Github</h3>
                    </a>
                    <a href="https://www.linkedin.com/in/barbara-andro/" className="footer_text">
                        <FaLinkedin className='footer_icon' />
                        <h3>LinkedIn</h3>
                    </a>
                    <a href="" className="footer_text">
                        <BsSuitcaseLgFill className='footer_icon' />
                        <h3>Portfolio</h3>
                    </a>
                </div>
            </div>
            <div className='form'>
                <Form/>
            </div>
        </div>
    )
}

export default Footer
