import { db } from '../service/firebase'
import { addDoc, collection } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const Form = () => {
    const { t } = useTranslation()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: "all" })

    const sendForm = (dataForm) => {
        addDoc(collection(db, "contacts"), dataForm)
            .then((res) => {
                Swal.fire({
                    title: t('swalFireTitle'),
                    text: t('swalFireText'),
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
            <h2 className='form_title'>{t('title6')}</h2>
            <form className='form_content' onSubmit={handleSubmit(sendForm)}>
                <div className="form_group">
                    <input className='form_input' type="text" placeholder={t('placeholder1')} {...register("name", {
                        required: t('message1'),
                        minLength: { value: 3, message: t('message2') }
                    })} />
                    {errors?.name?.type === 'required' && <span className="form_error">{errors.name.message}</span>}
                    {errors?.name?.type === 'minLength' && <span className="form_error">{errors.name.message}</span>}
                </div>
                <div className="form_group">
                    <input className='form_input' type="text" placeholder={t('placeholder2')} {...register("email", {
                        required: t('message3'),
                        pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: t('message4') }
                    })} />
                    {errors?.email?.type === 'required' && <span className="form_error">{errors.email.message}</span>}
                    {errors?.email?.type === 'pattern' && <span className="form_error">{errors.email.message}</span>}
                </div>
                <div className="form_group">
                    <input className='form_input form_message' type="text" placeholder={t('placeholder3')} {...register("message", { required: t('message5') })} />
                    {errors?.message?.type === 'required' && <span className="form_error">{errors.message.message}</span>}
                </div>
                <button className='btn btn_light' type='submit'>{t('button2')}</button>
            </form>
        </>
    )
}

export default Form