'use client';
import { useState } from 'react';
import Link from 'next/link'
import LatestCard from './LatestCard';


const NAVLINKLIST = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Youga' },
    { id: 3, name: 'Strength' },
    { id: 4, name: 'Cardio' },
    { id: 5, name: 'Pilates' },
]

const HeroLatest = () => {
    const [active , setActive] = useState(1)
    const handleActive = (id) => {
        setActive(id)
    }

    return (
        <section className="lg:py-5 mx-auto lg:mt-[60px]">
            <h1 className="lg:text-5xl text-[30px] lg:font-bold font-semibold lg:leading-[57px] leading-10 capitalize text-center">latest workout fitness</h1>
            <div className='flex justify-center items-center mt-5'>
                <div className='grid lg:grid-cols-5 grid-cols-3  lg:gap-[30px]  text-base lg:font-semibold font-medium '>
                    {NAVLINKLIST.map((item) => (
                        <div href="/"  key={item.id} 
                        onClick={() => handleActive(item.id)}
                        style={{ backgroundColor: item.id === active ? '#ff4e25' : 'transparent' }}
                        className={`py-3 px-8 hover:bg-[#ff4e25] text-white lg:mt-0 mt-2 text-center`}>{item.name}</div>
                    ))} 
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-5'>
                <LatestCard/>
                <LatestCard/>
                <LatestCard/>
                <LatestCard/>
                <LatestCard/>
                <LatestCard/>
            </div>
        </section>
    );
};

export default HeroLatest;