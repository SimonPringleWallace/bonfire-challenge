import React from 'react';

const Box = ({title, subtext}) => {

    return (
      <React.Fragment>
        <div className='box'>
          <div className='box-content'>
          <h3>{title}</h3>
          <p className='card-description'>{subtext}</p>
            <button className='case-study'> view the case study</button>
         </div>
        </div>
      </React.Fragment>
    )
}

export default Box;
