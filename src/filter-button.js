import React, { Component } from 'react';

class FilterButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      isClicked: false
    }
  }
  render() {

    return (
      <React.Fragment>
        <button className='filter-button'>{this.props.value}</button>
      </React.Fragment>
    )
  }
}

export default FilterButton;
