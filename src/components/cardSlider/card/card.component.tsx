import React, { useState, useEffect } from 'react';

import { Box, Container, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Link } from 'react-router-dom';


export const CardComponent = (props: any) => {
  const { id, imgPath, dormName, dormScore, dormTel, rangePrice1, rangePrice2 } = props;
  return (
    <Link to={`/dorm/${id}`}>
      <Card style={{ margin: 10 }}>
        <CardActionArea>
          <CardMedia component='img' image={imgPath} alt='LOGO' sx={{ height: '200px' }} />
          <CardContent>
            <div style={{padding: '10px 0px'}}>
            <Typography gutterBottom variant='h5' component='div'>
              {dormName}
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              <Rating name='read-only' value={dormScore} precision={0.5} readOnly size='small' /> <br/>
              Price : {rangePrice1} - {rangePrice2} ฿ <br/>
              Contact : {dormTel} <br/>
            </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
