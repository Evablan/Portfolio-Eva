import './Projects.css'
import { useTranslation } from 'react-i18next';
import img1 from '../assets/projects/fumer.png'
import img3 from '../assets/projects/emotions.png'

function Projects() {
    const { t } = useTranslation();

    return(
        <section className ="projects" id="proyectos">
            <h2 className="section-title">{t('projects.title')}</h2>
            <div className = "project-grid">
                <article className ="projects-card">
                    <h3>{t('projects.smoking.title')}</h3>
                    <img src ={img1} alt={t('projects.smoking.title')} className='projects-img' />
                    <a href="https://github.com/Evablan/Plataforma_Dejar_De_Fumar" target="_blank" rel="noopener noreferrer" className="github-link">
                        🐙 Ver en GitHub
                    </a>
                    <p>{t('projects.smoking.description')}</p>
                    <div className="technologies">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                </article>
            

            <article className="projects-card">
                <h3>{t('projects.ecommerce.title')}</h3>
               <a href="https://github.com/Evablan/Shop-online" target="_blank" rel="noopener noreferrer" className="github-link">
                    🐙 Ver en GitHub
               </a>
                <p>{t('projects.ecommerce.description')}</p>
                <div className="technologies">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Laravel</span>
                    <span>Sqlite</span>
                </div>
            </article>


            <article className="projects-card">
                <h3>{t('projects.emotions.title')}</h3>
                <img src ={img3} alt={t('projects.emotions.title')} className='projects-img' />
                <a href="https://github.com/Evablan/GBNEmotions" target="_blank" rel="noopener noreferrer" className="github-link">
                    🐙 Ver en GitHub
                </a>
                <p>{t('projects.emotions.description')}</p>
                <div className="technologies">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Laravel</span>
                    <span>Sqlite</span>
                </div>
                
            </article>
            </div>
            
        </section>
    )
}

export default Projects;