import MyButton from "../components/Button";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="bg-[#01060f] pt-[40px]">
            <div className="flex flex-col mx-auto 2xl:px-[300px] lg:px-[100px] md:px-[50px] px-[10px] ">
                <div className="flex items-center justify-center">
                    <form className="max-w-[821px] w-full">
                        <input type="email" placeholder="Your Email" className="w-full focus:outline-none bg-transparent border-b border-b-white pb-3 pt-2"/>
                        <div className="flex items-center gap-3 mt-6">
                            <div className="h-[1px] bg-white w-[40%] opacity-20"></div>
                            <MyButton buttonName="Subscribe" btnBG="bg-[#FE4651]"/>
                        </div>
                    </form>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[80px] gap-7 capitalize mt-[60px]">
                    <div className="">
                        <div className="flex items-center mb-4">
                            <div className="h-[16px] w-[16px] rounded-full bg-[#fe4651]"></div>
                            <Image src="/hero/Logo.png" alt="logo" width={120} height={32} />
                        </div>
                        <p className="text-base font-semibold leading-5 mb-6">
                            if you have any question, feel free to contact us 
                            <span className="text-[#FE4651] mt-2">  +088 123 128 5485</span>
                        </p>
                        <p className="mb-2 text-base font-semibold leading-5 ">say in touch
                            <span> contactinfo@gmail.com</span>
                        </p>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-3 lg:mb-6 mb-3">
                            <div className="h-[16px] w-[16px] rounded-full bg-[#fe4651]"></div>
                            <h3 className="text-xl font-bold">Quick Links</h3>
                        </div>
                        <ul className="text-base font-semibold leading-5 flex flex-col lg:gap-3">
                            <li className="mb-2">Contact</li>
                            <li className="mb-2">Terms & Conditions</li>
                            <li className="mb-2">Privacy & Policy</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-3 lg:mb-6 mb-3">
                            <div className="h-[16px] w-[16px] rounded-full bg-[#fe4651]"></div>
                            <h3 className="text-xl font-bold">Useful Links</h3>
                        </div>
                        <ul className="text-base font-semibold leading-5 flex flex-col lg:gap-3">
                            <li className="mb-2">About Us</li>
                            <li className="mb-2">Blogs</li>
                            <li className="mb-2">FAQS</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-3 lg:mb-6 mb-3">
                            <div className="h-[16px] w-[16px] rounded-full bg-[#fe4651]"></div>
                            <h3 className="text-xl font-bold">follow us</h3>
                        </div>
                        <p className="text-base font-normal leading-5">
                        A gym, also known as a fitness center or health club, is a facility dedicated to physical fitness and exercise gyms.
                        </p>
                    </div>
                </div>
            </div>  
            <div className="flex items-center py-4 justify-center border-t border-t-white border-opacity-30 mt-3">
                <p className="text-sm font-bold text-center  capitalize">copyright 2023. all right reserved. Fitstick</p>           
            </div>  
        </footer>
    );
};

export default Footer;