import React, { Component } from 'react';

class BoxContainer extends Component {

  render() {

    return (
      <React.Fragment>
        <div className='box'>
          <div className='box-content'>
          <h3>{this.props.title}</h3>
          <p className='card-description'>{this.props.subtext}</p>
        <button className='case-study'> view the case study</button>
         </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BoxContainer;
