import './Hero.css'
import { useTranslation } from 'react-i18next';
import evaPhoto from '../assets/eva-photo.png'

function Hero() {
    const { t } = useTranslation();

    return(
        <section className="hero" id="inicio">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            {t('hero.greeting', 'Hola, soy')} <span className="hero-name">{t('hero.title')}</span>
                        </h1>
                        <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
                        <p className="hero-description">
                            {t('hero.description')}
                        </p>
                        <div className="hero-buttons">
                        <a href = "#proyectos" className='btn-primary'>{t('nav.projects')}</a>
                           {/* <button className="btn-primary">{t('about.cta.button')}</button> */}
                          
                        </div>
                        
                    </div>
                    <div className="hero-image">
                        <div className="hero-avatar">
                            <img 
                                src={evaPhoto}
                                alt={`${t('hero.title')} - ${t('hero.subtitle')}`}
                                className="avatar-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;