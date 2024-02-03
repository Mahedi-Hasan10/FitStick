"use client";
import Link from 'next/link';   
import ServiceCard from './ServiceCard';
import { FaCircle,FaRegCircle } from "react-icons/fa";

const HeroServices = () => {
    return (
        <section className='py-12 mt-5'>
            <div className='flex items-center justify-between mb-[20px]'>
                <h2 className='xl:text-5xl lg:text-3xl text-2xl 2xl:font-bold lg:font-semibold font-medium lg:leading-[57px] leading-[30px]'>Services We&apos;re Offering</h2>
                <Link href="/" className='lg:text-lg text-base lg:font-bold font-medium text-[#FF4E25] underline'>View All Services</Link>
            </div>
            <div className='flex justify-around lg:flex-nowrap flex-wrap gap-2'>
                <ServiceCard title="gym fitness class"/>
                <ServiceCard title="Body building class"/>
                <ServiceCard title="power lifting class"/>
            </div>
            <div className='flex items-center justify-center'>
                <div className='py-8 flex gap-3 items-center '>
                    <FaRegCircle className='text-[#FF4E25] text-[16px]'/>
                    <div className='flex items-center gap-3'>
                        <div className='bg-[#FF4E25] h-[1px] w-[34px]'></div>
                        <FaCircle className='text-[#FF4E25] text-[16px]'/>
                    </div>
                    <FaRegCircle className='text-[#FF4E25] text-[16px]'/>
                </div>
            </div>
        </section>
    );
};

export default HeroServices;