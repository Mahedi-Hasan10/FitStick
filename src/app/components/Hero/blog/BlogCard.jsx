import Link from 'next/link';
import Image from 'next/image';
const BlogCard = ({thumbnail, subTitle,Title}) => {
    return (
        <div className='group transition-all duration-500 cursor-pointer w-fit max-w-[424px]'>
            <Image src={thumbnail} alt='blog1' width={424} height={280}/>
            <div className='p-4 border-l border-opacity-10 group-hover:border-opacity-20 transition duration-300 border-l-white border-r border-r-white border-b border-b-white'>
                <div className='text-white text-lg font-bold bottom-card flex items-center gap-3 mt-[10px]'>
                    <div className='h-[1px] bg-[#FF4E25] bg-opacity-60 w-[42px] group-hover:bg-opacity-100'></div>
                    <Link className='text-[#FF4E25] text-base font-semibold text-opacity-60 group-hover:text-opacity-100' href="/">{subTitle}</Link>
                </div>

                <h5 className='text-[28px] font-bold leading-[44px] capitalize group-hover:text-[#FF4E25] transition duration-300 line-clamp-2'>{Title}</h5>
                <div className='text-white text-lg font-bold bottom-card flex items-center gap-5 mt-[10px]'>
                    <div className='h-[14px] w-[14px] bg-[#ff4e25] rounded-full group-hover:rounded-none group-hover:h-[1px] group-hover:w-[42px] transition-all duration-500'></div>
                    <Link className='group-hover:opacity-100 opacity-50 text-lg font-bold' href="/">Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;