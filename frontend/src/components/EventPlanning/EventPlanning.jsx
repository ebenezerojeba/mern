import React from 'react'
import './EventPlanning.css'
import { assets } from '../../assets/assets'
import plan from '../../assets/plan.jpg'
import { useNavigate } from 'react-router-dom'

const EventPlanning = () => {
  const navigate = useNavigate();
  return (
    <div className='app-download' id='app-download'>
      <h2>Planning Process</h2>
      <div className="border"></div>
      {/* <div className="app-download-platforms">
        <img src={plan} alt="" />
        <div className="content">
          <p>Ready to start planning your dream event? Schedule a complimentary consultation with our team to discuss your vision and learn how we can bring it to life. Contact us today to take the first step towards creating an unforgettable experience with Palatial Events and Catering Services.</p>
          <button onClick={()=>navigate('/event')}>Click here</button>
        </div>
      </div> */}
       <ol>
        <li>
          <h3>Consultation</h3>
          <p>We begin with a detailed consultation to understand your vision, preferences, and requirements.</p>
        </li>
        <li>
          <h3>Planning</h3>
          <p>Our team creates a customized plan, including venue selection, theme development, and vendor coordination.</p>
        </li>
        <li>
          <h3>Execution</h3>
          <p>On the day of the event, we manage all aspects to ensure everything runs smoothly and to your satisfaction.</p>
        </li>
      </ol>
  
    </div>
  )
}

export default EventPlanning;
