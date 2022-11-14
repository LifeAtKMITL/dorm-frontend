import React, { useState } from 'react';
import ZoneButton from '../zoneButton';
import './zone.css';

const Zone = () => {
  // Zone-Button
  const dormName1 = 'เกกี';
  const dormName2 = 'RNP';
  const dormName3 = 'ซอยหอใหม่';
  return (
    <div className='zone_button-container'>
      <ZoneButton dn={dormName1} />
      <ZoneButton dn={dormName2} />
      <ZoneButton dn={dormName3} />
    </div>
  );
};

export default Zone;
