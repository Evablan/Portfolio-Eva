import './About.css'
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    return(
        <section className="about" id="sobre-mi">
            <div className="container">
                <h2 className="section-title">{t('about.title')}</h2>
                
                {/* Sección historia */}
                <div className="about-story">
                    <h3>{t('about.story.title')}</h3>
                    <p>{t('about.story.text1')}</p>
                    <p>{t('about.story.text2')}</p>
                </div>

                {/* Experiencia y proyectos */}
                <div className="about-experience">
                    <div className="experience-section">
                        <h3>{t('about.experience.title')}</h3>
                        <div className="experience-item">
                            <h4>{t('about.experience.stage.title')}</h4>
                            <p>{t('about.experience.stage.description')}</p>
                        </div>
                    </div>
                </div>

                {/* Habilidades técnicas */}
                <div className="skills-section">
                    <h3>{t('about.skills.title')}</h3>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h4>{t('about.skills.frontend')}</h4>
                            <div className="skill-tags">
                                <span className="skill-tag html">HTML</span>
                                <span className="skill-tag css">CSS</span>
                                <span className="skill-tag javascript">JavaScript</span>
                                <span className="skill-tag react">React</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4>{t('about.skills.backend')}</h4>
                            <div className="skill-tags">
                                <span className="skill-tag laravel">Laravel</span>
                                <span className="skill-tag php">PHP</span>
                                <span className="skill-tag sqlite">SQLite</span>
                            </div>
                        </div>
                        <div className="skill-category">
                            <h4>{t('about.skills.design')}</h4>
                            <div className="skill-tags">
                                <span className="skill-tag responsive">Responsive Design</span>
                                <span className="skill-tag uiux">UI/UX</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Habilidades blandas */}
                <div className="soft-skills-section">
                    <h3>{t('about.softSkills.title')}</h3>
                    <div className="soft-skills-list">
                        <div className="soft-skill-item">
                            <span className="skill-icon">🤝</span>
                            <div>
                                <h4>{t('about.softSkills.teamwork.title')}</h4>
                                <p>{t('about.softSkills.teamwork.description')}</p>
                            </div>
                        </div>
                        <div className="soft-skill-item">
                            <span className="skill-icon">💬</span>
                            <div>
                                <h4>{t('about.softSkills.communication.title')}</h4>
                                <p>{t('about.softSkills.communication.description')}</p>
                            </div>
                        </div>
                        <div className="soft-skill-item">
                            <span className="skill-icon">📚</span>
                            <div>
                                <h4>{t('about.softSkills.learning.title')}</h4>
                                <p>{t('about.softSkills.learning.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Objetivos futuros */}
                <div className="goals-section">
                    <h3>{t('about.goals.title')}</h3>
                    <p>{t('about.goals.text1')}</p>
                    <p>{t('about.goals.text2')}</p>
                </div>

                {/* Llamada a la acción */}
                <div className="cta-section">
                    <h3>{t('about.cta.title')}</h3>
                    <p>{t('about.cta.description')}</p>
                    <a href="#proyectos" className="btn-primary">{t('about.cta.button')}</a>
                </div>
            </div>
        </section>
    )
}

export default About;