import React from "react";
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './landing.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import sl1 from '../assets/assets/sl1.png'
import sl2 from '../assets/assets/sl2.webp'
import sl3 from '../assets/assets/sl3.webp'
import sl4 from '../assets/assets/sl4.webp'


function Slider() {
  return (
    <div className="slider">

      

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="item"><img src={sl1} alt="Slider Image 1" /></div></SwiperSlide>
        <SwiperSlide><div className="item"><img src={sl2} alt="Slider Image 2" /></div></SwiperSlide>
        <SwiperSlide> <div className="item"><img src={sl4} alt="Slider Image 3" /></div></SwiperSlide>
        <SwiperSlide><div className="item"><img src={sl3} alt="Slider Image 4" /></div></SwiperSlide>
        
      </Swiper>
    </div>
    
    
  );
}

export default Slider;
