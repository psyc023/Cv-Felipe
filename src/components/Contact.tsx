import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

const cardClass =
  'flex items-center gap-5 rounded-2xl border-2 border-accent bg-gray-900 px-6 py-6 transition-colors';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen text-white px-6 py-16 flex flex-col items-center">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">{t.contact.title}</h2>
      <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-accent text-center">
        {t.contact.info}
      </h3>
      <p className="text-xl md:text-2xl text-gray-300 text-center max-w-2xl mb-12 leading-relaxed">
        {t.contact.hours}
      </p>

      <div className="w-full max-w-2xl space-y-5">
        <a
          href="mailto:feli.canseco.95@gmail.com"
          className={`${cardClass} hover:bg-gray-800`}
          style={{ boxShadow: '0 0 28px color-mix(in srgb, var(--accent-color) 30%, transparent)' }}
        >
          <FaEnvelope className="text-accent shrink-0 text-4xl" />
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-400">{t.contact.emailLabel}</p>
            <p className="text-xl md:text-2xl font-semibold break-all">feli.canseco.95@gmail.com</p>
          </div>
        </a>

        <a
          href="https://wa.me/529516378642"
          target="_blank"
          rel="noopener noreferrer"
          className={`${cardClass} hover:bg-gray-800`}
          style={{ boxShadow: '0 0 28px color-mix(in srgb, var(--accent-color) 30%, transparent)' }}
        >
          <FaPhone className="text-accent shrink-0 text-4xl" />
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-400">{t.contact.phoneLabel}</p>
            <p className="text-xl md:text-2xl font-semibold">+52 951 637 8642</p>
          </div>
        </a>

        <div
          className={cardClass}
          style={{ boxShadow: '0 0 28px color-mix(in srgb, var(--accent-color) 30%, transparent)' }}
        >
          <FaMapMarkerAlt className="text-accent shrink-0 text-4xl" />
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-400">{t.contact.addressLabel}</p>
            <p className="text-xl md:text-2xl font-semibold">{t.contact.address}</p>
          </div>
        </div>
      </div>

      <p className="mt-12 mb-5 text-lg md:text-xl text-center text-gray-300">{t.contact.social}</p>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/felipe-canseco-lopez/" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-700 text-white px-5 py-3 rounded-full hover:bg-blue-600 flex items-center text-2xl">
            <FaLinkedin />
          </button>
        </a>
        <a href="https://wa.me/529516378642" target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 text-white px-5 py-3 rounded-full hover:bg-green-400 flex items-center text-2xl">
            <FaWhatsapp />
          </button>
        </a>
        <a href="https://github.com/psyc023" target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-800 text-white px-5 py-3 rounded-full hover:bg-gray-700 flex items-center text-2xl">
            <FaGithub />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
