import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className='logo-container'><img alt='logo' src={require('./images/LOGODESIGN.png')}/></div>
        <ul className='nav-options'>
          <li><a className='home-button' href='#'>Home</a> </li>
          <li><a href='#'>Away</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
