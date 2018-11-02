import React, { Component } from 'react';

class BoxContainer extends Component {

  render() {

    return (
      <React.Fragment>
        <div className='box'>
          <h3>Box Number {this.props.number}</h3>
          <p className='card-description'>useless subtext</p>
        </div>
      </React.Fragment>
    )
  }
}

export default BoxContainer;
