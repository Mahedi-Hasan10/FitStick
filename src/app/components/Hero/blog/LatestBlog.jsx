import Link from 'next/link';
import BlogCard from './BlogCard';

const LatestBlog = () => {
    return (
        <section className=''>
            <div className='flex items-center justify-between lg:mb-[60px] mb-5'>
                <h2 className='lg:text-5xl md:text-3xl text-2xl lg:font-bold md:font-semibold font-medium lg:leading-[57px] leading-[30px]'>Latest Blog Posts</h2>
                <Link href="/" className='lg:text-lg text-base lg:font-bold font-medium text-[#FF4E25] underline'>View All Blogs</Link>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3' >
                <BlogCard thumbnail='/blog/b1.png' subTitle="Fitness" Title="fitness helps you think and fell better"/>
                <BlogCard thumbnail='/blog/b2.png' subTitle="ACROBATICS" Title="10 tips how to prepare me fast and easy"/>
                <BlogCard thumbnail='/blog/b3.png' subTitle="Fitness" Title="today is the best day to in training"/>
            </div>
        </section>
    );
};

export default LatestBlog;