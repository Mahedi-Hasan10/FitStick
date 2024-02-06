"use client";
import Link from "next/link";

import { FaCircle, FaRegCircle } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HeroServices = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex items-center justify-between lg:mb-[60px] mb-[20px]">
        <h2 className="heading_2">Services We&apos;re Offering</h2>
        <Link
          href="/"
          className="lg:text-lg text-sm text-center lg:font-bold md:font-medium font-normal text-[#FF4E25] underline"
        >
          View All Services
        </Link>
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        slidesPerView={3}
        spaceBetween={24}
        className="mySwiper py-[20px] !px-0"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <ServiceCard title="gym fitness class" avetarSrc="/service/s1.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard title="Body building class" avetarSrc="/service/s2.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard title="power lifting class" avetarSrc="/service/s3.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard title="gym fitness class" avetarSrc="/service/s1.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard title="Body building class" avetarSrc="/service/s2.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCard title="power lifting class" avetarSrc="/service/s3.png"/>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroServices;
