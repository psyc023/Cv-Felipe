import React from 'react';
import { Lang, useLanguage } from '../i18n/LanguageContext';
import { simpleCv } from '../i18n/simpleCv';
import './css/SimpleCv.css';

const PORTFOLIO_URL = 'https://psyc023.github.io/Cv-Felipe';
const GITHUB_URL = 'https://github.com/psyc023';

const SimpleCv: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const cv = simpleCv[lang];

  const openFullView = () => {
    window.location.hash = 'Home';
  };

  return (
    <div className="simple-cv">
      <div className="simple-cv-toolbar">
        <label className="simple-cv-lang">
          <span>{t.simpleView.selectLanguage}</span>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            aria-label={t.simpleView.selectLanguage}
          >
            <option value="en">{t.languages.english}</option>
            <option value="es">{t.languages.spanish}</option>
            <option value="ja">{t.languages.japanese}</option>
          </select>
        </label>
        <button type="button" className="simple-cv-back" onClick={openFullView}>
          {t.simpleView.back}
        </button>
      </div>

      <article className="simple-cv-page">
        <header className="simple-cv-header">
          <h1>{cv.name}</h1>
          <p className="simple-cv-role">{cv.role}</p>
          <p className="simple-cv-contact">{cv.contactLine}</p>
          <p className="simple-cv-links">
            <a href={`${PORTFOLIO_URL}#Portfolio`} target="_blank" rel="noopener noreferrer">
              {cv.portfolio}
            </a>
            <span> | </span>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              {cv.github}
            </a>
            <span> | </span>
            <button type="button" className="simple-cv-inline-link" onClick={openFullView}>
              {cv.cvWeb}
            </button>
          </p>
          <p className="simple-cv-langs">{cv.languagesLine}</p>
        </header>

        <section>
          <h2>{cv.summaryTitle}</h2>
          <p className="simple-cv-summary">{cv.summary}</p>
        </section>

        <section>
          <h2>{cv.experienceTitle}</h2>
          {cv.jobs.map((job) => (
            <JobBlock key={`${job.company}-${job.period}`} job={job} />
          ))}
        </section>

        <section>
          <h2>{cv.consultingTitle}</h2>
          <p className="simple-cv-summary">{cv.consultingIntro}</p>
          {cv.consulting.map((item) => (
            <div key={item.name} className="simple-cv-job">
              <div className="simple-cv-job-head">
                <p className="simple-cv-job-title">{item.name}</p>
                <p className="simple-cv-job-period">{item.duration}</p>
              </div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>{cv.skillsTitle}</h2>
          {cv.skills.map((skill) => (
            <p key={skill.label} className="simple-cv-skill">
              <strong>{skill.label}:</strong> {skill.value}
            </p>
          ))}
        </section>

        <section>
          <h2>{cv.certificationsTitle}</h2>
          <p className="simple-cv-cert-name">{cv.certificationName}</p>
          <p className="simple-cv-cert-meta">{cv.certificationMeta}</p>
        </section>

        <section>
          <h2>{cv.educationTitle}</h2>
          {cv.education.map((item) => (
            <div key={`${item.degree}-${item.year}`} className="simple-cv-edu">
              <div className="simple-cv-job-head">
                <p className="simple-cv-edu-degree">{item.degree}</p>
                <p className="simple-cv-job-period">{item.year}</p>
              </div>
              <p>{item.school}</p>
            </div>
          ))}
        </section>
      </article>

      <div className="simple-cv-footer">
        <button type="button" className="simple-cv-back" onClick={openFullView}>
          {t.simpleView.back}
        </button>
      </div>
    </div>
  );
};

const JobBlock: React.FC<{ job: { title: string; company: string; period: string; bullets: string[] } }> = ({
  job,
}) => (
  <div className="simple-cv-job">
    <div className="simple-cv-job-head">
      <p className="simple-cv-job-title">
        {job.title} | {job.company}
      </p>
      <p className="simple-cv-job-period">{job.period}</p>
    </div>
    <ul>
      {job.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  </div>
);

export default SimpleCv;
