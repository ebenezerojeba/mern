// import React from 'react'
// import './Event.css';
// 
// const Event = () => {
  // const visMe = `
  // <div class="visme_d" data-title="Untitled Project" data-url="31n8o8n1-untitled-project?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="80387"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>`;
// 
  // return (
    // <>
    {/* </> */}
  //  {/* <section className="event">
      // <form action="">
        // <h2>Event Form</h2>
        // <div className="input-box">
          // <label htmlFor="">First Name</label>
          // <input type="text" className='field' placeholder='Enter your first name' required/>
        // </div>
        // <div className="input-box">
          // <label htmlFor="">Last Name</label>
          // <input type="text" className='field' placeholder='Enter your last name' required/>
        // </div>
        // <div className="input-box">
            // <label htmlFor="">Email</label>
            // <input type="email" className='field' placeholder='Enter your name' required/>
          // </div>
          // <div className="input-box">
            // <label htmlFor="">Date of Event</label>
            // <input type="date" className='field' placeholder='Enter your event date' required/>
          // </div>
          // <div className="input-box">
            // <label htmlFor="">Type of Event</label>
            // <input type="text" className='field' placeholder='Event' required/>
          // </div>
          // <div className="input-box">
            // <label htmlFor="">Additional Note</label>
            // <textarea name="" id="" className='field mess' placeholder='Enter your message' required></textarea>
          // </div>
          // 
          // <button type='submit'>Submit</button>
              // </form>
    // </section> */}
  // )
// }
// 
// export default Event;
// 
import React from 'react'
import hero from "../../assets/hero-back.jpg";

const Event = () => {
  return (
    <div className='hero-section'>
      <div className="content">
      <h2>Making your dream events a reality</h2>
      <button>Contact us</button>

      </div>
      
      <div className="img">
      <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Event


