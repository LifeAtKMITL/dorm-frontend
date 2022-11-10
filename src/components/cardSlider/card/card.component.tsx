import React from 'react';

import { Box, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { logoImg } from 'assets';

// export type CardProps = {
//     content: React.ReactNode;
//   };

export const CardComponent = (props: any) => {
  const { imgPath, dormName, rangePrice1, rangePrice2 } = props;
  return (
    <Card style={{ margin: 10 }}>
      <CardActionArea>
        <CardMedia component='img' image={imgPath} alt='LOGO' sx={{ height: '200px' }} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {dormName}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {rangePrice1}-{rangePrice2} <br />
            - Air Con <br />
            - TV <br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
