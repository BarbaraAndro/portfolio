import '../styles/styles.css';

const About = () => {
    return (
        <div className='about'>
            <div className="about_section-text">
                <h1 className='about_name'>Barbara Andro</h1>
                <h2 className='about_title'>Desarrolladora Web</h2>
                <p className='about_pargraph'>Lorem ipsum dolor sit amet consectetur. Ornare turpis lorem aliquet eleifend. Ultrices a tellus sit dictumst. Ornare blandit ut feugiat dolor quis sed feugiat ullamcorper.</p>
                <a className='btn btn-light' href='../public/curriculum.pdf'>Descargar CV</a>
            </div>
            <div className="about_section-img">
                <img className='about_img' src="https://picsum.photos/203" alt="Foto de perfil" />
            </div>
        </div>
    )
}

export default About
