import Link from 'next/link';
import BlogCard from './BlogCard';

const LatestBlog = () => {
    return (
        <section className='py-12 mt-5'>
            <div className='flex items-center justify-between mb-[20px]'>
                <h2 className='xl:text-5xl lg:text-3xl text-2xl 2xl:font-bold lg:font-semibold font-medium lg:leading-[57px] leading-[30px]'>Latest Blog Posts</h2>
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