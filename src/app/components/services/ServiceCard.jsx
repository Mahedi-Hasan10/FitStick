"use client";
import Link from 'next/link';
import { Card, Avatar } from 'antd';
const { Meta } = Card;





const ServiceCard = ({title, avetarSrc}) => {
    return (
        <Card
        hoverable
        style={{
          width: 424,
          height:267,
        }}
        className='bg-transparent text-white border border-gray-500 hover:border-white'
       >
        <Meta 
         className='flex items-center capitalize line-clamp-1'
         avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" className='lg:h-[70px] lg:w-[70px] h-[40px] w-[40px] bg-[#FF4E25]'/>}
         title={title} 
         />
         <Meta className='line-clamp-2' description="I have been hiring people in this space for a number of years and I have "/>
        
        <div className='text-white text-lg font-bold bottom-card flex items-center gap-5 mt-[10px]'>
            <div className='btn-icon'></div>
            <Link href="/">Read More</Link>
        </div>
       
      
      </Card>
    );
};

export default ServiceCard;