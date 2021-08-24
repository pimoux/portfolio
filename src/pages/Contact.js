import { faInstagram, faLinkedin, faVk } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useForm } from 'react-hook-form'
import ContactItem from '../components/ContactItem';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_y6fmelb';
const TEMPLATE_ID = 'template_cmqsvz8';
const USER_ID = 'user_xW5Z3n0beFJdfJpmxhcDq';

const Contact = () => {

    const {register, formState: { errors } ,handleSubmit} = useForm();
    const onSubmit = () => {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, document.querySelector('#contact-form'), USER_ID)
        .then(() => {
            document.querySelector('.success').classList.remove('hidden');
            clearValues();
            window.setTimeout(() => {
                document.querySelector('.success').classList.add('hidden');
            }, 15000);
        })
        .catch(() => {
            document.querySelector('.error').classList.remove('hidden');
            clearValues();
            window.setTimeout(() => {
                document.querySelector('.error').classList.add('hidden');
            }, 15000);
        });
    }

    const clearValues = () => {
        var contactForm = document.forms.contactForm;
        contactForm.elements.pseudo.value = '';
        contactForm.elements.email.value = '';
        contactForm.elements.message.value = '';
    }

    const contactItems = [
        {
            title: 'Instagram',
            href: 'https://www.instagram.com/luka.vmt/',
            icon: faInstagram
        },
        {
            title: 'VK',
            href: 'https://vk.com/pimoux',
            icon: faVk
        },
        {
            title: 'LinkedIn',
            href: 'https://www.linkedin.com/in/luka-vouillemont-6051761b8/',
            icon: faLinkedin
        }
    ]

    return (
        <div className='flex flex-col md:flex-row justify-around'>
            <div className="flex flex-col items-center">
                <h1 className="mainTitle">RESEAUX SOCIAUX</h1>
                <div className='flex justify-center items-center w-72 flex-col md:w-full md:mt-20 mt-8'>
                    {contactItems.map((contact, index) => {
                    return (
                        <a href={contact.href} className="mb-8 h-auto no-underline" target="_blank" rel="noreferrer" key={index}>
                            <ContactItem title={contact.title}>
                                <FontAwesomeIcon icon={contact.icon} className="mr-8"/>
                            </ContactItem>
                        </a>
                            );
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className='mainTitle'>CONTACT</h1>
                <div className="hidden success bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <div className="flex">
                        <p className="text-sm"><FontAwesomeIcon icon={faCheck} className="mr-1"/> Envoi effectué avec succès.</p>
                    </div>
                </div>
                <div className="hidden error bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-4/5" role="alert">
                    <span className="block sm:inline text-center">Le mail n'a pas pu être envoyé, une erreur est survenue.</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} id="contact-form" className="flex flex-col justify-center items-center px-8 pb-8" name='contactForm'>
                    <div className="flex flex-col my-4">
                        <label htmlFor="pseudo" className="mb-2 text-turquoise">Pseudo</label>
                        <input id="pseudo" className="outline-none border-none focus:ring-turquoise focus:ring-2 w-72 md:w-96 bg-dark text-turquoise py-2 pl-2 rounded-lg" type='text' {...register('pseudo', {required: "Un pseudonyme est requis"})} />
                        {errors.pseudo && <p className="alert-danger">{errors.pseudo.message}</p>}
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="email" className="mb-2 text-turquoise">Email</label>
                        <input id="email" className="outline-none border-none focus:ring-turquoise focus:ring-2 w-72 md:w-96 bg-dark text-turquoise py-2 pl-2 rounded-lg" type='email' {...register('email', {required: "Une adresse mail est requise"})} />
                        {errors.email && <p className="alert-danger">{errors.email.message}</p>}
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="message" className="mb-2 text-turquoise">Message</label>
                        <textarea id="message" className="h-40 resize-none outline-none focus:ring-turquoise focus:ring-2 w-72 md:w-96 bg-dark text-turquoise py-2 pl-2 rounded-lg" {...register('message', {required: "Un message est requis"})}></textarea>
                        {errors.message && <p className="alert-danger">{errors.message.message}</p>}
                    </div>
                    <input type="submit" className="text-turquoise bg-dark border-2 border-turquoise hover:text-turquoise-dark hover:border-turquoise-dark py-4 px-16 mt-4 rounded-3xl cursor-pointer text-lg" value="Envoyer" />
                </form>
            </div>
        </div>
    )
}

export default Contact
