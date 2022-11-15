import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';

import './dormReview.css';
import { ReviewCard } from 'components/reviewCard/reviewCard.component';
import { useParams } from 'react-router-dom';



export const DormReviewSection = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const { id } = useParams();

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      axios
      .get(`https://life-at-kmitl-backend-production.up.railway.app/dorm/review/${id}`)
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
    }
  });

  return (
    <div>
      <div className='Box-zone'>
        <Box>
          <div className='Dorm-header'>
            <h1 className='Dorm-review'>
              Review
            </h1>
          </div>
          {posts.map((post) => (
            <ReviewCard image={post.imagePath} name={post.username} content={post.textReview} />
          ))}
        </Box>
      </div>
    </div>
  );
};
