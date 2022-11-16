import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
// import axios from 'axios';
import axios from 'utils/axios';

import './dormReview.css';
import { ReviewCard } from 'components/reviewCard/reviewCard.component';
import { useParams } from 'react-router-dom';

// prop from dormData (open/close Modal, Alert)
import { FunctionProp } from 'sections';

export const DormReviewSection = ({ open, setOpen, openAlert, setOpenAlert }: FunctionProp) => {
  //state
  const [posts, setPosts] = useState<any[]>([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/dorm/review/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setPosts(res.data);

        console.log('posts : ', posts);
        console.log('Posts type : ', typeof posts);
        console.log('Posts length : ', posts.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [openAlert]);

  console.log("ReSec", open, openAlert);
  return (
    <div>
      <div className='Box-zone'>
        <Box>
          <div className='Review-header'>
            <h1 className='Dorm-review'>Review</h1>
          </div>
          {posts.map((post) => (
            <ReviewCard id={post._id} image={post.imagePath} name={post.username} content={post.textReview} />
          ))}
        </Box>
      </div>
    </div>
  );
};
