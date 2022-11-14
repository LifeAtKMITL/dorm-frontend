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
          <div onClick={aircon}>
            <CheckBox name={'aircon'} />
          </div>
          <div onClick={furniture}>
            <CheckBox name={'furniture'} />
          </div>
          <div onClick={waterHeater}>
            <CheckBox name={'waterHeater'} />
          </div>
          <div onClick={fan}>
            <CheckBox name={'fan'} />
          </div>
          <div onClick={TV}>
            <CheckBox name={'TV'} />
          </div>
          <div onClick={fridge}>
            <CheckBox name={'fridge'} />
          </div>
        </div>

        <div className='c2'>
          <div onClick={parking}>
            <CheckBox name={'parking'} />
          </div>
          <div onClick={freeWifi}>
            <CheckBox name={'freeWifi'} />
          </div>
          <div onClick={keyCard}>
            <CheckBox name={'keyCard'} />
          </div>
          <div onClick={CCTV}>
            <CheckBox name={'CCTV'} />
          </div>
          <div onClick={luandry}>
            <CheckBox name={'luandry'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
