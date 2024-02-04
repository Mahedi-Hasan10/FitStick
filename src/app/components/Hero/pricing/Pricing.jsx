"use client"
import { Switch } from 'antd';
import React, { useState } from 'react';
import PricingCard from './PricingCard';
import Image from 'next/image'; 
const Pricing = () => {
    const [checKed, setChecked] = useState(false);
    const handleCheck = () => {
        setChecked(!checKed);
    };
    // console.log(checKed);
    return (
        <section className='mt-[100px]'>
            <h2 className='xl:text-5xl lg:text-3xl text-2xl 2xl:font-bold lg:font-semibold font-medium lg:leading-[57px] leading-[30px] text-center'>The Right plan on pricing</h2>
            <div className="flex gap-6 justify-center py-7 text-lg font-bold">
                <h5 className="text-[#FF4E25]">Monthly</h5>
                    <Switch defaultChecked onClick={handleCheck}/>
                <h5>Yearly</h5>
            </div>
            {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto relative gap-3'>
                <PricingCard Title="Basic Fitness" pricing="00.0" duration="Free"/>
                <PricingCard Title="Premium Fitness" pricing="20" duration="Month"/>
                <PricingCard Title="Premium Plus" pricing="40" duration="Yearly"/>
                
                <Image  
                src = "/bgshadow.png" className='absolute top-0 right-[35%] rounded-full' alt="group" width={200} height={200}/>
            </div> */}
        </section>
    );
};

export default Pricing;