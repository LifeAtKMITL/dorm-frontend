import React from 'react';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import './reviewCard.css';

type ReviewProp = {
  // userId
  name: string;
  // textReview
  content: string;
};

export const ReviewCard = ({ name, content }: ReviewProp) => {
  return (
    <div className='Box-Review'>
      <div className='Box-Review-header'>
        <h4>{name}</h4>
      </div>
      <p>{content}</p>
    </div>
  );
};
