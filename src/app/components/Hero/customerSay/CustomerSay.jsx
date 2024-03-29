"use client";
import Image from "next/image";
import CustomerImage from "./CustomerImage";
import { FaCircle, FaRegCircle } from "react-icons/fa";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const CustomerSayData = [
  {
    id: 1,
    name: "Sandra garica",
    designation: "Manager",
    image: "/customer/c1.png",
    thumbnail: "/customer/c1.png",
    description:
      "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have ace for I have ace for I have been hiring people in this space for a number of years and I have never seen this level of other professionalism. It really feels like you are working with a team that can the",
  },
  {
    id: 2,
    name: "Elon Musk",
    designation: "Director",
    image: "/customer/2.png",
    thumbnail: "/customer/2.png",
    description:
      "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have ace for I have ace for I have been hiring people in this space for a number of years and I have never seen this level of other professionalism. It really feels like you are working with a team that can the",
  },
  {
    id: 3,
    name: "Mahtma Gandhi",
    designation: "Prime Minister",
    image: "/customer/c3.png",
    thumbnail: "/team/team2.png",
    description:
      "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have ace for I have ace for I have been hiring people in this space for a number of years and I have never seen this level of other professionalism. It really feels like you are working with a team that can the",
  },
  {
    id: 4,
    name: "Donald Trump",
    designation: "Tea seller",
    image: "/customer/c4.png",
    thumbnail: "/customer/ct4.png",
    description:
      "I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have ace for I have ace for I have been hiring people in this space for a number of years and I have never seen this level of other professionalism. It really feels like you are working with a team that can the",
  },
];

const CustomerSay = () => {
  const [customerData, setCustomerData] = useState(CustomerSayData);
  const [active, setActive] = useState(1);

  const handleCustomer = (id) => {
    // setCustomerID(id);
    setCustomerData(CustomerSayData.filter((data) => data.id === id) || 1);
    setActive(id);

    // console.log(customerData);
  };

  return (
    <section className="">
      <h2 className="heading_2 text-center capitalize">
        What our saying about us
      </h2>
      <div className="lg:mt-[60px] mt-5 flex lg:flex-nowrap flex-wrap lg:gap-28 md:gap-12 gap-4">
        <div className="lg:w-[40%] lg:h-[431px] mx-auto">
          <Image
            src={customerData[0]?.thumbnail}
            alt="group"
            width={372}
            height={431}
            className="h-full border-r border-red-500 pr-4 border-b  pb-4 "
          />
        </div>

        <Swiper
          pagination={{
            clickable: true,
            margin: 30,
          }}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          className="mySwiper lg:max-w-[60%] relative "
        >
          <SwiperSlide>
            <div className="flex flex-col gap-6 mt-5">
              <div className="flex lg:gap-[90px] gap-6 items-center md:flex-nowrap flex-wrap lg:mx-0 mx-auto">
                {CustomerSayData.map((data, index) => (
                  <div
                    className=""
                    key={index}
                    onClick={() => handleCustomer(data.id)}
                  >
                    <CustomerImage
                      thumbnail={CustomerSayData[index]?.image}
                      setBgOpacity={active}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-end mt-6">
                <h2 className="text-[#FF4E25] lg:text-2xl text-lg lg:font-bold font-semibold mb-1 line-clamp-1">
                  {customerData[0]?.name}
                </h2>
                <h4 className="text-[#CBCBCB] lg:text-lg text-base font-normal lg:mb-8 mb-4">
                  {customerData[0]?.designation}
                </h4>
                <p className="text-[#AAAAAA] xl:text-base text-sm font-normal lg:leading-6 leading-4 line-clamp-5">
                  {customerData[0]?.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-6 mt-5">
              <div className="flex lg:gap-[90px] gap-6 items-center md:flex-nowrap flex-wrap lg:mx-0 mx-auto">
                {CustomerSayData.map((data, index) => (
                  <div
                    className=""
                    key={index}
                    onClick={() => handleCustomer(data.id)}
                  >
                    <CustomerImage
                      thumbnail={CustomerSayData[index]?.image}
                      setBgOpacity={active}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-end mt-6">
                <h2 className="text-[#FF4E25] lg:text-2xl text-lg lg:font-bold font-semibold mb-1 line-clamp-1">
                  {customerData[0]?.name}
                </h2>
                <h4 className="text-[#CBCBCB] lg:text-lg text-base font-normal lg:mb-8 mb-4">
                  {customerData[0]?.designation}
                </h4>
                <p className="text-[#AAAAAA] xl:text-base text-sm font-normal lg:leading-6 leading-4 line-clamp-5">
                  {customerData[0]?.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-6 mt-5">
              <div className="flex lg:gap-[90px] gap-6 items-center md:flex-nowrap flex-wrap lg:mx-0 mx-auto">
                {CustomerSayData.map((data, index) => (
                  <div
                    className=""
                    key={index}
                    onClick={() => handleCustomer(data.id)}
                  >
                    <CustomerImage
                      thumbnail={CustomerSayData[index]?.image}
                      setBgOpacity={active}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-end mt-6">
                <h2 className="text-[#FF4E25] lg:text-2xl text-lg lg:font-bold font-semibold mb-1 line-clamp-1">
                  {customerData[0]?.name}
                </h2>
                <h4 className="text-[#CBCBCB] lg:text-lg text-base font-normal lg:mb-8 mb-4">
                  {customerData[0]?.designation}
                </h4>
                <p className="text-[#AAAAAA] xl:text-base text-sm font-normal lg:leading-6 leading-4 line-clamp-5">
                  {customerData[0]?.description}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <Image
            src="/customer/customerBG.png"
            alt="group"
            width={189}
            height={90}
            className="absolute bottom-[25%] right-0 "
          />
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerSay;
