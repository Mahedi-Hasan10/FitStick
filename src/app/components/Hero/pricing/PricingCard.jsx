import { FaRegCheckCircle } from "react-icons/fa";
import MyButton from "../../Button";

const PricingCard = ({ Title, pricing, duration }) => {
  return (
    <div className="group">
      <div className="max-w-[424px] border border-white md:p-10 p-6 mb-4  cursor-pointer border-opacity-10 group-hover:border-opacity-20">
        <h3 className="lg:text-[32px] md:text-xl text-lg lg:font-bold font-semibold lg:leading-[51px] leading-9 line-clamp-1 lg:mb-10 mb-4">
          {Title}
        </h3>
        <h2 className="text-[#FF4E25] lg:text-5xl md:text-4xl text-3xl lg:font-bold font-semibold lg:mb-14 mb-6">
          ${pricing}/
          <span className="text-base font-bold text-white opacity-60">
            {duration}
          </span>
        </h2>
        <div className="lg:mb-14 mb-8 flex flex-col lg:gap-3 gap-2">
          <h1 className="flex gap-3 items-center md:text-base text-sm">
            <FaRegCheckCircle className="text-[#FF4E25]" /> All Timited Link
          </h1>
          <h1 className="flex gap-3 items-center md:text-base text-sm">
            <FaRegCheckCircle className="text-[#FF4E25]" /> Own Analytics
            Platform
          </h1>
          <h1 className="flex gap-3 items-center md:text-base text-sm">
            <FaRegCheckCircle className="text-[#FF4E25]" /> Chat Support
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <MyButton
            buttonName="Get Membership"
            btnBG="border border-[#FF4E25] group-hover:bg-[#FF4E25] transition duration-300 !border-opacity-20 text-opacity-60 group-hover:text-opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
