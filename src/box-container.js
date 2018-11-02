import React, { Component } from 'react';
import {boxData} from './box-data.js'
import Box from './box.js'
import './box.css'

class BoxContainer extends Component {

  // generate boxes on the web page based off of the data in the array above
  boxCreator = () => (
   boxData.map(box => (
    <Box
      number = {box.number}
      subtext = {box.subtext}
    />
  ))
)


  render() {

    return (
      <div className='lower-half'>
      <div className='box-container'>
         {this.boxCreator()}
      </div>
    </div>
    )
  }
}

export default BoxContainer;
