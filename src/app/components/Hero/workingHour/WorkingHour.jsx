import { IoArrowForward } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const WorkingHour = () => {
    return (
        <section className="py-7 mt-[70px]">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center pb-4 lg:mt-4">Working Hours And Classes</h1>
            <div className="mt-5">
                <div className="flex justify-between items-center border-b-2 border-b-white lg:py-5 py-3 group cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <FaCircle className="text-[#FF4E25] opacity-60 group-hover:opacity-100"/>
                        <h4 className="lg:text-[32px] md:text-[25px] text-[16px] lg:font-bold semibold group-hover:text-[#FF4E25]">Body Building</h4>
                    </div>
                    <p className="lg:text-xl text-base font-normal opacity-60">06:00AM - 09:00AM</p>
                    <IoArrowForward className="lg:text-3xl text-base group-hover:text-[#FF4E25]"/>
                </div>
                <div className="flex justify-between items-center border-b-2 border-b-white lg:py-5 py-3 group cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <FaCircle className="text-[#FF4E25] opacity-60 group-hover:opacity-100"/>
                        <h4 className="lg:text-[32px] md:text-[25px] text-[16px] lg:font-bold semibold group-hover:text-[#FF4E25]">Body Building</h4>
                    </div>
                    <p className="lg:text-xl text-base font-normal opacity-60">06:00AM - 09:00AM</p>
                    <IoArrowForward className="lg:text-3xl text-base group-hover:text-[#FF4E25]"/>
                </div>
                <div className="flex justify-between items-center border-b-2 border-b-white lg:py-5 py-3 group cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <FaCircle className="text-[#FF4E25] opacity-60 group-hover:opacity-100"/>
                        <h4 className="lg:text-[32px] md:text-[25px] text-[16px] lg:font-bold semibold group-hover:text-[#FF4E25]">Body Building</h4>
                    </div>
                    <p className="lg:text-xl text-base font-normal opacity-60">06:00AM - 09:00AM</p>
                    <IoArrowForward className="lg:text-3xl text-base group-hover:text-[#FF4E25]"/>
                </div>
                <div className="flex justify-between items-center border-b-2 border-b-white lg:py-5 py-3 group cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <FaCircle className="text-[#FF4E25] opacity-60 group-hover:opacity-100"/>
                        <h4 className="lg:text-[32px] md:text-[25px] text-[16px] lg:font-bold semibold group-hover:text-[#FF4E25]">Body Building</h4>
                    </div>
                    <p className="lg:text-xl text-base font-normal opacity-60">06:00AM - 09:00AM</p>
                    <IoArrowForward className="lg:text-3xl text-base group-hover:text-[#FF4E25]"/>
                </div>
                <div className="flex justify-between items-center border-b-2 border-b-white lg:py-5 py-3 group cursor-pointer">
                    <div className="flex gap-4 items-center">
                        <FaCircle className="text-[#FF4E25] opacity-60 group-hover:opacity-100"/>
                        <h4 className="lg:text-[32px] md:text-[25px] text-[16px] lg:font-bold semibold group-hover:text-[#FF4E25]">Body Building</h4>
                    </div>
                    <p className="lg:text-xl text-base font-normal opacity-60">06:00AM - 09:00AM</p>
                    <IoArrowForward className="lg:text-3xl text-base group-hover:text-[#FF4E25]"/>
                </div>
            </div>
        </section>
    );
};

export default WorkingHour;