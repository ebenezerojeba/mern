import React from 'react';
import { motion } from 'framer-motion';
import './Introduction.css';
import vid from '../../../public/vid.mp4'

const Introduction = () => {
  return (
    <div className='intro'>
    <motion.section 
      className="introduction"
      initial={{ opacity: 0 }}
      animate={{ opacity: 3 }}
      transition={{ duration: 3 }}
    >
      <h2>Palatial Events</h2>
      <div className="border"></div>
      <p>
        At Palatial Events, we pride ourselves on creating unforgettable experiences. Whether you're planning a wedding, corporate event, or private party, our team of expert planners is here to make your vision come to life. Based in Lagos, Nigeria, we bring a touch of elegance and professionalism to every event we handle.
      </p>
      <p>
        Our mission is to ensure your event is not only successful but also memorable. We take care of every detail, so you can focus on enjoying your special occasion. From venue selection to décor, entertainment, and logistics, we handle it all with precision and care.
      </p>
    </motion.section>
    <a href="#service-details"><button className='btn'> Learn more</button></a>

    <div className="video">
     <video 
     playsInline
     autoPlay
     loop
     muted
     opacity={0}
    
     src={vid}>

     </video>
     </div>
     </div>
  );
};

export default Introduction;
