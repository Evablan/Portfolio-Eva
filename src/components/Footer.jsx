import './Footer.css'
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Información principal centrada */}
                <div className="footer-main">
                    <div className="footer-info">
                        <h3>{t('footer.title')}</h3>
                        <p>{t('footer.subtitle')}</p>
                    </div>
                    
                    {/* Enlaces de contacto horizontales */}
                    <div className="footer-links">
                        <a href="mailto:evablancomart@gmail.com" aria-label="Email">
                            📧 Email
                        </a>
                        <a href="https://www.linkedin.com/in/evablancodev/" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           aria-label="LinkedIn">
                            💼 LinkedIn
                        </a>
                        <a href="https://github.com/Evablan" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           aria-label="GitHub">
                            🐙 GitHub
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="footer-copyright">
                        <p>{t('footer.copyright', { year: currentYear })}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;