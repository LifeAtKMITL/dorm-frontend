import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { v4 as uuidv4 } from 'uuid';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

// import required modules
import { Pagination, Zoom } from 'swiper';
import { CardComponentNoScore } from '../card/cardNoScore.component';

const Swipe3 = (props: any) => {
  const { testData } = props;
  const data = testData;
  // console.log('swdata = ', data);
  return (
    <>
      <Swiper
        slidesPerView={1.3}
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        zoom={{
          maxRatio: 4,
        }}
        modules={[Pagination, Zoom]}
        className='mySwiper'
      >
        {data.map((element: any) => {
          return (
            <SwiperSlide key={element.name}>
              <CardComponentNoScore
                id={element._id}
                imgPath={element.imagePath[0]}
                dormName={element.name}
                dormTel={element.tel}
                rangePrice1={element.rangePrice[0]}
                rangePrice2={element.rangePrice[1]}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Swipe3;
