import { GiHamburgerMenu } from 'react-icons/gi'
import '../styles/styles.css'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'


const Navbar = () => {

    const [burger, useBurger] = useState(false) //Clase de burguer o cruz


    const handle = () => {
        useBurger(!burger)
    }

    return (
        <>
                <nav className='navbar'>
                <div className='navbar_logo'>
                    <img className='navbar_img' src="https://picsum.photos/200" alt="logo" />
                </div>
                <ul className={`navbar_menu ${burger && 'burger'}`}>
                    <li ><a className='navbar_item' href="">Sobre mi</a></li>
                    <li><a className='navbar_item' href="#skills">Habilidades</a></li>
                    <li><a className='navbar_item' href="#projects">Proyectos</a></li>
                    <li><a className='navbar_item' href="#footer">Contacto</a></li>
                    <li><a className='btn btn_dark' href='/curriculum.pdf' target="_blank" rel="noopener noreferrer">Descargar CV</a></li>
                </ul>
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