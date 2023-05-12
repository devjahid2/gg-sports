'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination } from "swiper";
import Image from 'next/image';

const Client = () => {
    const data = [
        '/whatus/1.png',
        '/whatus/2.png',
        '/whatus/1.png',
        '/whatus/2.png',
        '/whatus/1.png',
        '/whatus/2.png',
        '/whatus/1.png',
        '/whatus/2.png',
        '/whatus/1.png',
        '/whatus/2.png',
        '/whatus/1.png',
        '/whatus/2.png',
      ];

    return (
        <div className='client container mt-70'>
            <h2 className='title text-4xl font-bold after-bg'>OUR CLIENTS</h2>
            <div className="py-10">
        <Swiper
         slidesPerView={1}
         grid={{ rows: 2, fill: "row" }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className='grid pb-40'
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((da, i) => (
            <SwiperSlide key={i}>
              <Image alt='client' src={da} width={498} height={600} />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
        </div>
    );
}

export default Client;
