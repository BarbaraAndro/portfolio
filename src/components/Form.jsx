import { useState } from 'react'
import { db } from '../service/firebase'
import '../styles/styles.css'
import { addDoc, collection } from 'firebase/firestore'
import Swal from 'sweetalert2'


const Form = () => {

    const [contact, setContact] = useState({})

    const contactForm = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        })
        console.log(e)
    }
    console.log(contact)

    const sendForm = (e) => {
        e.preventDefault()
        addDoc(collection(db, "contacts"), contact)
            .then((res) => {
                Swal.fire({
                    title: "Muchas gracias por su contacto",
                    text: "Proximamente estaré respondiendo su consulta!",
                    icon: "success"
                });
                e.target.reset();
            })
            .catch((err) => {
                console.log("Ocurrio un error, intentelo nuevamente")
            })
    }

    return (
        <>
            <h2 className='form_title'>Contactame</h2>
            <form className='form_content' onSubmit={sendForm}>
                <input className='form_input' type="text" placeholder='Nombre completo' name='name' onChange={contactForm} />
                <input className='form_input' type="text" placeholder='Email' name='email' onChange={contactForm} />
                <input className='form_input' type="text" placeholder='Deje su mensaje aqui' name='message' onChange={contactForm} />
                <button className='btn btn_light' type='submit'>Enviar</button>
            </form>
        </>
    )
}

export default Form