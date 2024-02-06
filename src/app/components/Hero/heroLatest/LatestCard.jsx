import Image from "next/image";
import { AiOutlinePlusSquare } from "react-icons/ai";

const LatestCard = (item) => {
  const { name, thumbnail, category } = item.item;
  // console.log(item)
  return (
    <div className="max-w-[424px] group cursor-pointer rounded-md">
      <Image src={thumbnail} height={280} width={424} alt="latest" />
      <div className="px-2 py-5 capitalize flex items-center justify-between border-b border-l border-r border-white border-opacity-10 group-hover:border-opacity-20 ">
        <h1 className=" lg:text-xl md:text-lg text-base md:font-bold font-semibold group-hover:text-[#FF4E25] ">
          {name}
        </h1>
        <AiOutlinePlusSquare className="text-white lg:text-4xl md:text-2xl text-xl group-hover:text-[#FF4E25] " />
      </div>
    </div>
  );
};

export default LatestCard;
