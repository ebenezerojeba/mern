import React from 'react'
import './EventPlan.css'
import About from '../../components/About/About';
import Ceo from '../../components/Ceo/Ceo';
import CustomerReview from '../../components/CustomerReview/CustomerReview';
import EventPlanning from '../../components/EventPlanning/EventPlanning';
import Introduction from '../../components/Introduction/Introduction';
import TypesOfEvents from '../../components/TypesOfEvent/TypesOfEvent';
import ServiceDetails from '../../components/ServiceDetails/ServiceDetails';
// import VismeButton from '../../components/VisMe/VisMeButton';
import VisMe from '../../components/VisMe/VisMe';

const EventPlan = () => {
  return (
    <div id='eventplan' className='eventplan'>
      <Introduction />
      <TypesOfEvents />
      <ServiceDetails />
      <CustomerReview />
      <Ceo />
      <EventPlanning />
      <VisMe /> 
      
    </div>
  )
}

export default EventPlan
