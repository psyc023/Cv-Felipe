import React, { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useLanguage } from '../i18n/LanguageContext';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const { t } = useLanguage();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_1x0hxgo', 'template_vl1stde', form.current!, 'Zd2oFkbjgcKcubXRC')
      .then((result) => {
          console.log(result.text);
          alert(t.contact.sent);
      }, (error) => {
          console.log(error.text);
          alert(t.contact.failed);
      });

    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <h2 className="text-4xl text-center mb-10">{t.contact.title}</h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 lg:mr-5">
          <h3 className="text-2xl mb-5 text-accent">{t.contact.sayHello}</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4 text-lg">
            <input
              className="w-full p-2 bg-gray-700 text-white text-lg"
              type="text"
              name="name"
              placeholder={t.contact.name}
              required
            />
            <input
              className="w-full p-2 bg-gray-700 text-white text-lg"
              type="email"
              name="email"
              placeholder={t.contact.email}
              required
            />
            <textarea
              className="w-full p-2 bg-gray-700 text-white text-lg"
              name="message"
              placeholder={t.contact.message}
              rows={5}
              required
            />
            <button type="submit" className="bg-accent text-black px-4 py-2 rounded-full hover:brightness-110 text-lg">
              {t.contact.send}
            </button>
          </form>
        </div>

        <div className="flex-1 lg:ml-5 mt-10 lg:mt-0 text-lg ">
          <h3 className="text-2xl mb-5">{t.contact.info}</h3>
          <p className="mb-5">{t.contact.hours}</p>
          <p className="mb-2 flex items-center text-lg">
            <FaEnvelope className="mr-2 text-white hover:text-accent text-2xl" />
            <strong>{t.contact.emailLabel}</strong> <span className="ml-2">feli.canseco.95@gmail.com</span>
          </p>
          <p className="mb-2 flex items-center text-lg">
            <FaPhone className="mr-2 text-white hover:text-accent text-2xl" />
            <strong>{t.contact.phoneLabel}</strong> <span className="ml-2">+52 951 637 8642</span>
          </p>
          <p className="mb-5 flex items-center text-lg">
            <FaMapMarkerAlt className="mr-2 text-white hover:text-accent text-2xl" />
            <strong>{t.contact.addressLabel}</strong> <span className="ml-2">{t.contact.address}</span>
          </p>
          <p className="mb-5">{t.contact.social}</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/felipe-canseco-lopez/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600 flex items-center text-lg">
                <FaLinkedin className="mr-2 text-xl" /> 
              </button>
            </a>
            <a href="https://wa.me/529516378642" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-400 flex items-center text-lg">
                <FaWhatsapp className="mr-2 text-xl" /> 
              </button>
            </a>
            <a href="https://github.com/psyc023" target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 flex items-center text-lg">
                <FaGithub className="mr-2 text-xl" /> 
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
