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
  );
};

export default Zone;
