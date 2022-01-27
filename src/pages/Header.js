import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from './logo.svg'
function Header() {
  return <div className='headerMain'>
    <div className='logoContainer'>
      <a href='/home'><img id='logoIcon' src={logo} alt="loading" /></a>
    </div>
    <div className='nav-links'>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/offers">Offers</Link></li>
      <li><Link to="/help">Help</Link></li>
      <li><Link to="/Signin">Sign In</Link></li>
      <li><Link to="/cart">Cart</Link></li>
    </div>
    <div className='menuPopUp'>
      <a href="#"><img id='menuIcon' src="https://img.icons8.com/doodle/48/000000/menu.png" alt='loading' /></a>
    </div>
  </div>;
}

export default Header;
