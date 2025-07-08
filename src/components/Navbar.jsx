import '../styles/styles.css'


const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar_logo'>
                    <img className='navbar_img' src="https://picsum.photos/200" alt="logo" />
                </div>
                <ul className='navbar_menu'>
                    <li ><a className='navbar_item' href="">Sobre mi</a></li>
                    <li><a className='navbar_item' href="#skills">Habilidades</a></li>
                    <li><a className='navbar_item' href="#projects">Proyectos</a></li>
                    <li><a className='navbar_item' href="#footer">Contacto</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar