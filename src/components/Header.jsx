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
    {/* Crear el archivo de descarga de CV */ }
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

    return (
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
                            aria-haspopup="listbox"
                            aria-expanded={isLanguageOpen}
                            aria-label="Cambiar idioma"
                            title="Cambiar idioma"
                        >
                            <span className="language-globe" aria-hidden="true">
                                <svg width="16" height="16" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m0 2c1.6 0 3.086.47 4.33 1.27c-.53.19-1.09.38-1.67.53C13.74 6.24 12.92 6.5 12 6.5s-1.74-.26-2.66-.7c-.58-.25-1.14-.44-1.67-.53A8 8 0 0 1 12 4m-7.45 5.5h2.34c.27.68.63 1.36 1.1 2.02c-.54.7-1.08 1.22-1.58 1.6c-.73.55-1.47.83-2.17.88A7.97 7.97 0 0 1 4.55 9.5m7.45 10a7.97 7.97 0 0 1-7.45-5.5c.95-.02 1.94-.37 2.92-1.1c.63-.48 1.24-1.1 1.82-1.84c1.03 1.02 2.21 1.94 3.71 2.6V19.5M6.1 7.24c.62.08 1.34.33 2.19.7C9.42 8.5 10.6 8.8 12 8.8s2.58-.3 3.71-.86c.85-.37 1.57-.62 2.19-.7A7.97 7.97 0 0 1 19.45 9.5h-2.34a9.6 9.6 0 0 0-1.1-2.02A10.6 10.6 0 0 0 12 5.9c-1.63 0-2.98.48-3.99 1.58A9.6 9.6 0 0 0 6.89 9.5H4.55c.26-1.03.75-1.98 1.55-2.26M13 19.5v-5.84c1.5-.66 2.68-1.58 3.71-2.6c.58.74 1.19 1.36 1.82 1.84c.98.73 1.97 1.08 2.92 1.1A8 8 0 0 1 13 19.5Z" />
                                </svg>
                            </span>
                            <span className="language-flag">{currentLanguage?.flag}</span>
                            <span className="language-code">{currentLanguage?.code.toUpperCase()}</span>
                            <span className="language-caret" aria-hidden="true">▾</span>
                        </button>

                        {isLanguageOpen && (
                            <div className="language-dropdown" role="listbox">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className={`language-option ${lang.code === i18n.language ? 'active' : ''}`}
                                        onClick={() => changeLanguage(lang.code)}
                                        role="option"
                                        aria-selected={lang.code === i18n.language}
                                    >
                                        <span className="language-flag">{lang.flag}</span>
                                        <span className="language-name">{lang.name}</span>
                                        <span className="language-code-chip">{lang.code.toUpperCase()}</span>
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