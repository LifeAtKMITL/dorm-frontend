import React from 'react';
import './startPageContent.css';

import { useNavigate } from 'react-router-dom';

const StartPageContent = () => {

  const navigate = useNavigate();

  const navigateToCustomPage = () => {
    navigate('home');
  };
  return (
    <div>
      <div className='startPage'>
        <div className='content'>
          <div className='text'>
            <div className='text1'>
              <p className='content-font'>PREMIUEM WEB</p>
            </div>
            <div className='text2'>
              <p className='content-font'>Unlimited</p>
              <p className='content-font'>Transactions with</p>
              <p className='content-font'>zero fees</p>
            </div>
            <div className='text3'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quam molestiae labore, accusamus rem
                vitae iste quibusdam similique
              </p>
            </div>
          </div>
        </div>
        <button className='btn' role='button' onClick={navigateToCustomPage}>
          <p className='content-font'>Get Started</p>
        </button>
      </div>
    </div>
  );
};

export default StartPageContent;
