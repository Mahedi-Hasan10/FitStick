import Image from 'next/image';
import { AiOutlinePlusSquare } from "react-icons/ai";

const LatestCard = () => {
    return (
        <div className='max-w-[424px] group cursor-pointer rounded-md'>
            <Image src="/latest/l1.png" height={280} width={424} alt="latest" />
            <div className='px-2 py-5 capitalize flex items-center justify-between border-b border-l border-r border-white '>
                <h1 className=' text-[20px] font-bold group-hover:text-[#FF4E25]'>total body stretching</h1>
                <AiOutlinePlusSquare className='text-white text-4xl group-hover:text-[#FF4E25]'/>
            </div>
        </div>
    );
};

export default LatestCard;