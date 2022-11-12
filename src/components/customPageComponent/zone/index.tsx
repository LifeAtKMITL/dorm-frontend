import React, { useState } from 'react';
import ZoneButton from '../zoneButton';
import './zone.css';

const Zone = () => {
  const dormName1 = 'เกกี';
  const dormName2 = 'เกกี';
  const dormName3 = 'เกกี';
  return (
    <div className='zone_button-container'>
      <ZoneButton />
      <ZoneButton />
      <ZoneButton />
    </div>
  );
};

export default Zone;
