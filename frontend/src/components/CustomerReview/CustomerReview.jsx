import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './CustomerReview.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { assets } from '../../assets/assets';
import Ceo from '../../assets/Ceo.jpg';
import Ceo2 from '../../assets/Ceo2.jpg';
import star from '../../assets/star_boxicon.png'
import star_half from '../../assets/star_boxicon_half.png'
import review1 from '../../assets/review1.jpg';
import review2 from '../../assets/review2.jpg';
import review3 from '../../assets/review3.jpg';
import review4 from '../../assets/review4.jpg';
import review5 from '../../assets/rev.jpg';
import review6 from '../../assets/review6.jpg';
import review7 from '../../assets/Ceo.jpg';

export default function CustomerReview() {
  return (
    
    <div className="testimonials">
    
        <div className="inner">
            <h1>Testimonials</h1>
            <div className="border"></div>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay]}>
            <div className="row">
      <SwiperSlide>
      <div className="col">
          <div className="testimonial">
              <img src={review1} alt="" />
              <div className="name">Abimbola Oshodi</div>
              <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star_half} alt="" />
              </div>
              <p>Overall, Palatial Events and Catering Services exceeded our expectations and helped us create memories that will last a lifetime. We are so grateful for their professionalism, expertise, and dedication to making our engagement party truly special</p>
          </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="col">
          <div className="testimonial">
              <img src={review2} alt="" />
              <div className="name">Alhaja Ganiyat</div>
              <div className="star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_half} alt="" />
                    </div>
              <p>The service was impeccable, with the staff going above and beyond to ensure that all of our guests were well taken care of.</p>
          </div>
      </div>
      </SwiperSlide>

      <SwiperSlide>
<div className="col">
    <div className="testimonial">
        <img src={review3} alt="" />
        <div className="name">Mr & Mrs Durojaye</div>
        <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star_half} alt="" />
              </div>
        <p>We couldn't have asked for a better engagement party, thanks to Palatial Events and Catering Services!</p>
    </div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="col">
    <div className="testimonial">
        <img src={review4} alt="" />
        <div className="name">Mr & Mrs Oshodi</div>
        <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star_half} alt="" />
              </div>
        <p>From the moment we reached out to them, we knew we were in good hands.</p>
    </div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="col">
    <div className="testimonial">
        <img src={review5} alt="" />
        <div className="name">Kemisola Oguntade</div>
        <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star_half} alt="" />
              </div>
        <p>I recently hosted a dinner party and decided to serve the Basmati Fried Rice from Palatial Events and Catering Services. It was a huge hit with my guests! </p>
    </div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="col">
    <div className="testimonial">
        <img src={review6} alt="" />
        <div className="name">Alimat Surajudeen</div>
        <div className="star">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star_half} alt="" />
              </div>
        <p>The food was outstanding, with a variety of delicious options that catered to all dietary preferences. The service was impeccable, with the staff going above and beyond to ensure that all of our guests were well taken care of..</p>
    </div>
</div>
</SwiperSlide>
      <SwiperSlide>
      <div className="col">
          <div className="testimonial">
              <img src={review7} alt="" />
              <div className="name">Fatimah Funmilayo</div>
              <div className="star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_half} alt="" />
                    </div>

              <p> It truly felt like a taste of Nigeria right in my own home. Highly recommend!</p>
          </div>
      </div>
      </SwiperSlide>
  </div>
                </Swiper>
            
        </div>
         
    </div> 
    )
  }
    /*<>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay,]}
        className="mySwiper"
      >
     <SwiperSlide className='row'> 
        <div className="col">
            <div className="testimonial">
                <img src={} alt="" />
                <div className="name">Full</div>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </SwiperSlide>
        <SwiperSlide className='row'>
        <div className="col">
        <div className="testimonial">
       <img src={} alt="" />
       <div className="name">Full</div>
       <p>Lorem ipsum dolor sit amet.</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='r'>
        <div className="col">
    <div className="testimonial">
        <img src={} alt="" />
        <div className="name">Full</div>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide className='swiper'>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide> 
      </Swiper> 
    </> */


