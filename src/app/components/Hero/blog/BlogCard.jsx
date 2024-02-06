import Link from "next/link";
import Image from "next/image";
const BlogCard = ({ thumbnail, subTitle, Title }) => {
  return (
    <div className="group transition-all duration-500 cursor-pointer w-fit max-w-[424px]">
      <Image src={thumbnail} alt="blog1" width={424} height={280} />
      <div className="p-4 border-l border-opacity-10 group-hover:border-opacity-20 transition duration-300 border-l-white border-r border-r-white border-b border-b-white">
        <div className="text-white text-lg font-bold bottom-card flex items-center gap-3 mt-[10px]">
          <div className="h-[1px] bg-[#FF4E25] bg-opacity-60 w-[42px] group-hover:bg-opacity-100"></div>
          <Link
            className="text-[#FF4E25] text-base lg:font-semibold font-medium text-opacity-60 group-hover:text-opacity-100 capitalize"
            href="/"
          >
            {subTitle}
          </Link>
        </div>

        <h5 className="lg:text-[28px] md:text-xl text-lg lg:font-bold font-semibold lg:leading-[44px] leading-7 mt-2 capitalize group-hover:text-[#FF4E25] transition duration-300 line-clamp-2">
          {Title}
        </h5>
        <div className="text-white bottom-card flex items-center lg:gap-5 gap-2 mt-[10px]">
          <div className="h-[14px] w-[14px] bg-[#ff4e25] rounded-full group-hover:rounded-none group-hover:h-[1px] group-hover:w-[42px] transition-all duration-500"></div>
          <Link
            className="group-hover:opacity-100 opacity-50 lg:text-lg font-base lg:font-bold font-semibold"
            href="/"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
