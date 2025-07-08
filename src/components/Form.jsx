import '../styles/styles.css'

const Form = () => {
    return (
        <>
            <div className='form'>
                <h2 className='form_title'>Contactame</h2>
                <form className='form_content' action="">
                    <input className='form_input' type="text" placeholder='Nombre completo' />
                    <input className='form_input' type="text" placeholder='Email' />
                    <input className='form_input' type="text" placeholder='Deje su mensaje aqui' />
                    <button className='btn btn_light' type='submit'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Form