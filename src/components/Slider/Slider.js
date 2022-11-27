import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Scrollbar } from 'swiper';
import { useStaticQuery, graphql } from 'gatsby';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export const Slider = ({ children, className = '', slidesPerGroup }) => {
  return (
    <div className="relative ">
      <Swiper
        className={` mx-auto flex ${className}`}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
        spaceBetween={16}
        slidesPerView={3}
        slidesPerGroup={slidesPerGroup}
        // loopFillGroupWithBlank={true}

        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 31,
          },
          1336: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, EffectFade, Pagination]}
      >
        <button className="prev-slider">
          <ArrowLeftIcon width={24} />
        </button>
        {children}
        <button className="next-slider">
          <ArrowRightIcon width={24} />
        </button>
      </Swiper>
    </div>
  );
};