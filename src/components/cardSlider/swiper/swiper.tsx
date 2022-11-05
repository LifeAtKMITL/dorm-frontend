import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";



// import required modules
import { Pagination, Zoom } from "swiper";
import { CardComponent } from "../card/card.component";

export const Swipe = () => {
  return (
    <>
      <Swiper
        slidesPerView={1.4}
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        zoom={{
          maxRatio: 4,
        }}
        modules={[Pagination, Zoom]}
        
        className="mySwiper"
      >
        {/* {children} */}
        <SwiperSlide><CardComponent/></SwiperSlide>
        <SwiperSlide><CardComponent/></SwiperSlide>
        <SwiperSlide><CardComponent/></SwiperSlide>
        <SwiperSlide><CardComponent/></SwiperSlide>
        <SwiperSlide><CardComponent/></SwiperSlide>
        <SwiperSlide><CardComponent/></SwiperSlide>
        <SwiperSlide><CardComponent/></SwiperSlide>
        <SwiperSlide><CardComponent/></SwiperSlide>
        <SwiperSlide><CardComponent/></SwiperSlide>
      </Swiper>
    </>
  );
}
