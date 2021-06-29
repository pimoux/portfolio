import { faInstagram, faLinkedin, faVk } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useForm } from 'react-hook-form'
import ContactItem from '../components/ContactItem';


const Contact = () => {

    const {register, formState: { errors } ,handleSubmit} = useForm();

    const onSubmit = data => {
        document.querySelector('.alert-success').style.display = 'block';
        clearValues();
        window.setTimeout(() => {
            if(document.querySelector('.alert-success') !== null){
                document.querySelector('.alert-success').style.display = 'none';
            }
        }, 15000);
    }

    const clearValues = () => {
        var contactForm = document.forms.contactForm;
        contactForm.elements.pseudo.value = '';
        contactForm.elements.email.value = '';
        contactForm.elements.message.value = '';
    }

    return (
        <div className='contact'>
            <h1 className='mainTitle'>CONTACT</h1>
            <div className="alert-success">
                <p className="text-success">L'envoi a été effectué avec succès</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form" name='contactForm'>
                <label htmlFor="pseudo">Pseudo</label>
                <input type='text' {...register('pseudo', {required: "Un pseudonyme est requis"})} />
                {errors.pseudo && <p className="alert-danger">{errors.pseudo.message}</p>}
                <label htmlFor="email">Email</label>
                <input type='email' {...register('email', {required: "Une adresse mail est requise"})} />
                {errors.email && <p className="alert-danger">{errors.email.message}</p>}
                <label htmlFor="message">Message</label>
                <textarea {...register('message', {required: "Ce champ ne doit pas être vide"})}></textarea>
                {errors.message && <p className="alert-danger">{errors.message.message}</p>}
                <input type="submit" className="contact-form-submit" value="Envoyer" />
            </form>
            <h1 className="mainTitle">Réseaux sociaux</h1>
            <div className='contact-links'>
                <ContactItem title="instagram">
                    <FontAwesomeIcon icon={faInstagram} className="contact-icon"/>
                </ContactItem>
                <ContactItem title="VK">
                    <FontAwesomeIcon icon={faVk} className="contact-icon"/>
                </ContactItem>
                <ContactItem title="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className="contact-icon"/>
                </ContactItem>
            </div>
        </div>
    )
}

export default Contact
