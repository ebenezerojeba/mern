import React from 'react';
import { motion } from 'framer-motion';
import './ServiceDetails.css';
import back from "../../assets/back2.avif"
import back4 from "../../assets/back4.avif"
import back5 from "../../assets/back5.avif"
import vendor from '../../assets/about_background.jpg'
import entertainment from "../../assets/private parties.avif"
import photography from '../../assets/photo.png'




const ServiceDetails = () => {
  return (
    <motion.section 
      className="service-details"
      id='service-details'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Service Details</h2>
      <div className="border"></div>
      <div className="services">
        <div className="service">
          <h3>Venue Selection</h3>
          <div className="img">
            <img src={back} alt="" />
          </div>
          <p>We help you find and secure the perfect venue for your event, tailored to your style and budget.</p>
        </div>
        <div className="service">
          <h3>Theme and Décor</h3>
          <div className="img">
            <img src={back4} alt="" />
          </div>
          <p>Our creative team develops unique themes and decorations to make your event stand out.</p>
        </div>
        <div className="service">
          <h3>Entertainment</h3>
          <div className="img">
            <img src={entertainment} alt="" />
          </div>
          <p>We arrange top-notch entertainment options, from DJs to live bands and performers.</p>
        </div>
        <div className="service">
          <h3>Logistics</h3>
          <div className="img">
            <img src={back5} alt="" />
        </div>
          <p>We manage all logistics, including transportation, accommodations, and event schedules.</p>
        </div>
        <div className="service">
          <h3>Vendor Management</h3>
          <div className="img">
            <img src={photography} alt="" />
          </div>
          <p>We coordinate with vendors like florists, photographers, and caterers to ensure seamless service.</p>
        </div>
      </div>
      <button className="btn"> <a href="#footer">Contact us</a></button>
    </motion.section>
  );
};

export default ServiceDetails;
