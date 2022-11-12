import React, { useEffect, useState } from 'react';

import Rating from '@mui/material/Rating';
import './reviewModal.css';
import axios from 'axios';

// prop from dormData (open/close Modal)
import { functionProp } from 'sections';

// prop(dormId) from card




export const ReviewModalComponent = ({open, setOpen}: functionProp) => {
  //state
  const [dormId, setDormId] = useState('63660db5bd6516697b9cde60');
  
  const [textReview, setTextReview] = useState('');
  const [star, setStar] = useState<number | null>(3);

//   useEffect(() => {
//     axios
//     .get(`https://life-at-kmitl-backend-production.up.railway.app/dorm/review/${dormId}`)
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }, []);


  //function
  const onChange = (event: { target: any; }) => {
    const value = event.target.value;
    setTextReview(value);
  };

  function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    // post textReview
    console.log('review : ', textReview);
    axios
    .post(`https://life-at-kmitl-backend-production.up.railway.app/dorm/review/create`, {
      dormId: dormId,
      textReview: textReview,
    })
    .then(res => {
      console.log("Post textReview : ", res);
    })
    .catch(err => {
      console.log(err);
    });

    //post star
    console.log('star : ', star);
    axios
    .post(`https://life-at-kmitl-backend-production.up.railway.app/dorm/score`, {
      dormId: dormId,
      star: star,
    })
    .then(res => {
      console.log("Post star : ", res);
    })
    .catch(err => {
      console.log(err);
    });


    setTextReview('');
    setStar(3);
    setOpen(false)
  }

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
              name='textReview'
              rows={3}
              cols={25}
              placeholder='Share your thoughts !!'
              value={textReview}
              onChange={onChange}
            />
            <br />
            <label>Rate this dorm !</label>
            <br />
            <Rating
              name='star'
              value={star}
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
