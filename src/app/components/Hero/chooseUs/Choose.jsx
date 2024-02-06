import Image from 'next/image';
import MyButton from '../../Button';
const Choose = () => {
    return (
        <section className='flex xl:flex-nowrap lg:flex-nowrap flex-wrap lg:gap-[105px] md:gap-[40px] gap-[20px]'>
            <div className='flex items-start justify-center]'>
                <Image className='h-full ' src="/choose/choose1.png" height={528} width={424} alt="choose us" />
            </div>
            <div className='flex flex-col lg:gap-8'>
                <div className='capitalize'>
                    <h2 className='lg:text-[48px] text-[30px] lg:font-bold font-semibold lg:leading-[57px] leading-[40px] lg:mb-8 mb-3'>
                        why choose us?<br/>
                        because we&apos;re the best.
                    </h2>
                    <p className='text-base lg:font-semibold font-medium  text-[#AAAAAA] max-w-[760px] opacity-65'>
                        Welcome to this comprehensive guide on the Apple Vision Pro features, where we delve deep into the innovative advancements of this ground brtechnology. Apple has always been at technological innovation, and the Vision Pro features 
                    </p>
                </div>
                <div className='flex lg:gap-[157px] gap-5 md:flex-nowrap flex-wrap '>
                    <div className='flex flex-col lg:gap-4 lg:mx-0 mx-auto'>
                        <div className='flex items-center gap-6 capitalize opacity-80'>
                            <Image className='md:flex hidden' src="/choose/line.png" height={1} width={112} alt="choose us" />
                            <p className='lg:text-lg text-md lg:font-semibold font-medium'>we find your trainer.</p>
                        </div>
                        <div className='flex items-center gap-6 capitalize opacity-80'>
                            <Image className='md:flex hidden' src="/choose/line.png" height={1} width={112} alt="choose us" />
                            <p className='lg:text-lg text-md lg:font-semibold font-medium'>we make your plan.</p>
                        </div>
                        <div className='flex items-center gap-6 capitalize  opacity-80'>
                            <Image className='md:flex hidden' src="/choose/line.png" height={1} width={112} alt="choose us" />
                            <p className='lg:text-lg text-md lg:font-semibold font-medium'>tack training anywhere.</p>
                        </div>
                        <div className='flex items-center lg:justify-start justify-center hover:opacity-80 mt-6'>
                            <MyButton buttonName="Get Started Now" btnBG="bg-[#FF4e25] text-white"/>
                        </div>
                    </div>
                    <div className='flex'>
                        <Image src="/choose/choose2.png" height={270} width={296} alt="choose us" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;