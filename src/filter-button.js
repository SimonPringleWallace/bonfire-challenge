import React from 'react';

const FilterButton =({filterBoxes, toggleButtons, selectedButton, value}) => {

// filterActions is responsible for triggering toggleButtons, declared in hero.js,
// which makes the button visually appear clicked, and filterBoxes, declared in app.js,
// which is responsible for changing which boxes acutally appear on the screen.
const filterActions = (value) => {
  filterBoxes(value)
  toggleButtons(value)
}

    return (
      <React.Fragment>
        <button
          className={`filter-button${selectedButton}`}
          onClick={filterActions.bind(this,value)}
          >{value}
          </button>
      </React.Fragment>
    )
}

export default FilterButton;
