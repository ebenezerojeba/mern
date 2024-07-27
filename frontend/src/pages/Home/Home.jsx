import React from 'react'
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import About from '../../components/About/About';
// import Ceo from '../../components/Ceo/Ceo';
// import CustomerReview from '../../components/CustomerReview/CustomerReview';
// import EventPlanning from '../../components/EventPlanning/EventPlanning';
// 

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div id='home'>
      <Header/> 
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <About />
      {/* <Ceo /> */}
      {/* <EventPlanning /> */}
      {/* <CustomerReview /> */}
    </div>
  )
}

export default Home
