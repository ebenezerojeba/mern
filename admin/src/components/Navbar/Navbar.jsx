import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets';
import pal from '../../assets/pall.png';
import ceo from '../../assets/ceo1.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={pal} alt="" />
        <div className="text">
          <h2>Admin Panel</h2>
        </div>
        <img className='profile' src={ceo} alt="" />
    </div>
    
  )
}

export default Navbar