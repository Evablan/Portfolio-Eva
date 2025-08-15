import './Header.css'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Header() {
    const { t, i18n } = useTranslation();
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLanguageOpen(false);
    };

    const languages = [
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'en', name: 'English', flag: '🇬🇧' }
    ];
    {/* Crear el archivo de descarga de CV */}
    const handleDownloadCV = () => {
        const cvUrl = '/CV_dev.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'CV_dev.pdf'; // Nombre del archivo que se descargará
        document.body.appendChild(link); // Añadir el enlace al DOM
        link.click(); // Simular un clic en el enlace
        document.body.removeChild(link); // Eliminar el enlace del DOM
    };
    


    const currentLanguage = languages.find(lang => lang.code === i18n.language);

    return(
        <header className="header">
            <div className="container">
                <div className="header-content">
                    {/* Logo/Nombre */}
                    <div className="header-logo">
                        <h1>Eva Blanco</h1>
                        <span className="header-subtitle">{t('hero.subtitle')}</span>
                    </div>
                    
                    {/* Navegación */}
                    <nav className="header-nav">
                        <ul className="nav-list">
                            <li><a href="#inicio">{t('nav.home')}</a></li>
                            <li><a href="#sobre-mi">{t('nav.about')}</a></li>
                            <li><a href="#proyectos">{t('nav.projects')}</a></li>
                            <li><a href="#contacto">{t('nav.contact')}</a></li>
                        </ul>
                    </nav>
                    
                    {/* Selector de idioma */}
                    <div className="language-selector">
                        <button 
                            className="language-button"
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                        >
                            <span className="language-flag">{currentLanguage?.flag}</span>
                            <span className="language-code">{currentLanguage?.code.toUpperCase()}</span>
                        </button>
                        
                        {isLanguageOpen && (
                            <div className="language-dropdown">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className={`language-option ${lang.code === i18n.language ? 'active' : ''}`}
                                        onClick={() => changeLanguage(lang.code)}
                                    >
                                        <span className="language-flag">{lang.flag}</span>
                                        <span className="language-name">{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* Botón de contacto */}
                    
                    
                    
                    <div className="header-cta">
                        <button className="btn-primary" onClick={handleDownloadCV}>{t('nav.downloadCV')}</button>
                    </div>
                   
                </div>
            </div>
        </header>
    )
}

export default Header;