import React from 'react';
import {boxData} from './box-data.js'
import Box from './box.js'
import './box.css'

const BoxContainer = ({filter}) => {
  // TODO: add animation to make the filtering process less jarring

  // generate boxes on the web page based off of the data in box-data.js
  const boxFilter = () => {
    if (filter.showAll){
      return boxData.map(box => (
        <Box
          key={box.id}
          title = {box.title}
          subtext = {box.subtext}
        />
      ))
    }else if (filter.showEven){
        const evenBoxes = boxData.filter(box => box.id % 2 === 0)
        return evenBoxes.map(evenBox => (
        <Box
          key={evenBox.id}
          title = {evenBox.title}
          subtext = {evenBox.subtext}
        />
      ))
    }else if (filter.showOdd){
        const oddBoxes = boxData.filter(box => box.id % 2 > 0)
        return oddBoxes.map(oddBox => (
        <Box
          key={oddBox.id}
          title = {oddBox.title}
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
