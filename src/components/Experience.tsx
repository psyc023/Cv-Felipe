import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { ExperienceItem, ExperienceProject } from '../i18n/content';

const ACCENT = 'var(--accent-color)';

const Experience: React.FC = () => {
  const { t, content, lang } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const experienceData = content.experience;

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const splitPeriod = (period: string) => {
    // soporta: "07/2024 - Currently" y también "07/2024 – Currently"
    const parts = period.split('–').length > 1 ? period.split('–') : period.split('-');
    const start = (parts[0] ?? '').trim();
    const end = (parts[1] ?? '').trim();
    return { start, end };
  };

  const parseMonthYear = (value: string): { month: number; year: number } | null => {
    if (/currently|actualmente|現在/i.test(value)) {
      const now = new Date();
      return { month: now.getMonth() + 1, year: now.getFullYear() };
    }

    const match = value.match(/^(\d{1,2})\/(\d{4})$/);
    if (!match) return null;
    return { month: Number(match[1]), year: Number(match[2]) };
  };

  const formatTenure = (start: string, end: string): string | null => {
    const from = parseMonthYear(start);
    const to = parseMonthYear(end);
    if (!from || !to) return null;

    const months = (to.year - from.year) * 12 + (to.month - from.month);
    if (months < 0) return null;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    const parts: string[] = [];

    const formatCount = (n: number, singular: string, plural: string) => {
      if (n === 1) return singular;
      return lang === 'ja' ? `${n}${plural}` : `${n} ${plural}`;
    };

    if (years > 0) parts.push(formatCount(years, t.common.year, t.common.years));
    if (remainingMonths > 0) {
      parts.push(formatCount(remainingMonths, t.common.month, t.common.months));
    }

    return parts.length > 0 ? parts.join(lang === 'ja' ? '' : ' ') : t.common.month;
  };

  const renderBullets = (text: string) =>
    text
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .map((line, i) => (
        <p key={i} className="leading-relaxed">
          {line}
        </p>
      ));

  const renderProjects = (projects: ExperienceProject[]) => (
    <div className="text-left space-y-4">
      {projects.map((project) => (
        <div
          key={project.name}
          className="border border-white/20 rounded-lg p-4 sm:p-5"
        >
          <p className="text-accent font-bold text-lg">{project.name}</p>
          <div className="space-y-2 mt-3">{renderBullets(project.description)}</div>
        </div>
      ))}
    </div>
  );

  const consultantItems = experienceData
    .map((exp, index) => ({ exp, index }))
    .filter(({ exp }) => exp.variant === 'consultant');
  const employmentItems = experienceData
    .map((exp, index) => ({ exp, index }))
    .filter(({ exp }) => exp.variant !== 'consultant');

  const renderExperienceCard = (exp: ExperienceItem, index: number) => {
    const isOpen = expandedIndex === index;
    const { start, end } = splitPeriod(exp.period ?? '');
    const mobilePeriod = exp.periodLabel ?? exp.period ?? '';
    const isConsultant = exp.variant === 'consultant';
    const tenure = end ? formatTenure(start, end) : null;
    const cardBorderClass = isConsultant
      ? 'border border-sky-400 rounded-xl'
      : 'border border-white/20 rounded-xl';

    return (
      <motion.div key={index} whileHover={{ color: ACCENT }}>
        {/* ✅ Mobile */}
        <div className="sm:hidden">
          <div className={`${cardBorderClass} p-5`}>
            <p className="text-accent font-bold text-center">{exp.company}</p>
            <p className="text-center font-bold text-lg mt-1">{exp.title}</p>
            {exp.subtitle && (
              <p className="text-center text-xs text-gray-400 mt-1">{exp.subtitle}</p>
            )}
            {exp.projects && exp.projects.length > 0 && (
              <div className="mt-2 space-y-0.5">
                {exp.projects.map((project) => (
                  <p key={project.name} className="text-center text-sm text-gray-300">
                    {project.name}
                  </p>
                ))}
              </div>
            )}
            <p className="text-center text-sm text-gray-300 mt-1">{mobilePeriod}</p>
            {tenure && (
              <p className="text-center text-xs text-gray-400 mt-0.5">{tenure}</p>
            )}

            <motion.button
              onClick={() => toggleExpand(index)}
              className="text-orange-500 bg-transparent border-none cursor-pointer mt-4 mx-auto flex items-center"
              whileHover={{ color: ACCENT }}
            >
              {isOpen ? t.common.showLess : t.common.showMore}
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden mt-4"
                >
                  {exp.projects && exp.projects.length > 0
                    ? renderProjects(exp.projects)
                    : (
                      <div className="space-y-2 text-left">
                        {exp.description ? renderBullets(exp.description) : null}
                      </div>
                    )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ✅ Desktop Timeline + Card */}
        <div className="hidden sm:grid grid-cols-[160px_32px_1fr] gap-x-6 items-start">
          {/* Left: Period */}
          <div className="text-right leading-tight text-white pt-3">
            <p className="text-lg">{start}</p>
            {end ? <p className="text-lg">{end}</p> : null}
            {tenure && (
              <p className="text-xs text-gray-400 mt-1">{tenure}</p>
            )}
          </div>

          {/* Middle: Line */}
          <div className="flex justify-center pt-3">
            <div className="w-[3px] bg-white h-full min-h-[70px]" />
          </div>

          {/* Right: Card */}
          <motion.div
            className={`${cardBorderClass} p-6 bg-black`}
            whileHover={{ borderColor: isConsultant ? '#38bdf8' : ACCENT }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-center">
              <p className="text-accent font-bold text-xl">{exp.company}</p>
              <p className="font-bold text-xl mt-1">{exp.title}</p>
              {exp.subtitle && (
                <p className="text-xs text-gray-400 mt-1">{exp.subtitle}</p>
              )}
              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-2 space-y-0.5">
                  {exp.projects.map((project) => (
                    <p key={project.name} className="text-sm text-gray-300">
                      {project.name}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <motion.button
              onClick={() => toggleExpand(index)}
              className="text-orange-500 bg-transparent border-none cursor-pointer mt-4 mx-auto flex items-center"
              whileHover={{ color: ACCENT }}
            >
              {isOpen ? t.common.showLess : t.common.showMore}
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 12.586z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden mt-5"
                >
                  {exp.projects && exp.projects.length > 0
                    ? renderProjects(exp.projects)
                    : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {exp.description ? renderBullets(exp.description) : null}
                      </div>
                    )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-black text-white flex justify-center py-10 px-6">
      <div className="w-full max-w-4xl mx-auto space-y-14">
        <div>
          <h5 className="text-accent text-center text-2xl mb-8 font-bold">
            {t.experience.consultantTitle}
          </h5>
          <div className="space-y-8">
            {consultantItems.map(({ exp, index }) => renderExperienceCard(exp, index))}
          </div>
        </div>

        <div>
          <h5 className="text-accent text-center text-2xl mb-8 font-bold">
            {t.experience.employmentTitle}
          </h5>
          <div className="space-y-8">
            {employmentItems.map(({ exp, index }) => renderExperienceCard(exp, index))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
