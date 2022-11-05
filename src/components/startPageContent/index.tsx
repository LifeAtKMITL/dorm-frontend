import React from 'react';
import './startPageContent.css';

const StartPageContent = () => {
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
        <div className='btn' role='button'>
          <p className='content-font'>Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default StartPageContent;
