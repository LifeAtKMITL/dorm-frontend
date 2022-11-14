import React, { useState } from 'react';
import './zoneButton.css';

const ZoneButton = (props: any) => {
  // Zone-Button
  const { dn } = props;
  const dormName = dn;
  const [btnState, setBtnState] = useState(false);
  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  let toggleClassCheck = btnState ? ' active' : ' ';

  return (
    <button className={`zone-btn${toggleClassCheck}`} onClick={handleClick}>
      {dormName}
    </button>
  );
};

export default ZoneButton;
