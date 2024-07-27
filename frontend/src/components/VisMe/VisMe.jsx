import React from 'react';
import { motion } from 'framer-motion';
import './VisMe.css';

const VisMe = () => {
  return (
    <motion.div 
      className="visme-form-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Tell Us About Your Event</h2>
      <div className="border"></div>
      <iframe 
        src="https://forms.visme.co/formsPlayer/31n8o8n1-untitled-project" 
        title="Visme Form" 
        className="visme-form-iframe"
        frameBorder="3"
      ></iframe>
    </motion.div>
  );
};

export default VisMe;
