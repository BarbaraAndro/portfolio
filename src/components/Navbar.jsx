import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { useTranslation } from 'react-i18next'


const Navbar = () => {

    const [burger, useBurger] = useState(false) //Clase de burguer o cruz
    const { t } = useTranslation()
    const { i18n } = useTranslation()


    const handle = () => {
        useBurger(!burger)
    }

    const handleChange = (e) => {
        const isChecked = e.target.checked;

        if (isChecked) {
            i18n.changeLanguage('en')
        } else {
            i18n.changeLanguage('es')
        }
    }

    return (
        <>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <a
                        href="#about"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className='navbar_img' src="/logo.png" alt="logo" />
                    </a>
                </div>
                <ul className={`navbar_menu ${burger && 'burger'}`}>
                    <li ><a className='navbar_item' href="#about" onClick={handle}>{t('navbarItem1')}</a></li>
                    <li><a className='navbar_item' href="#skills" onClick={handle}>{t('navbarItem2')}</a></li>
                    <li><a className='navbar_item' href="#projects" onClick={handle}>{t('navbarItem3')}</a></li>
                    <li><a className='navbar_item' href="#footer" onClick={handle}>{t('navbarItem4')}</a></li>
                    <li><a className='btn btn_dark' href={t('resume')} onClick={handle} target="_blank" rel="noopener noreferrer">{t('cv')}</a></li>
                </ul>
                <label className="switch">
                    <input type="checkbox" onChange={handleChange} />
                    <span className="slider">EN  ES</span>
                </label>
                <button className={`navbar_burger ${burger && "burger"}`} onClick={handle}>
                    <GiHamburgerMenu />
                </button>
                <button className={`navbar_cross ${!burger && "cross"}`} onClick={handle}>
                    <ImCross />
                </button>
            </nav >
        </>
    )
}

export default Navbar