import React, { useEffect, useState } from 'react';

import Rating from '@mui/material/Rating';
import './reviewModal.css';
// import axios from 'axios';
import axios from 'utils/axios';
import { useParams } from 'react-router-dom';

// prop from dormData (open/close Modal, Alert)
import { FunctionProp } from 'sections';

// authToken
const acceessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlUwZjk1NTdiMDlmMTI0N2U0ZGUyYmYzYjFjYjcyNjc5ZSIsImlhdCI6MTY2ODAwMTgyOSwiZXhwIjoxNjcwNTkzODI5fQ.hj-m3KVnEx6hwPjJGOqkAnBZIFocOB8B8Ey_j5uuoTA';

// const Url = 'https://life-at-kmitl-backend-production.up.railway.app';

// const authAxios = axios.create({
//   baseURL: Url,
//   headers: {
//     Authorization: `Bearer ${acceessToken}`
//   }
// })

export const ReviewModalComponent = ({open, setOpen, openAlert, setOpenAlert}: FunctionProp) => {
  //state
  const { id } = useParams();
  
  const [textReview, setTextReview] = useState('');
  const [star, setStar] = useState<number | null>(3);

  //function
  const onChange = (event: { target: any; }) => {
    const value = event.target.value;
    setTextReview(value);
  };

  function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    // posted textReview
    console.log('review : ', textReview);
    if (textReview.trim() == '') {
      alert('Please fill review box ☜(ﾟヮﾟ☜)');
      return;
    }
    else {
      axios
      .post(`/dorm/review/create`, {
        dormId: id,
        textReview: textReview,
      })
      .then(res => {
        console.log("Posted textReview : ", res);
      })
      .catch(err => {
        console.log(err);
      });
  
      // posted star
      console.log('star : ', star);
      axios
      .put(`/dorm/score`, {
        dormId: id,
        score: star,
      })
      .then(res => {
        console.log("Posted star : ", res);
      })
      .catch(err => {
        console.log(err);
      });
  
      setTextReview('');
      setStar(3);
      setOpen(false);
      setOpenAlert(true);
    }}

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
            className='Textarea'
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
