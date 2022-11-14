import React from 'react';
import './checkbox.css';

const CheckBox = (props: any) => {
  const { name } = props;
  return (
    <div>
      <input type='checkbox' className='cb' />
      <span style={{ color: 'white' }}> {name}</span>
    </div>
  );
};

export default CheckBox;
