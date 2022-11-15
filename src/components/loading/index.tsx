import { logoImg } from 'assets';
import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div className='Background'>
      <div className='container'>
        <div className='Box-load'>
          <img className='Load-img' src={logoImg}></img>
        Loading...
        </div>
      </div>
    </div>
      )
};

export default Loading;
