import React from 'react';

const FilterButton =({filterBoxes, selectedButton, title}) => {

// filterActions is responsible for triggering filterBoxes, declared in app.js,
// which is responsible for changing which boxes acutally appear on the screen
// and controlling the toggle effect on the buttons themselves.
const filterActions = (title) => {
  filterBoxes(title)
  // toggleButtons(value)
}

    return (
      <React.Fragment>
        <button
          className={`filter-button${selectedButton}`}
          onClick={filterActions.bind(this,title)}
          >{title}
          </button>
      </React.Fragment>
    )
}

export default FilterButton;
