import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white p-10">
      <h2 className="text-4xl text-center mb-10">Contact</h2>
      <div className="flex flex-col lg:flex-row">
        {/* Formulario de Contacto */}
        <div className="flex-1 lg:mr-5">
          <h3 className="text-2xl mb-5 text-green-500">Say Hello</h3>
          <form className="space-y-4 text-lg">
            <input
              className="w-full p-2 bg-gray-700 text-white text-lg"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="w-full p-2 bg-gray-700 text-white text-lg"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="w-full p-2 bg-gray-700 text-white text-lg"
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              className="w-full p-2 bg-gray-700 text-white text-lg"
              placeholder="Your message"
              rows={5}
              required
            />
            <button className="bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400 text-lg">
              Send Message
            </button>
          </form>
        </div>

        {/* Información de Contacto */}
        <div className="flex-1 lg:ml-5 mt-10 lg:mt-0 text-lg ">
          <h3 className="text-2xl mb-5">Contact Info</h3>
          <p className="mb-5">You can contact me via email or WhatsApp from Monday to Friday, 10am to 4pm.</p>
          <p className="mb-2 flex items-center text-lg">
            <FaEnvelope className="mr-2 text-white hover:text-green-500 text-2xl" />
            <strong>Email:</strong> <span className="ml-2">felipe95jcl@gmail.com</span>
          </p>
          <p className="mb-2 flex items-center text-lg">
            <FaPhone className="mr-2 text-white hover:text-green-500 text-2xl" />
            <strong>Phone:</strong> <span className="ml-2">+52 951 114 9349</span>
          </p>
          <p className="mb-5 flex items-center text-lg">
            <FaMapMarkerAlt className="mr-2 text-white hover:text-green-500 text-2xl" />
            <strong>Address:</strong> <span className="ml-2">Oaxaca de Juarez, Oaxaca, Mexico</span>
          </p>
          <p className="mb-5">Visit my social profile and get connected:</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/felipe-canseco-lopez/" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-600 flex items-center text-lg">
                <FaLinkedin className="mr-2 text-xl" /> 
              </button>
            </a>
            <a href="https://wa.me/529511149349" target="_blank" rel="noopener noreferrer">
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

