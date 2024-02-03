import React from 'react';
import Image from 'next/image';
const CustomerImage = () => {
    return (
        <div className='relative h-fit group'>
            <div className='h-[100px] w-[100px] bg-[#FF4E25] opacity-20 group-hover:opacity-100 rotate-45'>
            </div>
            <Image src="/customer/c2.png" alt="quote" width={100} height={100} className='rounded-full absolute bottom-[-22%] left-0'/>
        </div>
    );
};

export default CustomerImage;