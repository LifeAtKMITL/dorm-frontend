import Loading from 'components/loading';
import NavBar from 'components/navbar';
import StartPageContent from 'components/startPageContent';
import React from 'react';
import './start.css';

const Start = () => {
  return (
    <div className='start-container'>
      <NavBar />
      <StartPageContent />
    </div>
  );
};

export default Start;
