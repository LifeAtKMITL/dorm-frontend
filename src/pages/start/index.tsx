import NavBar from 'components/navbar';
import StartPageContent from 'components/startPageContent';
import React from 'react';
import './start.css';

const Start = () => {
  return (
    <div className='start-container'>
      <NavBar />
      <StartPageContent />
      <div className='test red'></div>
      <div className='test green'></div>
      <div className='test blue'></div>
    </div>
  );
};

export default Start;
