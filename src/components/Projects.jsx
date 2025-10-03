import './projects.css'
import { useTranslation } from 'react-i18next';
import imgSmoking from '../assets/projects/fumer.png'
import imgEmotions from '../assets/projects/emotions.png'
import imgLanding from '../assets/projects/landing.png'
function Projects() {
    const { t } = useTranslation();

    const projects = [
        {
            id: 'smoking',
            title: t('projects.smoking.title'),
            description: t('projects.smoking.description'),
            image: imgSmoking,
            github: 'https://github.com/Evablan/Plataforma_Dejar_De_Fumar',
            tech: ['HTML', 'CSS', 'JavaScript']
        },
        {
            id: 'ecommerce',
            title: t('projects.ecommerce.title'),
            description: t('projects.ecommerce.description'),
            image: null,
            github: 'https://github.com/Evablan/Shop-online',
            tech: ['HTML', 'CSS', 'Laravel', 'Sqlite']
        },
        {
            id: 'emotions',
            title: t('projects.emotions.title'),
            description: t('projects.emotions.description'),
            image: imgEmotions,
            github: 'https://github.com/Evablan/GBNEmotions',
            tech: ['HTML', 'CSS', 'Laravel', 'Sqlite']
        },

        {
            id: 'landing-saas',
            title: t('projects.landing-saas.title'),
            description: t('projects.landing-saas.description'),
            image: imgLanding,
            github: 'https://github.com/Evablan/landing-saas',
            tech: ['HTML', 'CSS', 'JavaScript']
        }

    ];

    return (
        <section className="projects" id="proyectos">
            <h2 className="section-title">{t('projects.title')}</h2>
            <div className="project-grid">
                {projects.map((p) => (
                    <article key={p.id} className="projects-card">
                        {p.image && (
                            <img src={p.image} alt={p.title} className='projects-img' />
                        )}
                        <div className="projects-card-body">
                            <h3 className="projects-card-title">{p.title}</h3>
                            <p className="projects-card-desc">{p.description}</p>
                            <div className="technologies">
                                {p.tech.map((tTech) => (
                                    <span key={tTech}>{tTech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="projects-card-actions">
                            <a href={p.github} target="_blank" rel="noopener noreferrer" className="github-link" title={t('projects.viewOnGithub')}>
                                🐙 {t('projects.viewOnGithub')}
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects;