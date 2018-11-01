import React, { Component } from 'react';

class FilterButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      isClicked: false
    }
  }
  clickButton = () => {
    this.setState({isClicked: !this.state.isClicked})
    console.log('was clicked')
  }
  render() {

    return (
      <React.Fragment>
        <button
          className={`filter-button${this.state.isClicked? '-clicked' : ''}`}
          onClick={this.clickButton}
          >{this.props.value}
          </button>
      </React.Fragment>
    )
  }
}

export default FilterButton;
