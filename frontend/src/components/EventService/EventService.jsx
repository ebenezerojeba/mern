import React from 'react'
import './EventService.css'

const EventService = () => {
  return (
    <div className='event-services'>
       <h1>Our Services</h1>
      <section className="service-list">
        <h2>Wedding Planning</h2>
        <p>We offer comprehensive wedding planning services to make your special day unforgettable.</p>
        <h2>Corporate Events</h2>
        <p>We plan and manage corporate events that leave a lasting impression.</p>
        <h2>Birthday Parties</h2>
        <p>From kids' parties to milestone birthdays, we handle it all.</p>
        {/* Add more services as needed */}
      </section>
      <section className="service-packages">
        <h2>Our Packages</h2>
        <p>We offer various packages to suit different needs and budgets.</p>
      </section>
    </div>
  )
}

export default EventService;