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
      <div className='facilities-border'>
        <div className='c1'>
          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={aircon} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              aircon
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={furniture} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              furniture
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={waterHeater} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              waterHeater
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={fan} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              fan
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
              fridge
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
              parking
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={freeWifi} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              freeWifi
            </span>
          </div>

          <div className='testBox'>
            <label className='switch'>
              <input type='checkbox' className='cb' onClick={keyCard} />
              <span className='slider round'></span>
            </label>
            <span className='testSpan' style={{ color: 'white' }}>
              {' '}
              keyCard
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
              luandry
            </span>
          </div>
        </div>
      </div>
    </div>
    

  );
};

export default Facilities;
