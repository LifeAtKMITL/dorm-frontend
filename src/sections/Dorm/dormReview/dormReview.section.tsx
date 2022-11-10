import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import axios from 'axios';

import './dormReview.css';
import { ReviewCard } from 'components/reviewCard/reviewCard.component';

// prop(dormId) from card



export const DormReviewSection: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [dormId, setDormId] = useState('63660db5bd6516697b9cde60');

  const fake = [
      {
        "username": "dog",
        "image": "string path image dog",
        "_id": "6368d00232ade5f35135d771",
        "dormId": "63660db5bd6516697b9cde60",
        "userId": "1",
        "textReview": "hellosss"
      },
      {
        "username": "cat",
        "image": "string path image cat",
        "_id": "6368d02c32ade5f35135d774",
        "dormId": "63660db5bd6516697b9cde60",
        "userId": "2",
        "textReview": "good"
      },
      {
        "username": "fish",
        "image": "string path image fish",
        "_id": "6368d02c32ade5f35135d775",
        "dormId": "63660db5bd6516697b9cde60",
        "userId": "3",
        "textReview": "well"
      },
      {
        "username": "dog",
        "image": "string path image dog",
        "_id": "6368d02c32ade5f35135d776",
        "dormId": "63660db5bd6516697b9cde60",
        "userId": "1",
        "textReview": "well done"
      },
      {
        "username": "dog",
        "image": "string path image dog",
        "_id": "6368d00232ade5f35135d781",
        "dormId": "63660db5bd6516697b9cde61",
        "userId": "1",
        "textReview": "hellosss"
      },
      {
        "username": "cat",
        "image": "string path image cat",
        "_id": "6368d02c32ade5f35135d784",
        "dormId": "63660db5bd6516697b9cde61",
        "userId": "2",
        "textReview": "good"
      },
      {
        "username": "fish",
        "image": "string path image fish",
        "_id": "6368d02c32ade5f35135d785",
        "dormId": "63660db5bd6516697b9cde61",
        "userId": "3",
        "textReview": "well"
      },
      {
        "username": "dog",
        "image": "string path image dog",
        "_id": "6368d02c32ade5f35135d786",
        "dormId": "63660db5bd6516697b9cde61",
        "userId": "1",
        "textReview": "well done"
      }
    ];
  

  useEffect(() => {
    axios
    // change API get by dormId
    .get(`https://jsonplaceholder.typicode.com/posts/`)
    .then((res) => {
      console.log(res);
      setPosts(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

    // setPosts(fake)
    // console.log(fake)
    // console.log(dormId)
  }, []);

  return (
    <div>
      <div className='Box-zone'>
        <Box py={4}>
          <h1>Review</h1>
          {/* <ReviewCard image='' name={post.id} content={post.title}></ReviewCard> */}
          {posts.map((post) => (
            <ReviewCard image='' name={post.id} content={post.title}></ReviewCard>
            // <ReviewCard image={post.image} name={post.username} content={post.textReview} />
          ))}
        </Box>
      </div>
    </div>
  );
};
