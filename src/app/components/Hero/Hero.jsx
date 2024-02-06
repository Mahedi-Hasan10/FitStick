"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import { FaPlay } from "react-icons/fa";
import MyButton from "../Button";
const Hero = () => {
  const [nextImageHangle, setNextImageHangle] = useState(1);
  const [prevImageHangle, setPrevImageHangle] = useState(1);
  const [imageCount, setImageCount] = useState(1);

  const NextimageHandle = () => {
    if (nextImageHangle <= 5) {
      setImageCount(nextImageHangle + 1);
      setNextImageHangle(nextImageHangle + 1);
    } else {
      setImageCount(1);
      setNextImageHangle(1);
    }
  };
  const PrevimageHandle = () => {
    if (prevImageHangle <= 1) {
      setImageCount(6);
      setPrevImageHangle(6);
    } else {
      setImageCount(prevImageHangle - 1);
      setPrevImageHangle(prevImageHangle - 1);
    }
  };
  return (
    <section>
      <div className="flex lg:gap-[40px] relative">
        <div className="lg:max-w-[660px] md:py-[100px] py-[30px] flex flex-col md:mx-0 mx-auto">
          <div className="lg:text-[68px] md:text-[50px] text-[30px] lg:font-bold font-semibold lg:leading-[81px] md:leading-[60px] leading-10 lg:mx-0  mx-auto lg:mb-8 mb-3">
            <h1 className="flex md:flex-nowrap flex-wrap gap-2 items-center">
              <Image
                src="/hero/hero-2.png"
                width={48}
                height={48}
                className="vector"
                alt="hero banner"
              />
              The Best Fitness
            </h1>
            <h1 className="flex md:flex-nowrap flex-wrap  gap-2 items-center">
              Stud In Town.
              <Image
                src="/hero/hero-1.png"
                width={134}
                height={48}
                className="max-h-[48px] max-w-[134px]"
                alt="hero banner"
              />
            </h1>
          </div>

          <p className="md:text-base text-sm lg:font-semibold md:font-medium font-normal text-[#AAAAAAAA] lg:leading-6 leading-5 md:mx-0 mx-auto lg:mb-[42px] mb-8 opacity-65 md:text-start text-center">
            Welcome to this comprehensive guide on the Apple Vision Pro
            features, where we delve deep into the innovative advancements of
            this ground technology.
          </p>
          <div className="flex lg:gap-10 md:gap-7 gap-4 lg:mx-0 mx-auto">
            <MyButton
              buttonName="Get Started"
              btnBG="bg-[#FF4E25] hover:bg-opacity-80 transition duration-400"
            />
            <MyButton
              buttonName="Join Free Trial"
              Border="border border-white"
              btnBG="hover:bg-[#FF4E25] hover:text-white transition duration-400"
            />
          </div>
        </div>
        <div className="lg:flex hidden items-center justify-center py-5">
          <Image
            src="/hero/hero.png"
            width={575}
            height={555}
            alt="hero banner"
          />
        </div>

        {/* social menu  */}
        <div className="lg:flex hidden gap-7 text-white rotate-90 absolute right-[-150px] top-[300px]">
          <Link href="/" className="hover:text-[#FF4E25]">
            Facebook
          </Link>
          <Link href="/" className="hover:text-[#FF4E25]">
            Instagram
          </Link>
          <Link href="/" className="hover:text-[#FF4E25]">
            Twitter
          </Link>
          <Link href="/" className="hover:text-[#FF4E25]">
            LinkedIn
          </Link>
        </div>
      </div>

      {/* video play  */}
      <div className="flex lg:flex-nowrap flex-wrap items-center lg:gap-[80px]">
        <h4 className="lg:text-2xl md:text-xl text-lg lg:font-bold font-semibold leading-9 lg:max-w-[214px] capitalize md:text-start text-center  mx-auto mb-5">
          the class you will get here
        </h4>

        <div className="flex md:flex-nowrap flex-wrap items-center lg:gap-[60px] gap-5">
          <div className="relative mx-auto lg:w-[417px]">
            <Image
              src={`/latest/l${imageCount}.png`}
              width={417}
              height={149}
              alt="play button"
              className="rounded-[75px] max-h-[149px]"
            />
            <h2 className="text-[60px] font-bold absolute lg:right-[-15px] right-0 lg:top-[25px] md:top-[10px] top-[20px]">
              0{imageCount}
            </h2>
            <div className="absolute h-[55px] w-[55px] flex items-center justify-center top-[30%] left-[45%] bg-[#FF4E25] rounded-full">
              <FaPlay />
            </div>
          </div>
          <p className="leading-[25px] text-base capitalize opacity-60 ">
            at the beginning of fitness journey need motivation
          </p>
        </div>
        <div className="flex gap-5 md:mx-0 mx-auto">
          <HiOutlineArrowLongLeft
            className="text-[60px] hover:text-[#FF4E25] cursor-pointer opacity-60 hover:opacity-100"
            onClick={PrevimageHandle}
          />
          <HiOutlineArrowLongRight
            className="text-[60px] hover:text-[#FF4E25] cursor-pointer opacity-60 hover:opacity-100"
            onClick={NextimageHandle}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
