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
  }
  filterBoxes(value){
    this.props.filterBoxes(value)
  }
  render() {

    return (
      <React.Fragment>
        <button
          className={`filter-button${this.state.isClicked? '-clicked' : ''}`}
          onClick={this.filterBoxes.bind(this, this.props.value)}
          >{this.props.value}
          </button>
      </React.Fragment>
    )
  }
}

export default FilterButton;
