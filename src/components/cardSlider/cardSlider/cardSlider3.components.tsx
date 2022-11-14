import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardComponent } from '../card/card.component';
import { Swipe } from '../swiper/swiper';

import { logoImg } from 'assets';
import './cardSlider.css';
import Swipe3 from '../swiper/swiper3';

const SliderComponent3 = (props: any) => {
  // const [data, setData] = useState(props);
  const { testData } = props;
  const data = testData;
  console.log('scData = ', data);
  return (
    <div className='Slider'>
      <Swipe3 testData={data} />
    </div>
  );
};

export default SliderComponent3;
