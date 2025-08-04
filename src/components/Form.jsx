import { db } from '../service/firebase'
import '../styles/styles.css'
import { addDoc, collection } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'

const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "all" })

    const sendForm = (dataForm) => {
        addDoc(collection(db, "contacts"), dataForm)
            .then((res) => {
                Swal.fire({
                    title: "Muchas gracias por su contacto",
                    text: "Proximamente estaré respondiendo su consulta!",
                    icon: "success"
                });
                reset();
            })
            .catch((err) => {
                console.log("Ocurrio un error, intentelo nuevamente")
            })
    }

    return (
        <>
            <h2 className='form_title'>Contactame</h2>
            <form className='form_content' onSubmit={handleSubmit(sendForm)}>
                <div className="form_group">
                    <input className='form_input' type="text" placeholder='Nombre completo' {...register("name", {
                        required: 'Debe completar con su nombre',
                        minLength: { value: 3, message: 'El nombre debe contener al menos 3 caracteres' }
                    })} />
                    {errors?.name?.type === 'required' && <span className="form_error">{errors.name.message}</span>}
                    {errors?.name?.type === 'minLength' && <span className="form_error">{errors.name.message}</span>}
                </div>
                <div className="form_group">
                    <input className='form_input' type="text" placeholder='Email' {...register("email", {
                        required: 'Debe completar con su dirección de correo electrónico',
                        pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Complete con un correo electrónico válido" }
                    })} />
                    {errors?.email?.type === 'required' && <span className="form_error">{errors.email.message}</span>}
                    {errors?.email?.type === 'pattern' && <span className="form_error">{errors.email.message}</span>}
                </div>
                <div className="form_group">
                    <input className='form_input form_message' type="text" placeholder='Deje su mensaje aqui' {...register("message", { required: 'Debe completar con un mensaje' })} />
                    {errors?.message?.type === 'required' && <span className="form_error">{errors.message.message}</span>}
                </div>
                <button className='btn btn_light' type='submit'>Enviar</button>
            </form>
        </>
    )
}

export default Form