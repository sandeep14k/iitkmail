import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSync, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "./maillistnav.css"

function Navbarmaillist() {
  const handleSelect = () => {
    console.log("Select clicked");
    // Add logic for select action
  };

  const handleOption = () => {
    console.log("Option clicked");
    // Add logic for option action
  };

  const handleRefresh = () => {
    console.log("Refresh clicked");
    // Add logic for refresh action
  };

  return (
    <div className="maillistnav">
      <div className="nav_item_container">
        <div className="nav-item" onClick={handleSelect}>
            <FontAwesomeIcon icon={faArrowUp} className='custom-arrow-icon'/>
            <div className="nav-item-text">Select</div>
        </div>
        <div className="nav-item" onClick={handleOption}>
            <FontAwesomeIcon icon={faCog} />
            <div className="nav-item-text">Options</div>
        </div>
        <div className="nav-item" onClick={handleRefresh}>
            <FontAwesomeIcon icon={faSync} />
            <div className="nav-item-text">Refresh</div>
        </div>
        </div>
    </div>
  );
}

export default Navbarmaillist;
