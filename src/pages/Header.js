import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { BiSearch } from 'react-icons/bi';
import { BiHelpCircle } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import logo from './logo.svg'
function Header(props) {
  return <div className='headerMain'>
    <div className='logoContainer'>
      <li><Link to="/home"><img id='logoIcon' src={logo} alt="loading" /></Link></li>
      <h2>{props.myname}</h2>
    </div>
    <div className='nav-links'>
      <li><BiSearch /><Link to="/search">Search</Link></li>
      <li><MdOutlineLocalOffer /><Link to="/offers">Offers</Link></li>
      <li><BiHelpCircle /><Link to="/help">Help</Link></li>
      <li><BsPerson /><Link to="/Signin">SignIn</Link></li>
      <li><AiOutlineShoppingCart /><Link to="/cart">Cart</Link></li>
    </div>
  </div>;
}

export default Header;
