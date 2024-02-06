"use client";
import { Switch } from "antd";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import Image from "next/image";
const Pricing = () => {
  const [duration, setDuration] = useState(true);

  const handleDuration = () => {
    setDuration(!duration);
  };
  // console.log(checKed);
  return (
    <section className="">
      <h2 className="heading_2 text-center">The Right plan on pricing</h2>
      <div className="flex gap-6 justify-center lg:mt-8 mt-4 lg:mb-[60px] mb-10 md:text-lg text-base md:font-bold font-medium">
        <h5 className={`${!duration ? "text-[#FF4E25]" : "text-white"}`}>
          Monthly
        </h5>
        <Switch defaultChecked onClick={handleDuration} />
        <h5 className={`${duration ? "text-[#FF4E25]" : "text-white"}`}>
          Yearly
        </h5>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto relative gap-6">
        <PricingCard Title="Basic Fitness" pricing="00.0" duration="Free" />
        <PricingCard Title="Premium Fitness" pricing="20" duration="Month" />
        <PricingCard Title="Premium Plus" pricing="40" duration="Yearly" />

        {/* <Image  
                src = "/bgshadow.png" className='absolute top-0 right-[35%] rounded-full' alt="group" width={200} height={200}/> */}
      </div>
    </section>
  );
};

export default Pricing;
