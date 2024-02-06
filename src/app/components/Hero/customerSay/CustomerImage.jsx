import React from 'react';
import Image from 'next/image';
const CustomerImage = ({thumbnail,setBgOpacity}) => {
    return (
        <div className='relative h-fit group cursor-pointer'>
            <div className={`lg:h-[100px] h-[50px] lg:w-[100px] w-[50px] bg-[#FF4E25] opacity-20  group-hover:opacity-100 rotate-45`}>
            </div>
            <Image src={thumbnail} alt="quote" width={100} height={100} className='lg:max-h-[100px] max-w-[50px] max-h-[50px] lg:max-w-[100px] rounded-full absolute bottom-[-22%] left-0'/>
        </div>
    );
};

export default CustomerImage;