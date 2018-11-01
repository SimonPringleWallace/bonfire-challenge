import React from 'react';
import './header.css';

export const Header = () => (
  <div className="header">
    <div className='logo-container'><img alt='logo' src={require('./images/LOGODESIGN.png')}/></div>
    <ul className='nav-options'>
      <li><a className='home-button' href='www.google.com'>Home</a> </li>
      <li><a href='www.google.com'>Away</a></li>
    </ul>
  </div>
)
