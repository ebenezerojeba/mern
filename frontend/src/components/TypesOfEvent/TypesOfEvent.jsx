import React from 'react';
import { motion } from 'framer-motion';
import './TypesOfEvent.css'
import wedding from '../../assets/wedding-icon.png'
import { assets } from '../../assets/assets';
import activity from '../../assets/activity.png';
import privat from '../../assets/private.png'
import tick from '../../assets/special.png';

const TypesOfEvents = () => {
  return (
    <div className="types">

  
    <motion.section 
      className="types-of-events"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Types of Events We Plan</h2>
      <div className="event-types">
        <div className="event-type">
            <div className="img">
                <img src={wedding} alt="" />
            </div>
          <h4>Weddings</h4>
          <p>From intimate ceremonies to grand celebrations, we create unforgettable weddings tailored to your style.</p>
        </div>
        <div className="event-type">
        <div className="img">
            <img src={activity} alt="" />
        </div>
          <h4>Corporate Events</h4>
          <p>We plan corporate events that impress, from conferences to team-building activities and company parties.</p>
        </div>
        <div className="event-type">
        <div className="img">
            <img src={privat} alt="" />
        </div>
          <h4>Private Parties</h4>
          <p>Celebrate birthdays, anniversaries, and other special occasions with a perfectly planned party.</p>
        </div>
        <div className="event-type">
        <div className="img">
            <img src={tick} alt="" />
         </div>
          <h4>Special Events</h4>
          <p>Whether it's a charity gala or a community event, we bring your special event to life with style.</p>
        </div>
      </div>
        
 <a href="https://calendly.com/ebenezer-ojeba"> <button className="btn">Schedule a consult</button></a>
    </motion.section>
    </div>
  );
};

export default TypesOfEvents;
