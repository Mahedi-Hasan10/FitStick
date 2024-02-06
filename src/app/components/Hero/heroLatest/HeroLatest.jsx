'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link'
import LatestCard from './LatestCard';

const NAVLINKLIST = [
    { id: 1, name: 'all' },
    { id: 2, name: 'youga' },
    { id: 3, name: 'strength' },
    { id: 4, name: 'cardio' },
    { id: 5, name: 'pilates' },
]

const HeroLatest = () => {
    const [latest, setLatest] = useState([])
    const [active , setActive] = useState('all')
    const handleActive = (name) => {
        setActive(name)
    }

    useEffect(() => {
        fetch('/json/latest.json').then
        (res => res.json())
        .then(data => setLatest(data))
        .catch(err => console.log(err))
    }
    , [])
    const filteredLatest = active === 'all' ? latest : latest.filter(item => item.category == active);

    return (
        <section className="mx-auto">
            <h1 className="lg:text-5xl text-[30px] lg:font-bold font-semibold lg:leading-[57px] leading-10 capitalize text-center lg:mb-12 mb-5">latest workout fitness</h1>
            <div className='flex justify-center items-center lg:mb-10 mb-3'>
                <div className='grid lg:grid-cols-5 grid-cols-3  lg:gap-[30px]  text-base lg:font-semibold font-medium '>
                    {NAVLINKLIST.map((item) => (
                        <div href="/"  key={item.id} 
                        onClick={() => handleActive(item.name)}
                        style={{ backgroundColor: item.name === active ? '#ff4e25' : 'transparent' }}
                        className={`py-3 px-8 hover:bg-[#ff4e25] text-opacity${item.id === active ? '-100' : '-60'}   text-white text-center cursor-pointer capitalize`}>{item.name}</div>
                    ))} 
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 '>
                {
                filteredLatest ?
                filteredLatest.map((item) => (
                    <LatestCard key={item.id} item={item} />
                )):
                <h1>No data found</h1>
                
                }

            </div>
        </section>
    );
};

export default HeroLatest;