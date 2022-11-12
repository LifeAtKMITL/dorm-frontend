import React, { useState } from 'react';
import './zoneButton.css';

const ZoneButton = () => {
  const [btnState, setBtnState] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  let toggleClassCheck = btnState ? ' active' : ' ';

  return <button className={`zone-btn${toggleClassCheck}`} onClick={handleClick}></button>;
};

export default ZoneButton;
