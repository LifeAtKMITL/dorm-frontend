import React, { useEffect, useState } from 'react';

import Rating from '@mui/material/Rating';
import './reviewModal.css';


// prop from dormData
import { functionProp } from 'sections';




export const ReviewModalComponent = ({open, setOpen}: functionProp) => {
  const [star, setStar] = useState<number | null>(3);

  //state
  const [review, setReview] = useState({
    thought: '',
    star: 3,
  });

  const [allReview, setAllReview ] = useState<Object[]>([]);


  //function
  const onChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setReview((prevReview) => {
      return {
        ...prevReview,[name]: value,
      };
    });
  };

  function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    setAllReview((prevAllReview) => {
      return [...prevAllReview, review];
    });
    console.log('review', review);
    console.log('Allreview', allReview)
    console.log(Object.values(allReview))
    setReview({ thought: '', star: 3 });
    setOpen(false)
    console.log(open)
  }

  //element



    return (
      <div className='Modal'>
        <div className='Modal-header'>
          <h1>Write Review</h1>
        </div>
        <div className='Modal-content'>
          <form onSubmit={onSubmit}>
            <label>Review</label>
            <br />
            <textarea
              name='thought'
              rows={3}
              cols={25}
              placeholder='Share your thoughts !!'
              value={review.thought}
              onChange={onChange}
            />
            <br />
            <label>Rate this dorm !</label>
            <br />
            <Rating
              name='star'
              value={review.star}
              onChange={(event, newValue) => {
                setStar(newValue);
              }}
            />{' '}
            <br />
            <button type='submit' className='Button-submit' onClick={onSubmit}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
};
