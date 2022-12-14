import { Box, Typography } from '@mui/material';

import { CardComponent } from 'components';
import { SliderComponent } from 'components/cardSlider/cardSlider/cardSlider.component';
import { SliderComponent2 } from 'components/cardSlider/cardSlider/cardSlider2.components';
import { SliderIdEnum } from 'types';
import './dormSample.css';

const sliders = [
  {
    sliderId: SliderIdEnum.zone,
    component: <SliderComponent />,
  },
  {
    sliderId: SliderIdEnum.popular,
    component: <SliderComponent />,
  },
];

export const DormSampleSection: React.FC = () => {
  return (
    <div className='Box-zone'>
      <Box py={4}>
        <SliderComponent />
        <SliderComponent2 />
      </Box>
    </div>
  );
};
