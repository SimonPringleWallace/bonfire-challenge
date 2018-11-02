import React from 'react';
import {boxData} from './box-data.js'
import Box from './box.js'
import './box.css'

const BoxContainer = ({filter}) => {

  // generate boxes on the web page based off of the data in the array above
  const boxFilter = () => {
    if (filter.showAll){
      return boxData.map(box => (
        <Box
          key={box.number}
          number = {box.number}
          subtext = {box.subtext}
        />
      ))
    }else if (filter.showEven){
        const evenBoxes = boxData.filter(box => box.number % 2 === 0)
        return evenBoxes.map(evenBox => (
        <Box
          key={evenBox.number}
          number = {evenBox.number}
          subtext = {evenBox.subtext}
        />
      ))
    }else if (filter.showOdd){
        const oddBoxes = boxData.filter(box => box.number % 2 > 0)
        return oddBoxes.map(oddBox => (
        <Box
          key={oddBox.number}
          number = {oddBox.number}
          subtext = {oddBox.subtext}
        />
      ))
  }
}

    return (
      <div className='lower-half'>
      <div className='box-container'>
         {boxFilter()}
      </div>
    </div>
  )
}


export default BoxContainer;
