import './Contact.css'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const { t } = useTranslation();
    const [formDataName, setNombre] = useState('')//estado para el nombre
    const [email, setEmail] = useState('')//estado para el email
    const [mensaje, setMensaje] = useState('')//estado para el mensaje
    const [isSubmitting, setIsSubmitting] = useState(false)//estado para mostrar loading
    const [submitStatus, setSubmitStatus] = useState('idle')//estado para mostrar éxito/error

    const handleInputChange = (e) => { //Nombre de la funcion; (e) -> parámetro que recibe el evento => función flecha
        const {name, value} = e.target; //target -> contiene la información del input
        //console.log('Campo:', name, 'Valor:', value);

        switch (name) {
            case 'nombre':
                setNombre(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'mensaje':
                setMensaje(value);
                break;
            default:
                break;
        }
    };  

    const handleSubmit = (e) => { //Nombre de la funcion; (e) -> parámetro que recibe el evento => función flecha
        e.preventDefault(); //evita que el formulario se envíe automáticamente, permite que React maneje el envío
        
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Configuración de EmailJS
        const templateParams = {
            from_name: formDataName,
            from_email: email,
            message: mensaje,
            title: 'Nuevo mensaje desde portfolio'
        };

        // Enviar email usando EmailJS
        emailjs.send(
            'service_zr30ywk', // Service ID
            'template_fst50o8', // Template ID
            templateParams,
            '75AKMtx-1o-R9J9SX' // Public Key de EmailJS
        )
        .then((response) => {
            console.log('Email enviado exitosamente:', response);
            setSubmitStatus('success');
            // Limpiar formulario
            setNombre('');
            setEmail('');
            setMensaje('');
        })
        .catch((error) => {
            console.error('Error al enviar email:', error);
            setSubmitStatus('error');
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <section className="contact" id="contacto">
            <h2 className="section-title">{t('contact.title')}</h2>
            <div className="contact-content">
                {/* Información de contacto */}
                <div className="contact-info">
                    <h3>{t('contact.info.title')}</h3>
                    <p>{t('contact.info.description')}</p>
                    <div className="contact-links">
                        <a href="mailto:evablancomart@gmail.com">
                            📧 evablancomart@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/evablancodev/" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            💼 LinkedIn
                        </a>
                        <a href="https://github.com/Evablan" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            🐙 GitHub
                        </a>
                    </div>
                </div>

                {/* Formulario de contacto */}
                <div className="contact-form">
                    <h3>{t('contact.form.title')}</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">{t('contact.form.name')}</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="nombre" 
                                value={formDataName} //valor del input
                                onChange={handleInputChange} //función que se ejecuta cuando el usuario escribe en el input
                                placeholder={t('contact.form.namePlaceholder')} 
                                required 
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t('contact.form.email')}</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={email}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.emailPlaceholder')} 
                                required 
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t('contact.form.message')}</label>
                            <textarea 
                                id="message" 
                                name="mensaje" 
                                value={mensaje}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.messagePlaceholder')} 
                                required
                                disabled={isSubmitting}
                            ></textarea>
                        </div>
                        
                        {/* Mensajes de estado */}
                        {submitStatus === 'success' && (
                            <div className="success-message">
                                ✅ ¡Mensaje enviado con éxito! Te responderé pronto.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="error-message">
                                ❌ Error al enviar el mensaje. Inténtalo de nuevo.
                            </div>
                        )}
                        
                        <button 
                            type="submit" 
                            className="btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : t('contact.form.submit')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;