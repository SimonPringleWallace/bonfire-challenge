import React, { Component } from 'react';
import Box from './box.js'
import './box.css'

class BoxContainer extends Component {

  render() {

    return (
      <div className='lower-half'>
      <div className='box-container'>
        <Box number='1'></Box>
        <Box number='2'></Box>
        <Box number='3'></Box>
        <Box number='4'></Box>
        <Box number='5'></Box>
        <Box number='6'></Box>
      </div>
    </div>
    )
  }
}

export default BoxContainer;
