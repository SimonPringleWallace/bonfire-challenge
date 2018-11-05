import React from 'react';
import './header.css';

// Component containing logo and menu options
export const Header = () => (
  <div className="header">
    <div className='logo-container'><img alt='logo' src={require('./images/LOGODESIGN.png')}/></div>
    <ul className='nav-options'>
      {/* additional menu options may be added here as list items */}
      <li><a className='home-button' href='#'>Home</a> </li>
      <li><a className='away-button' href='#'>Away</a></li>
    </ul>
  </div>
)
