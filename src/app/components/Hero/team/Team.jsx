import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaSkype } from 'react-icons/fa';
const Team = () => {
    return (
        <section className='py-12 mt-[80px]'>
        <div className='flex items-center justify-between mb-7'>
            <h2 className='xl:text-5xl lg:text-3xl text-2xl 2xl:font-bold lg:font-semibold font-medium lg:leading-[57px] leading-[30px]'>Team Of Expert Trainer</h2>
            <Link href="/" className='lg:text-lg text-base lg:font-bold font-medium text-[#FF4E25] underline'>View All</Link>
        </div>
        <div className='flex lg:flex-nowrap flex-wrap gap-3 justify-center'>
            <div className='relative w-fit group cursor-pointer'>
                <Image src="/team/team1.png" height={452} width={424} alt="team" />
                <div 
                style={{
                    backgroundImage:
                      'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(217, 217, 217, 0.1) 100%)',
                  }}
                className='flex flex-col justify-center pl-4 lg:pr-32 pr-24 lg:py-5 py-2 absolute right-0 bottom-8 border-l-4 border-l-red-600' >
                    <h5 className='text-base fon-bold'>Fitness Coach</h5>
                    <h3 className='text-2xl font-bold'>David Branddh</h3>
                </div>
                <div className='bg-[#FF4E25] hidden  absolute top-0 right-6 text-white p-5 group-hover:flex transition duration-300 flex-col gap-7 text-xl'> 
                    <FaSkype/>
                    <FaFacebook/>
                    <FaLinkedin/>
                    <FaInstagram/>
                </div>
            </div>
            <div className='relative w-fit group cursor-pointer'>
                <Image src="/team/team2.png" height={452} width={424} alt="team" />
                <div 
                style={{
                    backgroundImage:
                      'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(217, 217, 217, 0.1) 100%)',
                  }}
                className='flex flex-col justify-center pl-4 lg:pr-32 pr-24 lg:py-5 py-2 absolute right-0 bottom-8 border-l-4 border-l-red-600' >
                    <h5 className='text-base fon-bold'>Fitness Coach</h5>
                    <h3 className='text-2xl font-bold'>David Branddh</h3>
                </div>
                <div className='bg-[#FF4E25] hidden  absolute top-0 right-6 text-white p-5 group-hover:flex transition duration-300 flex-col gap-7 text-xl'> 
                    <FaSkype/>
                    <FaFacebook/>
                    <FaLinkedin/>
                    <FaInstagram/>
                </div>
            </div>
            <div className='relative w-fit group cursor-pointer'>
                <Image src="/team/team1.png" height={452} width={424} alt="team" />
                <div 
                style={{
                    backgroundImage:
                      'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(217, 217, 217, 0.1) 100%)',
                  }}
                className='flex flex-col justify-center pl-4 lg:pr-32 pr-24 lg:py-5 py-2 absolute right-0 bottom-8 border-l-4 border-l-red-600' >
                    <h5 className='text-base fon-bold'>Fitness Coach</h5>
                    <h3 className='text-2xl font-bold'>David Branddh</h3>
                </div>
                <div className='bg-[#FF4E25] hidden  absolute top-0 right-6 text-white p-5 group-hover:flex transition duration-300 flex-col gap-7 text-xl'> 
                    <FaSkype/>
                    <FaFacebook/>
                    <FaLinkedin/>
                    <FaInstagram/>
                </div>
            </div>
           
          
        
           
        </div>
    </section>
    );
};

export default Team;