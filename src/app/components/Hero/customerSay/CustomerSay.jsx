import Image from 'next/image';
import CustomerImage from './CustomerImage';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

const CustomerSay = () => {
    return (
        <section className="mt-[100px]">
            <h2 className='xl:text-5xl lg:text-3xl text-2xl 2xl:font-bold lg:font-semibold font-medium lg:leading-[57px] leading-[30px] text-center capitalize'>What our saying about us</h2>
            <div className='mt-[60px] flex lg:flex-nowrap flex-wrap justify-evenly gap-[40px]'>
                <Image src="/customer/c1.png" alt="group" width={372} height={431} className='border-r border-red-500 pr-4 border-b  pb-4 '/>
            
                <div className='flex flex-col gap-7 w-[60%]'>
                    <div className='flex justify-around '>
                        <CustomerImage/>
                        <CustomerImage/>
                        <CustomerImage/>
                        <CustomerImage/>
                    </div>
                <div className='flex flex-col justify-end mt-[20px]'>
                    <h2 className='text-[#FF4E25] text-2xl font-bold mb-3'>Sandra garica</h2>
                    <h4 className='text-[#CBCBCB] text-lg font-normal mb-6'>Manager</h4>
                    <p className='text-[#AAAAAA] text-base font-normal leading-6'>I have been hiring people in this space for a number of years and I have never seen this level of the more professionalism. It really feels like you are working with a team that can I have ace for I have ace for
                        I have been hiring people in this space for a number of years and I have never seen this level of other professionalism. It really feels like you are working with a team that can the </p>
                        <div className='py-8 flex items-center gap-3  '>
                            <FaRegCircle className='text-[#FF4E25] text-[16px]'/>
                            <div className='flex items-center gap-3'>
                                <div className='bg-[#FF4E25] h-[1px] w-[34px]'></div>
                                <FaCircle className='text-[#FF4E25] text-[16px]'/>
                            </div>
                            <FaRegCircle className='text-[#FF4E25] text-[16px]'/>
                        </div>
                </div>
                </div>

              
            </div>
                
        </section>
    );
};

export default CustomerSay;