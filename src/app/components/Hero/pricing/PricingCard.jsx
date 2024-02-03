import { FaRegCheckCircle } from "react-icons/fa";
import MyButton from "../../Button";


const PricingCard = ({Title, pricing, duration}) => {
    return (
        <div className="w-[424px] border border-white p-10 mb-4">
            <h3 className="text-[32px] font-bold leading-[51px] line-clamp-1 mb-10">{Title}</h3>
            <h2 className="text-[#FF4E25] text-5xl font-bold mb-14">${pricing}/<span className="text-base font-bold text-white opacity-60">{duration}</span></h2>
            <div className="mb-14 flex flex-col gap-3">
                <h1 className="flex gap-3 items-center text-base"><FaRegCheckCircle className="text-[#FF4E25]"/> All Timited Link</h1>
                <h1 className="flex gap-3 items-center text-base"><FaRegCheckCircle className="text-[#FF4E25]"/> Own Analytics Platform</h1>
                <h1 className="flex gap-3 items-center text-base"><FaRegCheckCircle className="text-[#FF4E25]"/> Chat Support</h1>
            </div>
           <div className="flex items-center justify-center">
            <MyButton buttonName="Get Membership" btnBG="border border-[#FF4E25] hover:bg-[#FF4E25] transition duration-300 "/>
           </div>
        </div>
    );
};

export default PricingCard;