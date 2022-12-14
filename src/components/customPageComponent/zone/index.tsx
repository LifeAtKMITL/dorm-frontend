import React, { useState } from 'react';
import ZoneButton from '../zoneButton';
import './zone.css';

const Zone = (props: any) => {
  // send props to custom
  const keki = () => {
    props.func('เกกี');
  };
  const rnp = () => {
    props.func('RNP');
  };
  const soiHorMai = () => {
    props.func('ซอยหอใหม่');
  };

  // end of send props

  // Zone-Button
  const dormName1 = 'เกกี';
  const dormName2 = 'RNP';
  const dormName3 = 'ซอยหอใหม่';

  return (
    <fieldset className='zone-box'>
      <ul className='desc'>
        <li>Choose the zone you want.</li>
      </ul>
      <legend className='textAtBorder font-link'>ZONE</legend>
      <div className='zone_button-container'>
        <div onClick={keki}>
          <ZoneButton dn={dormName1} />
        </div>
        <div onClick={rnp}>
          <ZoneButton dn={dormName2} />
        </div>
        <div onClick={soiHorMai}>
          <ZoneButton dn={dormName3} />
        </div>
      </div>
    </fieldset>
  );
};

export default Zone;
