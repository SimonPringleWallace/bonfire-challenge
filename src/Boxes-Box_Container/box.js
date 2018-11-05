import React from 'react';

const Box = ({title, subtext}) => {

    return (
      <React.Fragment>
        <div className='box'>
          <div className='box-content'>
          <h3>{title}</h3>
          <p className='card-description'>{subtext}</p>
          <a href='#'>
            <button className='case-study'> view the case study</button>
          </a>
         </div>
        </div>
      </React.Fragment>
    )
}

export default Box;
