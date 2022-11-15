import { logoImg } from 'assets';
import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div className='Background'>
      <div className='container'>
        <div className='Box-load'>
          <img className='Load-img' src={logoImg}></img>
          <div className="spinner-container">
            <div className="loading-spinner">
            </div>
          </div>
        </div>
      </div>
    </div>
      )
};

export default Loading;




    
