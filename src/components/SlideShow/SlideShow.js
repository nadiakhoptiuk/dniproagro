import React from 'react';
import { Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import 'assets/styles/slideshow.css';

export const SlideShow = ({ images }) => {
  return (
    <Swiper
      centeredSlides={true}
      loop={true}
      slidesPerView={1}
      lazy={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // autoplay={false}
      speed={2000}
      modules={[Autoplay]}
      className="heroSwiper"
    >
      {images &&
        images.map(({ alt, image }, index) => {
          return (
            <SwiperSlide key={index}>
              <GatsbyImage image={getImage(image)} alt={alt} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};