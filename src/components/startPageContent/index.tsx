import React from 'react';
import './startPageContent.css';

import { useNavigate } from 'react-router-dom';
import NavBar from 'components/navbar';

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
              <p className='content-font'>The</p>
              <p className='content-font'>World's best</p>
              <p className='content-font'>Dormitory</p>
              <p className='content-font'>website</p>
            </div>
            <div className='text3'>
              <p>
                This website will help you find a hostel that meets your needs with our custom system, and also has lots
                of real tenant reviews.
              </p>
            </div>
          </div>
        </div>
        <button className='btn' role='button' onClick={navigateToCustomPage}>
          <p className='content-font extra'>Get Started</p>
        </button>
      </div>
    </div>
  );
};

export default StartPageContent;
