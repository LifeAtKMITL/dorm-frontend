import React from 'react';
import './facilities.css';

import CheckBox from '../checkbox/index';

const Facilities = (props: any) => {
  // send props to custom
  const aircon = () => {
    props.func('aircon');
  };
  const furniture = () => {
    props.func('furniture');
  };
  const waterHeater = () => {
    props.func('waterHeater');
  };
  const fan = () => {
    props.func('fan');
  };
  const TV = () => {
    props.func('TV');
  };
  const fridge = () => {
    props.func('fridge');
  };
  const parking = () => {
    props.func('parking');
  };
  const freeWifi = () => {
    props.func('freeWifi');
  };
  const keyCard = () => {
    props.func('keyCard');
  };
  const CCTV = () => {
    props.func('CCTV');
  };
  const luandry = () => {
    props.func('luandry');
  };
  return (
    <div className='facilities-container'>
      <fieldset className='facilities-border'>
        <legend className='textAtBorder font-link'>FACILITIES</legend>
        <div className='c1'>
          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={aircon} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              Aircon
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={furniture} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              Furniture
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={waterHeater} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              Water Heater
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={fan} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              Fan
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={TV} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              TV
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={fridge} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              Fridge
            </span>
          </div>
        </div>

        <div className='c2'>
          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={parking} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              Parking
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={freeWifi} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              Free Wifi
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={keyCard} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              Key Card
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={CCTV} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              CCTV
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={luandry} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              Luandry
            </span>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Facilities;
