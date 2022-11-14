import React, { useState, useEffect } from 'react';

import { Box, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Link } from 'react-router-dom';


export const CardComponent = (props: any) => {
  const { id, imgPath, dormName, rangePrice1, rangePrice2 } = props;
  return (
    <Link to={`/dorm/${id}`}>
      <Card style={{ margin: 10 }}>
        <CardActionArea>
          <CardMedia component='img' image={imgPath} alt='LOGO' sx={{ height: '200px' }} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {dormName}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Price : {rangePrice1}-{rangePrice2} <br />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
