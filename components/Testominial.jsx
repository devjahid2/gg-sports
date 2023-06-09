'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';

export default function Testimonial() {
  return (
    <section className=" bg-[#DACD57]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="testimonial  container py-16"
      >
        <SwiperSlide>
          <div className=" grid lg:grid-cols-2 relative py-16 px-10 lg:px-20">
            <div>
              <Image alt='testimonial' src={'/weare.png'} width={405} height={524} />
            </div>
            <div className="pt-[25%]">
              <h2 className=" text-[#335C67] text-opacity-90 text-4xl font-extrabold uppercase">
              Edon putri
              </h2>
              <span className=" text-[#335C67] text-3xl font-semibold uppercase">
                Brentford fc
              </span>

              <div className="pt-5">
                <p className="text-xl lowercase text-[#335C67]  font-light">
                George is very personal & professional, it is important for me to have someone representing me who understands me as a person & a player to help make important decisions along the way throughout my football career
                </p>
                <span className="text-2xl pt-5 block font-normal text-[#335C67] uppercase">
                  -May 2022
                </span>
              </div>
            </div>
            <div className=" hidden lg:block absolute inset-0 lg:top-[15%] lg:left-[42%]">
              <svg
                width="160"
                height="193"
                viewBox="0 0 260 193"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.509766 192.496V120.377C0.509766 86.1973 8.59896 59.1953 24.7773 39.3711C41.1836 19.5469 64.9954 6.55859 96.2129 0.40625V35.9531C72.9707 43.2448 57.362 55.7773 49.3867 73.5508C45.2852 82.8932 43.5762 92.5775 44.2598 102.604H97.9219V192.496H0.509766ZM258.225 35.9531C235.21 43.0169 219.715 55.7773 211.74 74.2344C207.183 84.0326 205.36 93.4889 206.271 102.604H259.934V192.496H162.521V120.377C162.521 85.7415 170.839 58.6257 187.473 39.0293C204.335 19.4329 227.919 6.55859 258.225 0.40625V35.9531Z"
                  fill="#335C67"
                  fillOpacity="0.4"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" grid lg:grid-cols-2 relative py-16 px-10 lg:px-20">
            <div>
              <Image alt='tenstimonial' src={'/Testimonial/2.png'} width={405} height={524} />
            </div>
            <div className="pt-[25%]">
              <h2 className=" text-[#335C67] text-opacity-90 text-4xl font-extrabold uppercase">
              Cian coleman
              </h2>
              <span className=" text-[#335C67] text-3xl font-semibold uppercase">
                Brentford fc
              </span>

              <div className="pt-5">
                <p className="text-xl lowercase text-[#335C67]  font-light">
                I have been with George since the age of 15 throughout that time I been nurtured and supported both on and off the field, helping me become the player I am today. I have total faith that my affairs are being handled by professionals & people that have my best interest at heart that allows me to fully focus on my football & get the right support whenever needed
                </p>
                <span className="text-2xl pt-5 block font-normal text-[#335C67] uppercase">
                  -May 2022
                </span>
              </div>
            </div>
            <div className=" hidden lg:block absolute inset-0 lg:top-[15%] lg:left-[42%]">
              <svg
                width="160"
                height="193"
                viewBox="0 0 260 193"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.509766 192.496V120.377C0.509766 86.1973 8.59896 59.1953 24.7773 39.3711C41.1836 19.5469 64.9954 6.55859 96.2129 0.40625V35.9531C72.9707 43.2448 57.362 55.7773 49.3867 73.5508C45.2852 82.8932 43.5762 92.5775 44.2598 102.604H97.9219V192.496H0.509766ZM258.225 35.9531C235.21 43.0169 219.715 55.7773 211.74 74.2344C207.183 84.0326 205.36 93.4889 206.271 102.604H259.934V192.496H162.521V120.377C162.521 85.7415 170.839 58.6257 187.473 39.0293C204.335 19.4329 227.919 6.55859 258.225 0.40625V35.9531Z"
                  fill="#335C67"
                  fillOpacity="0.4"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" grid lg:grid-cols-2 relative py-16 px-10 lg:px-20">
            <div>
              <Image alt='tenstimonial' src={'/Testimonial/3.png'} width={405} height={524} />
            </div>
            <div className="pt-[25%]">
              <h2 className=" text-[#335C67] text-opacity-90 text-4xl font-extrabold uppercase">
              Joe Snowdon
              </h2>
              <span className=" text-[#335C67] text-3xl font-semibold uppercase">
                Brentford fc
              </span>

              <div className="pt-5">
                <p className="text-xl lowercase text-[#335C67]  font-light">
                Since joining GG Sports, I am delighted with the excellent service I receive on a day-to-day basis. Football can be demanding on your own so to know you have the right support network around you gives me a piece of mind
                </p>
                <span className="text-2xl pt-5 block font-normal text-[#335C67] uppercase">
                  -May 2022
                </span>
              </div>
            </div>
            <div className=" hidden lg:block absolute inset-0 lg:top-[15%] lg:left-[42%]">
              <svg
                width="160"
                height="193"
                viewBox="0 0 260 193"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.509766 192.496V120.377C0.509766 86.1973 8.59896 59.1953 24.7773 39.3711C41.1836 19.5469 64.9954 6.55859 96.2129 0.40625V35.9531C72.9707 43.2448 57.362 55.7773 49.3867 73.5508C45.2852 82.8932 43.5762 92.5775 44.2598 102.604H97.9219V192.496H0.509766ZM258.225 35.9531C235.21 43.0169 219.715 55.7773 211.74 74.2344C207.183 84.0326 205.36 93.4889 206.271 102.604H259.934V192.496H162.521V120.377C162.521 85.7415 170.839 58.6257 187.473 39.0293C204.335 19.4329 227.919 6.55859 258.225 0.40625V35.9531Z"
                  fill="#335C67"
                  fillOpacity="0.4"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
