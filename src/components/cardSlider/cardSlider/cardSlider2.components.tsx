import React, { useState, useEffect } from 'react';
import axios from 'utils/axios';
import { CardComponent } from '../card/card.component';
import { Swipe } from '../swiper/swiper';

import { logoImg } from 'assets';
import './cardSlider.css';
import { Swipe2 } from '../swiper/swiper2';

const baseURL = 'https://life-at-kmitl-backend-production.up.railway.app/dorm';

export const SliderComponent2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/dorm').then((res: any) => {
      let temp = res.data;
      temp.sort(function (a: any, b: any) {
        let keyA = a.avgScore;
        let keyB = b.avgScore;
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      });
      setData(temp);
    });
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className='Slider'>
      <div className='header'>
        <div className='zoneTag'>
          <p className='font-link zone'>Popular</p>
        </div>
      </div>
      <Swipe2 testData={data} />
    </div>
  );
};
