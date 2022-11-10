import React from 'react';
import Rating from '@mui/material/Rating';
import './reviewCard.css';

type ReviewProp = {
  // image
  image: string,
  // username
  name: string;
  // textReview
  content: string;
};

export const ReviewCard = ({ image, name, content }: ReviewProp) => {
  return (
    <div className='Box-Review'>
      <div className='Box-Review-header'>
        <img className='User-image' src={image}></img>
        <h2>{name}</h2>
      </div>
      <p>{content}</p>
    </div>
  );
};
