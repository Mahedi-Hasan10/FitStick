import { FaRegCheckCircle } from "react-icons/fa";
import MyButton from "../../Button";


const PricingCard = ({Title, pricing, duration}) => {
    return (
        <div className="group">
            <div className="max-w-[424px] border border-white p-10 mb-4  cursor-pointer border-opacity-10 group-hover:border-opacity-20">
            <h3 className="text-[32px] font-bold leading-[51px] line-clamp-1 mb-10">{Title}</h3>
            <h2 className="text-[#FF4E25] text-5xl font-bold mb-14">${pricing}/<span className="text-base font-bold text-white opacity-60">{duration}</span></h2>
            <div className="mb-14 flex flex-col gap-3">
                <h1 className="flex gap-3 items-center text-base"><FaRegCheckCircle className="text-[#FF4E25]"/> All Timited Link</h1>
                <h1 className="flex gap-3 items-center text-base"><FaRegCheckCircle className="text-[#FF4E25]"/> Own Analytics Platform</h1>
                <h1 className="flex gap-3 items-center text-base"><FaRegCheckCircle className="text-[#FF4E25]"/> Chat Support</h1>
            </div>
           <div className="flex items-center justify-center">
            <MyButton buttonName="Get Membership" btnBG="border border-[#FF4E25] group-hover:bg-[#FF4E25] transition duration-300 !border-opacity-20 text-opacity-60 group-hover:text-opacity-100"/>
           </div>
        </div>
        </div>
    );
};

export default PricingCard;