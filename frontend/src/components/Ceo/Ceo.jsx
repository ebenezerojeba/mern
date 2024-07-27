import React from 'react'
import './Ceo.css';
import { assets } from '../../assets/assets';
import ceo from '../../assets/Ceo2.jpg'

const Ceo = () => {
  return (
    <div className='customer'>
        <h2></h2>
      <div className="slide-container swiper">
    <div className="slide-content">
        <div className="card-wrapper swiper-wrapper">
            <div className="card swiper-slide">
                <div className="image-content">
                    <span className="overlay"></span>

                    <div className="card-image">
                        <img src={ceo} alt="" />
                    </div>
                </div>
                <div className="card-content">
                    <h2 className="name">Kemi Kareemat, CEO</h2>
                   <p className="description">Kemi's journey into the world of events and catering began during her time at university, where she discovered her passion for bringing people together through memorable celebrations. Drawing from her educational background in Mass Communication, Kemi brings a unique perspective to the art of crafting unforgettable experiences. Her communication skills, honed through years of study and practical experience, enable her to effectively convey her vision, inspire her team, and connect with clients on a deeper level. In addition to her role as CEO, Kemi remains actively involved in the creative process, collaborating closely with her team to conceptualize and execute awe-inspiring events that leave a lasting impression. Kemi Kareemat continues to lead Palatial Events and Catering Services to new heights, shaping the future of the industry one extraordinary event at a time.</p>

                   
                  <a href="https://calendly.com/ebenezer-ojeba"> <button className="button">Schedule a consult</button></a>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Ceo 
