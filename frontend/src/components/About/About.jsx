import React from 'react'
import './About.css';
// import { assets } from '../../assets/assets';
import about from '../../assets/about2_background.jpg';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className='about' id='about'>
        <h3 className="heading">About us</h3>
        <div className="border"></div>
    <div className="row">
    <div className="img">
        <img src={about} alt="" />
    </div>
    
    <div className="content">
        <h2>Crafting Unforgettable Events and Culinary Delights with Palatial Elegance</h2>
        <p>Palatial Events and Catering Services isn't just about orchestrating unforgettable events; we're also your go-to destination for premium culinary delights and exquisite dining essentials.</p> 
      <span>At Palatial Events and Catering Services, we go beyond simply providing food and beverages. We collaborate closely with our clients to understand their vision, preferences, and budget, ensuring that every aspect of their event reflects their unique style and personality. From venue selection and décor to entertainment and logistics, we handle every detail with professionalism and precision.</span>
    
      </div>
      </div>
      <button className='btn' onClick={()=>navigate("/event")}>Learn more</button>
      </div>
      
  )
}

export default About
