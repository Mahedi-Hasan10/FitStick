"use client";
import Link from "next/link";
import { Card, Avatar } from "antd";
const { Meta } = Card;

const ServiceCard = ({ title, avetarSrc }) => {
  return (
    <Card
      style={{
        height: 267,
      }}
      className="!rounded-none bg-transparent mb-[50px] text-white border border-white border-opacity-10 hover:border-opacity-20 max-w-[424px] group transition-all duration-500"
    >
      <Meta
        className="flex items-center capitalize line-clamp-1"
        avatar={
          <Avatar
            src={avetarSrc}
            className="lg:h-[48px] lg:w-[48px] h-[40px] w-[40px] bg-[#FF4E25] p-2"
          />
        }
        title={title}
      />
      <Meta
        className="line-clamp-2 opacity-60 group-hover:opacity-100"
        description="I have been hiring people in this space for a number of years and I have "
      />

      <div className="text-white text-lg font-bold bottom-card flex items-center lg:gap-5 gap-3 mt-3">
        <div className="h-[14px] w-[14px] bg-[#ff4e25] rounded-full group-hover:rounded-none group-hover:h-[1px] group-hover:w-[42px] transition-all duration-500"></div>
        <Link
          className="group-hover:opacity-100 group-hover:text-[#ff4e25] opacity-50 lg:text-lg text-base font-bold"
          href="/"
        >
          Read More
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;
