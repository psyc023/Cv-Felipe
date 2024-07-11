// src/components/FloatingButton.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './css/FloatingButton.css';

const FloatingButton: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.style.backgroundColor = isDarkMode ? 'white' : 'black';
    };

    return (
        <motion.button
            className={`floating-button ${isDarkMode ? 'dark' : 'light'}`}
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isDarkMode ? 180 : 0 }}
        >
            {isDarkMode ? '🌙' : '☀️'}
        </motion.button>
    );
};

export default FloatingButton;
