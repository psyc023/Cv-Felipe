import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import bmopng from '../assets/feli.png';
import './css/About.css';
import { useLanguage } from '../i18n/LanguageContext';

const contactChipShadow = {
    boxShadow: '0 0 16px color-mix(in srgb, var(--accent-color) 22%, transparent)',
};

const About: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="about-container p-10 ">
            <div className="about-img-container">
                <img className="about-img" src={bmopng} alt="Felipe Canseco" />
            </div>
            <div className="about-text">
                <p style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>{t.about.greeting}</p>
                <p style={{ fontSize: 30, color: 'var(--accent-color)', marginBottom: '20px' }}>{t.about.role}</p>

                <div style={{ marginBottom: '20px', maxWidth: '900px' }}>
                    <p style={{ fontSize: 20, color: 'white', marginBottom: '12px', lineHeight: '1.6', textAlign: 'justify' }}>
                        {t.about.p1}
                    </p>

                    <p style={{ fontSize: 20, color: 'white', marginBottom: '12px', lineHeight: '1.6', textAlign: 'justify' }}>
                        {t.about.p2}
                    </p>

                    <p style={{ fontSize: 20, color: 'white', marginBottom: '0px', lineHeight: '1.6', textAlign: 'justify' }}>
                        {t.about.p3}
                    </p>
                </div>

                <a
                    href="https://wa.me/529516378642"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-contact-chip"
                    style={contactChipShadow}
                >
                    <FaPhone className="about-contact-chip-icon" />
                    <span>{t.about.phone}</span>
                    <span>+52 951 637 8642</span>
                </a>

                <a
                    href="mailto:feli.canseco.95@gmail.com"
                    className="about-contact-chip"
                    style={contactChipShadow}
                >
                    <FaEnvelope className="about-contact-chip-icon" />
                    <span>{t.about.email}</span>
                    <span>feli.canseco.95@gmail.com</span>
                </a>

                <div className="about-languages">
                    <p className="about-languages-title">{t.about.languagesTitle}</p>
                    <ul className="about-languages-list">
                        {t.about.languageItems.map((item) => (
                            <li key={item.name}>
                                <span>{item.name}</span>
                                <span> — {item.level}</span>
                                {'detail' in item && item.detail ? (
                                    <p className="about-languages-detail">{item.detail}</p>
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
                <p style={{ fontSize: 20, color: 'white' }}>{t.about.location}</p>
                <p style={{ fontSize: 20, color: 'white' }}>{t.about.remote}</p>
            </div>
        </div>
    );
};

export default About;
