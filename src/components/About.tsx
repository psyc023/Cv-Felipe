import React from 'react';
import bmopng from '../assets/feli.png';
import './css/About.css';

const About: React.FC = () => {
    return (
        <div className="about-container p-10 ">
            <div className="about-img-container">
                <img className="about-img" src={bmopng} alt="BMO" />
            </div>
            <div className="about-text">
                <p style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>Hi There! I'm Felipe Canseco</p>
                <p style={{ fontSize: 30, color: '#22c55e', marginBottom: '20px' }}>Senior Software Engineer | Cloud & AI Systems</p>

                {/* ABOUT SUMMARY (separado en párrafos para que se vea alineado) */}
                <div style={{ marginBottom: '20px', maxWidth: '900px' }}>
                    <p style={{ fontSize: 20, color: 'white', marginBottom: '12px', lineHeight: '1.6', textAlign: 'justify' }}>
                        Senior Software Engineer specialized in designing scalable, cloud-native, and AI-driven systems.
                        Proven experience building distributed architectures, microservices, and high-performance APIs using .NET
                        and modern frontend technologies.
                    </p>

                    <p style={{ fontSize: 20, color: 'white', marginBottom: '12px', lineHeight: '1.6', textAlign: 'justify' }}>
                        Focused on AI-powered media processing, real-time transcription, and automation pipelines, delivering
                        reliable and production-ready solutions. Strong background in software architecture, system optimization,
                        and event-driven workflows.
                    </p>

                    <p style={{ fontSize: 20, color: 'white', marginBottom: '0px', lineHeight: '1.6', textAlign: 'justify' }}>
                        Technical leader experienced in guiding architecture decisions, improving system stability, and collaborating
                        with cross-functional teams to deliver scalable and maintainable business solutions.
                    </p>
                </div>

                {/* SECCIÓN TELÉFONO */}
                <p style={{ fontSize: 20, color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                    Phone:
                    <a
                        href="https://wa.me/529511149349"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            marginLeft: '10px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = '#22c55e')}
                        onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
                    >
                        +52 951 114 9349
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                    </a>
                </p>

                {/* SECCIÓN EMAIL */}
                <p style={{ fontSize: 20, color: 'white', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                    Email:
                    <a
                        href="mailto:felipe95jcl@gmail.com"
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            marginLeft: '10px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.color = '#22c55e')}
                        onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
                    >
                        felipe95jcl@gmail.com
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                    </a>
                </p>

                <p style={{ fontSize: 20, color: 'white', marginBottom: '10px' }}>Languages: English, Spanish, Japanese, German</p>
                <p style={{ fontSize: 20, color: 'white' }}>Location: Oaxaca, Mexico</p>
                <p style={{ fontSize: 20, color: 'white' }}>Remote: Available</p>
            </div>
        </div>
    );
};

export default About;