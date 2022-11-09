import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';

import './dormReview.css';
import { ReviewCard } from 'components/reviewCard/reviewCard.component';
import { ReviewModalComponent } from 'components';

// prop(dormId) from card


export const DormReviewSection: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/`) //change API get by dormId
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className='Box-zone'>
        <Box py={4}>
          <h1>Review</h1>
          {/* <ReviewCard name={post.id} content={post.title}></ReviewCard> */}
          {posts.map((post) => (
            <ReviewCard name={post.id} content={post.title}></ReviewCard>
          ))}
        </Box>
      </div>
    </div>
  );
};
