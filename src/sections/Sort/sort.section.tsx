import { Box, Typography } from '@mui/material';
import { CardComponent } from 'components';
import React from 'react';

import './sort.css';

export const SortSectionComponent = () => {
  return (<div>
  <Box py={4}>
      <div className="Box">
        {/* {childern} */}
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
  </Box>
</div>)
};
