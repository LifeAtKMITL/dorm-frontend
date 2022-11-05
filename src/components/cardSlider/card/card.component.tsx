import React from "react";


import { Box, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { logoImg } from "assets";

// export type CardProps = {
//     content: React.ReactNode;
//   };

export const CardComponent = () => {
    return (
      <Card
        style={{margin: 10}}
      >
      <CardActionArea>
        <CardMedia
          component="img"
          image={logoImg}
          alt="LOGO"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            AJ Park
          </Typography>
          <Typography variant="body2" color="text.secondary">
            AJ PARK is da worse dorm in this fuvking world <br/>
            - Air Con <br/>
            - TV      <br/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    );
  };